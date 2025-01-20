import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  letterSpeed?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  characterSet?: CharacterSet;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("")
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

const HyperText = forwardRef(
  (
    {
      children,
      className,
      duration = 200,
      delay = 2,
      letterSpeed = 100,
      as: Component = "div",
      startOnView = false,
      characterSet = DEFAULT_CHARACTER_SET,
      ...props
    }: HyperTextProps,
    ref
  ) => {
    const MotionComponent = motion.create(Component, {
      forwardMotionProps: true,
    });

    const [displayText, setDisplayText] = useState<string[]>(() =>
      children.split("")
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const iterationCount = useRef(0);
    const elementRef = useRef<HTMLElement>(null);

    // Expose animation trigger through ref
    useImperativeHandle(ref, () => ({
      triggerAnimation: () => {
        if (!isAnimating) {
          iterationCount.current = 0;
          setIsAnimating(true);
        }
      },
    }));

    // Handle scramble animation
    useEffect(() => {
      if (!isAnimating) return;

      const maxIterations = Math.ceil(duration / letterSpeed);
      const interval = setInterval(() => {
        if (iterationCount.current < maxIterations) {
          setDisplayText((currentText) =>
            currentText.map((letter, index) =>
              letter === " "
                ? letter
                : index <= iterationCount.current
                ? children[index]
                : characterSet[getRandomInt(characterSet.length)]
            )
          );
          iterationCount.current++;
        } else {
          setDisplayText(children.split(""));
          setIsAnimating(false);
          clearInterval(interval);
        }
      }, letterSpeed);

      return () => clearInterval(interval);
    }, [children, duration, letterSpeed, isAnimating, characterSet]);

    return (
      <MotionComponent
        ref={elementRef}
        className={cn("overflow-hidden py-2", className)}
        {...props}
      >
        <AnimatePresence>
          {displayText.map((letter, index) => (
            <motion.span key={index} className={cn("", className)}>
              {letter}
            </motion.span>
          ))}
        </AnimatePresence>
      </MotionComponent>
    );
  }
);

HyperText.displayName = "HyperText";

export default HyperText;
