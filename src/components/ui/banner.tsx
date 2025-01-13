import { useRouter } from "next/navigation";
import { LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./button";

export default function Banner() {
  const router = useRouter();
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center w-full align-middle gap-x-4">
        <p className="text-sm/6 text-gray-900 m-0">
          <strong className="font-semibold">
            We're hiring! Let us know if you're interested!
          </strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          New Sessions Start Every Three Months
        </p>
        <Button
          onClick={() => router.push(`/contact`)}
          size={"sm"}
          variant={"secondary"}
          className="group rounded-2xl px-4"
        >
          Contact Us Today
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <LuArrowBigRightDash />
          </span>
        </Button>
      </div>
    </div>
  );
}
