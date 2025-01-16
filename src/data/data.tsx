import { ChartPieIcon, House, Info, Send } from "lucide-react";
import { PiDiscoBall, PiSoccerBallFill } from "react-icons/pi";
import {
  FaChess,
  FaBasketballBall,
  FaVolleyballBall,
  FaFootballBall,
  FaPencilAlt,
  FaTheaterMasks,
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
  FaCode,
  FaLaptopCode,
  FaMicrophone,
  FaUsers,
  FaBook,
  FaBrain,
  FaChartPie,
  FaGraduationCap,
  FaMedal,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import {
  GiAmericanFootballHelmet,
  GiBasketballJersey,
  GiMicrophone,
  GiWhistle,
} from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineBrush, MdOutlineFormatQuote, MdTimer } from "react-icons/md";
import {
  programInfo,
  showcaseInfo,
  staffInfo,
  testimonialsInfo,
} from "./types";
import { IoMusicalNotes, IoMusicalNoteSharp } from "react-icons/io5";
import { ModeButton } from "@/components/ModeButton";

export const programsMenu = [
  {
    name: "Program Information",
    description: "Get a better understanding of your traffic",
    href: "/info/programs",
    icon: ChartPieIcon,
  },
  {
    name: "Our Commitment",
    description: "Speak directly to your customers",
    href: "/info/commitment",
    icon: ChartPieIcon,
  },
  {
    name: "Student Showcase",
    description: "Your customers’ data will be safe and secure",
    href: "/info/showcase",
    icon: ChartPieIcon,
  },
  {
    name: "Information for Schools",
    description: "Connect with third-party tools",
    href: "/info/schools",
    icon: ChartPieIcon,
  },
];

export const aboutMenu = [
  {
    name: "Our Mission",
    description: "Get a better understanding of your traffic",
    href: "/about/iac",
    icon: ChartPieIcon,
  },
  {
    name: "Staff",
    description: "Speak directly to your customers",
    href: "/about/staff",
    icon: ChartPieIcon,
  },
];

export const navBar = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Our Programs",
      icon: Info,
      items: [
        {
          title: "Program Information",
          url: "/info/programs",
        },
        {
          title: "Our Commitment",
          url: "/info/commitment",
        },
        {
          title: "Student Showcase",
          url: "/info/showcase",
        },
        {
          title: "Information for Schools",
          url: "/info/schools",
        },
      ],
    },
    {
      title: "About Us",
      icon: Info,
      items: [
        {
          title: "Our Mission",
          url: "/about/iac",
        },
        {
          title: "Staff",
          url: "/about/staff",
        },
      ],
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Send,
    },
  ],
};

export const programs: programInfo[] = [
  {
    title: "Chess",
    icons: [
      FaChessBishop,
      FaChessKing,
      FaChessKnight,
      FaChessQueen,
      FaChessRook,
    ],
    image: "/images/Class_Photos/Chess/chess-40.jpg",
    description:
      "Dive into the world of chess and unleash your potential for strategic mastery, honing your critical thinking and tactical brilliance every step of the way.",
    overview:
      "Our chess program presents a distinguished opportunity for students to embark on a path of intellectual development and cultivate a lasting passion for the game. Chess transcends mere gameplay; it is a sophisticated amalgamation of strategic acumen, critical analysis, and endless intellectual exploration.",
    keypoints: [
      "Fundamental Principles: We introduce students to the core principles of chess, covering the rules, piece movements, and foundational concepts",
      "Strategic Thinking: We emphasize strategic thought processes, guiding students in critical decision-making, move planning, and effective strategy formulation",
      "Tactical Skills and Checkmate Patterns: Students will acquire a range of tactical skills, including forks, pins, and skewers, alongside an understanding of common checkmate patterns critical for game success",
      "Endgame Mastery: Our program delves into endgame strategies, teaching students to capitalize on their advantages and navigate complex endgame scenarios",
      "Chess Notation: We provide instruction on algebraic chess notation, essential for game recording and analysis",
      "Historical and Cultural Insights: Students will explore the rich history and cultural significance of chess, enhancing their appreciation for this ancient and esteemed game",
      "Problem-Solving and Analytical Skills: Chess serves as a powerful tool for developing problem-solving and analytical skills, which students can apply to real-world challenges",
      "Competitions and Tournaments: Students will engage in friendly competitions and tournaments, fostering a spirit of healthy competition and enjoyment",
    ],
    outcome:
      "Participants in our chess program will enhance their problem-solving abilities, critical thinking, and strategic skills, all of which are transferable to various life situations. We maintain a low instructor-to-student ratio and provide carefully designed materials to support ongoing improvement and cognitive development. Our goal is to ignite a profound enthusiasm for chess and positively impact students' educational experiences.",
    goal: "Our chess program is dedicated to cultivating proficient players while fostering lifelong critical thinkers and strategic planners. Beyond mastering the game, our program instills forward-thinking skills, strategic anticipation, and tactical formulation, all of which are invaluable for both academic and personal growth. We strive to inspire a lasting passion for chess, offering an enriching journey of continuous exploration and advancement.",
    images: [
      "/images/Class_Photos/Chess/chess-1.jpg",
      "/images/Class_Photos/Chess/chess-3.jpg",
      "/images/Class_Photos/Chess/chess-5.jpg",
      "/images/Class_Photos/Chess/chess-18.jpg",
      "/images/Class_Photos/Chess/chess-29.jpg",
      "/images/Class_Photos/Chess/chess-34.jpg",
      "/images/Class_Photos/Chess/chess-35.jpg",
      "/images/Class_Photos/Chess/chess-36.jpg",
      "/images/Class_Photos/Chess/chess-37.jpg",
      "/images/Class_Photos/Chess/chess-39.jpg",
      "/images/Class_Photos/Chess/chess-40.jpg",
      "/images/Class_Photos/Chess/chess-43.jpg",
      "/images/Class_Photos/Chess/chess-46.jpg",
    ],
  },
  {
    title: "Basketball",
    icons: [FaBasketballBall, GiBasketballJersey],
    image: "/images/Class_Photos/Basketball/bb-18.jpg",
    description:
      "Master the court with our basketball classes, where skill and strategy come together in an electrifying blend of teamwork and excitement.",
    overview:
      "Our basketball program offers more than a venue for skill enhancement; it serves as a vibrant platform to cultivate a lifelong commitment to the sport. We emphasize not only the development of basketball skills but also the enhancement of teamwork, leadership, and a deep-seated passion for the game.",
    keypoints: [
      "Basketball Fundamentals: We begin with the essential skills of basketball, including dribbling, shooting, passing, and defensive techniques",
      "Team Dynamics: A core aspect of our program is the development of teamwork, emphasizing the importance of collaboration, effective communication, and synergy on the court",
      "Game Strategies: Students will advance to more sophisticated game strategies, covering offensive plays, defensive tactics, and strategic decision-making",
      "Understanding Basketball Rules: Our program ensures students acquire a thorough understanding of basketball rules and regulations, promoting fair and enjoyable play",
      "Leadership and Sportsmanship: We foster leadership qualities and sportsmanship, encouraging students to exhibit these values both on and off the court",
    ],
    outcome:
      "Our program is designed to develop students into proficient athletes and well-rounded individuals, instilling values of teamwork, leadership, and passion that extend beyond the sport. We are dedicated to providing a comprehensive basketball education that supports the personal and athletic growth of each student.",
    goal: "Our primary objective is to empower students with the knowledge, skills, and values necessary for success in basketball and beyond. We aim to equip students with the tools for a prosperous future, enhancing their opportunities and achievements in both their personal and professional lives.",
    images: [
      "/images/Class_Photos/Basketball/bb-4.JPG",
      "/images/Class_Photos/Basketball/bb-2.jpg",
      "/images/Class_Photos/Basketball/bb-5.JPG",
      "/images/Class_Photos/Basketball/bb-6.JPG",
      "/images/Class_Photos/Basketball/bb-9.JPG",
      "/images/Class_Photos/Basketball/bb-18.jpg",
      "/images/Class_Photos/Basketball/bb-11.JPG",
      "/images/Class_Photos/Basketball/bb-12.JPG",
      "/images/Class_Photos/Basketball/bb-1.jpg",
      "/images/Class_Photos/Basketball/bb-3.JPG",
      "/images/Class_Photos/Basketball/bb-13.JPG",
      "/images/Class_Photos/Basketball/bb-14.jpg",
      "/images/Class_Photos/Basketball/bb-15.jpg",
      "/images/Class_Photos/Basketball/bb-16.jpg",
    ],
  },
  {
    title: "Volleyball",
    icons: [FaVolleyballBall, MdTimer],
    image: "/images/Class_Photos/Volleyball/vb-6.JPG",
    description:
      "Set, spike, and serve your way to volleyball mastery, where precision, strategy, and sportsmanship come together for an unbeatable experience.",
    overview:
      "Our core objective is to equip students with fundamental volleyball skills while emphasizing teamwork, strategic play, and an enduring passion for the game.",
    keypoints: [
      "Serving Mastery: Students will master the art of serving, developing both precision and power to start each rally effectively",
      "Bump and Pass Techniques: We emphasize accuracy in bumping and passing, essential for maintaining control and facilitating effective play",
      "Setting and Spiking Skills: Through progressive training, students will refine their setting and spiking abilities, enhancing their capacity to orchestrate attacks and deliver powerful spikes",
      "Net Play and Blocking: We focus on net play and blocking techniques, teaching students how to excel defensively and assert dominance at the net",
      "Tactical Strategies: Students will gain an in-depth understanding of volleyball tactics, including rotations, positions, and team coordination on the court",
      "Sportsmanship and Fair Play: We highlight the importance of sportsmanship, fostering a positive and respectful environment in every game",
    ],
    outcome:
      "Students will develop a comprehensive skill set that encompasses serving, bumping, passing, setting, and spiking, leading to a well-rounded volleyball proficiency. They will learn to apply tactical strategies effectively, enhancing their game awareness and coordination. Mastery of net play and blocking will enable them to perform defensively and contribute significantly to their team's success. Additionally, by emphasizing sportsmanship and fair play, students will cultivate values of respect and teamwork that will benefit them both on and off the court",
    goal: "Our volleyball program aims to produce not only skilled players but also individuals who possess a lifelong passion for the sport. By instilling values of teamwork, discipline, and sportsmanship, we prepare students for success both in volleyball and in their broader lives.",
    images: [
      "/images/Class_Photos/Volleyball/vb-1.JPG",
      "/images/Class_Photos/Volleyball/vb-2.JPG",
      "/images/Class_Photos/Volleyball/vb-3.JPG",
      "/images/Class_Photos/Volleyball/vb-5.JPG",
      "/images/Class_Photos/Volleyball/vb-6.JPG",
    ],
  },
  {
    title: "Flag Football",
    icons: [FaFootballBall, GiAmericanFootballHelmet],
    image: "/images/flagfootball.jpg",
    description:
      "Experience the thrill of flag football, where high energy and teamwork blend seamlessly for an exciting time on the field.",
    overview:
      "Our flag football classes provide an exceptional opportunity for students to develop their athletic skills and foster a lasting enthusiasm for the sport. Flag football combines elements of strategy, teamwork, and physical agility, offering a dynamic and engaging experience for participants.",
    keypoints: [
      "Fundamentals of Flag Football: Students will be introduced to the basic rules and structure of flag football, including how to properly handle the ball, basic footwork, and the objectives of the game",
      "Passing and Receiving Skills: We focus on developing accurate passing techniques and effective receiving skills, essential for advancing the ball and executing successful plays",
      "Running and Offensive Strategies: Students will learn various running techniques and offensive strategies, including route running and creating scoring opportunities",
      "Defensive Tactics and Flag Pulling: Our program emphasizes defensive skills, such as proper flag pulling techniques, positioning, and reading the opponent's plays to effectively defend",
      "Teamwork and Communication: We stress the importance of teamwork and communication on the field, teaching students how to collaborate effectively and support one another during games",
      "Game Situations and Strategy: Students will engage in drills and scrimmages that simulate game situations, helping them apply learned skills and strategies in real-time",
      "Sportsmanship and Fair Play: We promote good sportsmanship, respect for opponents, and fair play, ensuring a positive and inclusive environment for all participants",
    ],
    outcome:
      "Students will gain a well-rounded understanding of flag football, including fundamental skills such as passing, receiving, running, and flag pulling. They will develop strategic thinking and teamwork abilities, which are crucial for both offensive and defensive plays. By participating in game simulations, students will learn to apply their skills in practical situations, enhancing their overall game performance. Emphasis on sportsmanship will help students appreciate the value of fair play and respect in sports.",
    goal: "Our flag football program aims to cultivate skilled players while instilling a lifelong love for the game. We strive to develop not only technical abilities but also essential qualities such as teamwork, discipline, and sportsmanship. Our goal is to provide students with the skills and values that will benefit them both on and off the field, preparing them for future success in sports and in life.",
    images: [],
  },
  {
    title: "Soccer",
    icons: [PiSoccerBallFill, GiWhistle],
    image: "/images/Class_Photos/Soccer/soccer-9.jpg",
    description:
      "Step onto the field and elevate your game, sharpening your skills while embracing the spirit of teamwork and strategic play.",
    overview:
      "Our soccer classes transcend mere skill development; they serve as vibrant platforms for cultivating a lifelong passion for the beautiful game. We are dedicated to providing students with essential soccer skills while emphasizing the significance of teamwork, strategic thinking, and a deep-seated love for the sport.",
    keypoints: [
      "Positional Play: Students will explore various playing positions and their roles on the field, deepening their understanding of team dynamics",
      "Tactical Understanding: We focus on advanced soccer tactics, including offside traps and set pieces, to develop strategic and insightful players",
      "Goalkeeper Training: Specialized training for goalkeepers will cover diving, shot-stopping, and distribution, nurturing future stars in this critical position",
      "Small-Sided Games and Scrimmages: Emphasis on applying skills in game situations through small-sided games and scrimmages, challenging and refining students' abilities",
      "Soccer Etiquette: We promote good sportsmanship, fair play, and respect for opponents, fostering a positive and respectful soccer culture",
    ],
    outcome:
      "Students will acquire a well-rounded set of skills and knowledge that extends beyond technical abilities. They will gain a profound understanding of positional play and tactics, enhancing their strategic insight and game intelligence. Through targeted goalkeeper training, they will develop essential skills for this specialized role. Participation in small-sided games and scrimmages will enable them to apply their skills in realistic scenarios, improving their practical game performance. Additionally, the emphasis on soccer etiquette will instill values of respect, sportsmanship, and teamwork, contributing to their growth as not only proficient players but also exemplary individuals in the sport",
    goal: "Our program is meticulously designed with materials, drills, and resources that align with our curriculum to significantly enhance students' skills. Beyond skill development, our mission is to ignite a lifelong passion for soccer, envisioning a future where students embrace the sport with unwavering enthusiasm, leading to success, teamwork, and triumphant victories on the field.",
    images: [
      "/images/Class_Photos/Soccer/soccer-2.jpg",
      "/images/Class_Photos/Soccer/soccer-3.jpg",
      "/images/Class_Photos/Soccer/soccer-4.jpg",
      "/images/Class_Photos/Soccer/soccer-5.jpg",
      "/images/Class_Photos/Soccer/soccer-6.jpg",
      "/images/Class_Photos/Soccer/soccer-7.jpg",
      "/images/Class_Photos/Soccer/soccer-8.jpg",
      "/images/Class_Photos/Soccer/soccer-9.jpg",
      "/images/Class_Photos/Soccer/soccer-10.jpg",
      "/images/Class_Photos/Soccer/soccer-11.jpg",
      "/images/Class_Photos/Soccer/soccer-12.jpg",
      "/images/Class_Photos/Soccer/soccer-14.jpg",
    ],
  },
  {
    title: "Creative Writing",
    icons: [FaPencil, TfiWrite, MdOutlineFormatQuote],
    image: "/images/Class_Photos/Creative_Writing/CW_2.jpg",
    description:
      "Unleash your imagination and bring your ideas to life by transforming them into compelling narratives through the art of writing.",
    overview:
      "Our Creative Writing Classes are designed to transcend conventional writing instruction by fostering creativity and nurturing a lifelong passion for writing. We aim to equip students with essential writing skills for academic success while emphasizing that writing is a profound journey of self-discovery and self-expression",
    keypoints: [
      "Exploring the Functions and Values of Writing: We introduce students to the practical applications of writing, demonstrating how it serves as a crucial skill in both academic and real-world contexts. This exploration helps students appreciate writing's role beyond the classroom",
      "Grammar Mastery: Students will acquire a solid understanding of grammar fundamentals, including correct sentence structure, punctuation, and usage. Mastery of these elements forms the bedrock of effective writing and communication",
      "Writing Prompts and Story Organization: To ignite creativity, students will engage with diverse writing prompts and learn to organize their thoughts into coherent, compelling narratives. We guide them through outlining and structuring stories, emphasizing clarity and creativity",
      "Fostering Artistic Expression: We encourage students to embrace their artistic side by exploring various writing styles and genres. This approach allows them to express themselves through different creative mediums, enhancing their versatility as writers",
      "Stimulating Imagination: Our classes feature exercises and activities designed to stimulate students' imaginations. By encouraging creative thinking and unique story development, we help students expand their narrative possibilities",
      "Verbs and Adjectives in Descriptive Writing: Students will focus on using vivid verbs and descriptive adjectives to enrich their writing. This skill will enable them to craft more engaging, detailed, and evocative narratives",
    ],
    outcome:
      "We are committed to helping students explore the vast landscapes of their thoughts and create vivid imagery with words. Our goal is to inspire a lifelong love of writing, viewing it as a journey that evolves and expands over time. Through this creative process, students will develop the ability to captivate and resonate with others, enhancing their literary and personal expression.",
    goal: "Our commitment extends beyond the classroom, aiming to instill a profound and enduring love for writing that enriches both academic and personal lives. We view writing as a source of solace, a medium for documenting experiences, and a channel for artistic expression. Our program aspires to ignite and sustain each student's creative flame, seeing writing as a canvas for thoughts, emotions, and ideas—a faithful outlet for inner musings and a means of sharing unique perspectives with the world.",
    images: [
      "/images/Class_Photos/Creative_Writing/CW_1.jpg",
      "/images/Class_Photos/Creative_Writing/CW_2.jpg",
    ],
  },
  {
    title: "Public Speaking",
    icons: [FaMicrophone, FaUsers, GiMicrophone],
    image: "/images/public_speaking.jpg",
    description:
      "Master the art of effective communication and captivate your audience with confidence and poise in our public speaking classes",
    overview:
      "Our Public Speaking Classes are designed to empower individuals with the skills and confidence needed to communicate effectively in any setting. Through engaging lessons and practical exercises, we aim to transform public speaking into a powerful tool for self-expression, persuasion, and connection. This program focuses on building communication skills, enhancing confidence, and developing techniques to deliver impactful speeches in various settings.",
    keypoints: [
      "Understanding the Fundamentals of Public Speaking: We introduce students to the principles of effective communication, focusing on clarity, engagement, and audience connection. This foundation helps students build confidence and reduce anxiety",
      "Voice Modulation and Tone: Students will learn how to use their voice as a powerful tool, mastering techniques like modulation, pitch variation, and pacing to convey their message with impact and authenticity",
      "Structuring Compelling Speeches: We guide students in organizing their thoughts into well-structured presentations. This includes crafting engaging introductions, clear main points, and memorable conclusions to leave a lasting impression",
      "Nonverbal Communication: Emphasis is placed on body language, eye contact, and facial expressions to complement verbal delivery and create a strong presence on stage",
      "Impromptu Speaking Skills: Through dynamic exercises, students will practice thinking on their feet, responding to unexpected questions, and delivering speeches without preparation, building confidence for any scenario",
      "Persuasion and Storytelling: Students will explore the art of persuasion and learn how to weave compelling stories into their speeches to captivate and inspire their audience",
    ],
    outcome:
      "Students will confidently deliver clear and impactful speeches, enhancing their communication skills for academic, personal, and professional success. Our classes are designed to help students overcome the fear of public speaking and embrace it as an opportunity to share their voice. By mastering key communication techniques, students will develop the ability to engage and inspire audiences, confidently express their ideas, and leave a lasting impression in any setting.",
    goal: "Beyond mastering the technical skills of public speaking, our program aims to instill a deeper appreciation for the power of words and the importance of authentic communication. We strive to help each student discover their unique voice and use it to connect with others, share their story, and make an impact. Whether presenting in a boardroom, on stage, or in everyday conversations, our goal is to inspire confidence and creativity, empowering students to speak with purpose and passion.",
    images: [],
  },
  {
    title: "Comic Book",
    icons: [FaPencilAlt, FaBook, MdOutlineBrush],
    image: "/images/Comic_Book.png",
    description:
      "Dive into the world of storytelling and art by creating your own comic book, blending imagination with illustration",
    overview:
      "This class encourages creativity through the exploration of storytelling, character design, and comic book illustration techniques. This class is designed to celebrate the artistry, creativity, and cultural impact of comic books while fostering a deeper appreciation for the medium. Whether you're a lifelong fan or new to the world of comics, our club is a place to explore, create, and connect.",
    keypoints: [
      "History and Evolution of Comics: Dive into the rich history of comic books, from their golden age origins to modern-day masterpieces. Explore the cultural milestones, iconic creators, and groundbreaking works that have defined the medium",
      "Artistic Techniques: Learn the fundamentals of comic book art, including panel composition, character design, and visual storytelling. Whether you’re sketching superheroes or crafting vibrant settings, this class will sharpen your artistic skills",
      "Scriptwriting and Story Development: Discover the art of writing compelling comic book scripts. From creating dynamic characters to crafting engaging plots, we guide you through the process of bringing your stories to life",
      "Exploring Genres and Themes: Comic books are more than capes and tights. Explore diverse genres such as sci-fi, fantasy, mystery, and slice-of-life, and discuss the themes and narratives that make them resonate with readers",
      "Collaboration and Creation: Team up with fellow club members to create original comic book projects. Share ideas, combine talents, and bring your collective vision to life in a supportive, collaborative environment",
      "Critical Discussions and Reviews: Engage in thoughtful discussions about iconic comic book works, analyzing storytelling techniques, themes, and artistic styles. Develop your ability to critique and appreciate the medium at a deeper level",
    ],
    outcome:
      "Students will create their own comic book, combining storytelling and art skills to bring their unique vision to life. By the end of the class, members will have a comprehensive understanding of the comic book medium, from its artistic and literary elements to its cultural significance. Students will develop skills in storytelling, art, and analysis, while also fostering a sense of community and collaboration with fellow enthusiasts. Most importantly, they’ll discover the power of comics to inspire, entertain, and connect people from all walks of life.",
    goal: "Our mission is to cultivate a lifelong love for comic books while empowering students to create their own stories. We aim to celebrate the artistry, innovation, and cultural impact of this unique medium, encouraging members to see comics as both a powerful storytelling tool and a form of personal expression. Whether creating, analyzing, or simply enjoying comics, this club is a space to celebrate creativity and forge connections with fellow enthusiasts.",
    images: [],
  },
  {
    title: "Performing Arts",
    icons: [FaTheaterMasks],
    image: "/images/Class_Photos/Performing_Arts/pa-5.jpg",
    description:
      "Learn to play theater and masks with our theater and masks classes, where skill and creativity come together in an exciting blend of artistic expression and creative problem-solving.",
    overview:
      "Our Performing Arts Classes offer an exceptional opportunity for students to hone their acting skills, build self-confidence, and cultivate a lasting passion for the performing arts. Our mission is to provide students with essential acting techniques, nurturing their creative expression, stage presence, and immersion in the world of theater.",
    keypoints: [
      "Acting Fundamentals: We lay a strong foundation in acting, focusing on essential skills such as stage presence, body language, and vocal articulation",
      "Character Development: Students will advance their abilities in character analysis, learning the art of bringing fictional characters to life with depth and authenticity",
      "Script Analysis and Scene Work: Our program guides students through the process of script dissection and scene work, enhancing their ability to interpret and perform diverse dramatic material",
      "Writing Prompts and Story Organization: We introduce students to various writing prompts to inspire creativity and assist them in structuring compelling narratives. This component emphasizes outlining and organizing story elements effectively",
      "Improvisation and Spontaneity: Through improvisational exercises, students will enhance their ability to think on their feet and respond creatively in the moment",
      "Stimulating Imagination: Our classes incorporate activities designed to spark students' imaginations, encouraging the development of unique story ideas and creative concepts",
      "Collaborative Performances: Students will engage in group productions, fostering teamwork and artistic collaboration while showcasing their skills in full-scale theatrical performances",
    ],
    outcome:
      "Our commitment to a low instructor-to-student ratio ensures personalized attention and tailored guidance for each student. This approach supports their growth and development in acting, providing them with the tools needed for success in their artistic pursuits.",
    goal: "We aim to equip students with a comprehensive array of materials, scripts, and resources aligned with our curriculum. Our goal is to not only teach acting but to shape the next generation of artists, storytellers, and confident individuals. We guide students through a journey of self-discovery and creativity, transforming the stage into a gateway to a world of opportunities. Our program is dedicated to nurturing talent, fostering artistic expression, and preparing students for a future enriched by the performing arts.",
    images: [
      "/images/Class_Photos/Performing_Arts/pa-1.jpg",
      "/images/Class_Photos/Performing_Arts/pa-2.jpg",
      "/images/Class_Photos/Performing_Arts/pa-3.jpg",
      "/images/Class_Photos/Performing_Arts/pa-4.jpg",
      "/images/Class_Photos/Performing_Arts/pa-5.jpg",
      "/images/Class_Photos/Performing_Arts/pa-6.jpg",
      "/images/Class_Photos/Performing_Arts/pa-8.jpg",
      "/images/Class_Photos/Performing_Arts/pa-9.jpg",
    ],
  },
  {
    title: "Dance",
    icons: [IoMusicalNotes, PiDiscoBall, IoMusicalNoteSharp],
    image: "/images/Class_Photos/Dance/dance-3.JPG",
    description:
      "Explore the joy of movement and rhythm in our dance classes, where technique, creativity, and expression come together to create a dynamic and inspiring experience.",
    overview:
      "Our dance program is designed for all skill levels, focusing on building confidence, improving coordination, and fostering a love for dance through various styles and techniques.",
    keypoints: [
      "Explore diverse dance styles: Gain experience in ballet, jazz, contemporary, and more, learning techniques across various genres",
      "Boost confidence and creativity: Develop self-assurance while expressing your unique creativity through movement",
      "Enhance physical fitness: Improve flexibility, coordination, and overall strength through engaging dance routines",
      "Master choreography and performance: Learn to design and execute choreography, preparing for live performances",
      "Teamwork and collaboration: Participate in group dances to build communication and collaboration skills",
      "Establish strong fundamentals: Build a solid foundation in core dance techniques to support your growth",
      "Cultural dance appreciation: Discover and celebrate the significance of cultural dances from around the globe",
      "Perform live: Showcase your skills and creativity in live performances and showcases",
      "Cultivate discipline and perseverance: Strengthen your focus and determination through regular practice and dedication",
    ],
    outcome:
      "Students will gain improved physical fitness, enhanced dance techniques, and confidence in expressing themselves through movement.",
    goal: "To inspire students to find joy and passion in dance while building lifelong skills in discipline, creativity, and teamwork.",
    images: [
      "/images/Class_Photos/Dance/dance-1.JPG",
      "/images/Class_Photos/Dance/dance-3.JPG",
      "/images/Class_Photos/Dance/dance-4.JPG",
      "/images/Class_Photos/Dance/dance-5.JPG",
    ],
  },
  {
    title: "Coding",
    icons: [FaLaptopCode, FaCode],
    image: "/images/codingclass.jpg",
    description:
      "Code your way to creativity and innovation with hands-on projects and interactive, game-based learning that makes programming fun and inspiring.",
    overview:
      "Our coding classes provide an exciting gateway to the world of web development, merging creativity and technology through engaging, game-based learning. Designed to captivate and inspire, our curriculum focuses on web development skills while keeping students enthusiastic and curious about programming",
    keypoints: [
      "Coding Fundamentals: Students will begin with foundational concepts in coding, using block coding to understand basic programming principles, syntax, and logic. This approach builds a strong base in algorithmic thinking",
      "Transition to Script Coding: As students gain confidence with block coding, we will introduce script coding. This progression allows them to apply their skills to more complex programming languages and real-world web development tasks",
      "Web Development Basics: Students will explore the core elements of web development, including HTML, CSS, and JavaScript. They'll learn to create and style web pages, and understand how these technologies work together to build interactive websites",
      "Game-Based Projects: To maintain high levels of engagement, students will work on game-based projects. These projects will involve creating interactive web games and simulations, applying coding skills to develop engaging and functional applications",
      "Problem-Solving and Algorithmic Thinking: Students will tackle coding challenges that enhance their problem-solving abilities and algorithmic thinking. They will learn to plan, debug, and optimize their code for efficiency and effectiveness",
      "Collaborative Coding: We emphasize teamwork by encouraging students to collaborate on projects. They will provide and receive feedback, fostering a supportive community and learning from their peers",
      "Real-World Applications: Students will have opportunities to apply their skills to real-world scenarios through project-based learning. These projects will demonstrate the practical applications of their coding knowledge and enhance their understanding of web development",
      "Creativity and Innovation: Our program nurtures creativity by allowing students to design and develop their own web-based games and interactive applications. This approach encourages innovative thinking and personal expression in their projects",
    ],
    outcome:
      "Students will gain a robust understanding of web development fundamentals and practical coding skills through engaging, game-based projects. They will develop problem-solving abilities, algorithmic thinking, and collaborative skills, preparing them for further studies and future careers in technology.",
    goal: "Our goal is to foster a lifelong passion for coding and web development. We aim to instill problem-solving skills, logical thinking, and creative innovation that extend beyond programming. By integrating game-based learning, we make coding enjoyable and accessible, preparing students for success in the tech industry and beyond. We envision a future where students are not only skilled coders but also enthusiastic creators, continually exploring and innovating in the world of technology.",
    images: [],
  },
];

export const showcase: showcaseInfo[] = [
  {
    subject: "Creative Writing",
    works: [
      {
        title: "A Journey Through Time",
        author: "Anonymous 5th Grade",
        date: "Session 2 2024",
        description:
          "A short story exploring the concept of time travel and its emotional impacts.",
        preview:
          "As the clock struck midnight, Olivia stared at the mysterious device her grandfather had left her. It had been sitting in her attic for years, unnoticed and collecting dust. But now, as it began to hum and glow, she felt a mix of excitement and fear.",
        writing: `As the clock struck midnight, Olivia stared at the mysterious device her grandfather had left her. It had been sitting in her attic for years, unnoticed and collecting dust. But now, as it began to hum and glow, she felt a mix of excitement and fear. The cryptic instructions he had left behind only said one thing: "Trust the device, and it will show you wonders." Her heart pounded as she debated whether to touch it. What if it was dangerous? What if it didn’t work at all? She finally decided that the only way to know was to try.

        Taking a deep breath, Olivia placed her hand on the glowing surface. Instantly, she felt a surge of energy coursing through her body. Colors and lights swirled around her, and her ears were filled with the sound of rushing wind. It felt as though the ground beneath her had disappeared, leaving her floating in an endless void. Then, just as suddenly as it had started, the sensation stopped. She opened her eyes and found herself in an entirely different place. The air smelled of freshly baked bread and horses, and the sound of chatter surrounded her. She realized she wasn’t just anywhere—she was in a city from centuries past.

        As Olivia wandered the cobblestone streets, she marveled at the bustling marketplace. Vendors called out to passersby, displaying colorful fabrics, glistening fruits, and handcrafted jewelry. She passed a group of children playing a game with hoops and sticks, their laughter filling the air. Everything felt vivid and alive, like she had stepped into a storybook. Olivia wondered if this was the kind of adventure her grandfather had experienced. Did he walk these same streets? Did he meet these same people? She couldn’t shake the feeling that she was part of something much larger than herself.

        Olivia’s awe was interrupted by a friendly man who approached her. “You seem lost,” he said, his eyes kind. She hesitated for a moment before nodding, unsure of how much she should reveal. The man introduced himself as Thomas and offered to show her around. Grateful for his kindness, Olivia followed him as he pointed out landmarks and told her stories about the city’s history. With every word, she felt a deeper connection to this place. It was as though the city itself welcomed her, inviting her to explore its secrets.

        As the sun dipped below the horizon, Olivia knew it was time to go home. She thanked Thomas and found a quiet corner where she could activate the device. The return journey was just as intense as the first, but this time she felt a sense of calm. When she opened her eyes, she was back in her attic. The device sat quietly, as if it had never moved. Olivia smiled, clutching the experience close to her heart. She knew this was only the beginning of her adventures—and she couldn’t wait to see where the device would take her next.`,
      },
      {
        title: "Whispers of the Forest",
        author: "Anonymous 6th Grade",
        date: "Session 3 2024",
        description:
          "A poetic exploration of nature's mysteries and the hidden life within the forest.",
        preview:
          "The forest was alive with sounds and whispers that seemed to speak directly to Liam. Each rustling leaf and creaking branch seemed to tell a story, as if the forest itself were speaking to him. He stepped carefully, his shoes crunching softly on the blanket",
        writing: `The forest was alive with sounds and whispers that seemed to speak directly to Liam. Each rustling leaf and creaking branch seemed to tell a story, as if the forest itself were speaking to him. He stepped carefully, his shoes crunching softly on the blanket of leaves that covered the ground. The trees above him stretched high into the sky, their branches forming a canopy that filtered the sunlight into golden rays. Liam felt as though he had stepped into another world—one untouched by time or human hands. The air was thick with the earthy scent of moss and damp wood. Every step he took felt like a discovery.

        As Liam ventured deeper, he noticed how the forest seemed to change around him. The air grew cooler, and the noises of the outside world faded into a peaceful silence. He saw a family of deer grazing by a small clearing, their movements graceful and unhurried. When they spotted him, they froze, their large eyes meeting his. Liam stood perfectly still, not wanting to disturb the moment. After a few heartbeats, they resumed their grazing, and Liam felt a sense of calm wash over him. It was as if the forest had accepted him, even if just for a little while.

        Soon, Liam came across a stream that wound its way through the trees. The water sparkled in the sunlight, its gentle gurgling sound adding to the forest’s symphony. He knelt by the stream and dipped his fingers into the cool water. The sensation was refreshing, grounding him in the present. As he looked closer, he noticed tiny fish darting through the water and the smooth, colorful stones beneath the surface. The stream felt alive, a vital part of the forest’s heartbeat. Liam realized that every element of this place was connected, working together in perfect harmony.

        Continuing his journey, Liam stumbled upon a towering oak tree standing alone in a sunlit clearing. Its trunk was wide and gnarled, its roots twisting deep into the earth. At the base of the tree, he found carvings etched into the bark—symbols and shapes he couldn’t understand but felt drawn to. He traced the carvings with his fingers, wondering who had created them and why. Were they a message left by someone long ago? Or perhaps a tribute to the forest itself? The questions filled him with curiosity, but the answers remained a mystery.

        As the day wore on, Liam decided it was time to head back. The forest seemed to guide him, the paths he had taken earlier now feeling familiar. When he finally stepped out of the trees and into the open field beyond, he turned back for one last look. The forest stood tall and silent, a world full of secrets he had only begun to uncover. Liam felt a deep gratitude for the experience, knowing he had been part of something extraordinary. He promised himself he would return, not just to explore, but to listen to the whispers of the forest once more.`,
      },
    ],
  },
];

export const staffCategories: staffInfo[] = [
  {
    category: "Founder",
    members: [
      {
        name: "Justin Perez",
        role: "Co-Founder/ CEO",
        bio: "Leads with heart, empowering kids to thrive beyond limits",
        image: "/images/Staff_Photos/Justin_P.jpg",
        icons: [],
        moreInfo: {
          email: "justin@iacafterschools.com",
          phone: "(714) 509-0069",
          text: "Justin's journey to founding IAC was inspired by a career defined by dedication and noteworthy achievements. Prior to establishing IAC, he distinguished himself at a previous organization where his exceptional teaching skills earned him recognition in the Tustin Weekly newspaper. In that moment of recognition, Justin passionately described chess as a transformative pursuit, highlighting its profound impact on life skills and strategic thinking. Building on this success, his unwavering commitment to education was honored with the prestigious Millennium Leadership Award from Marin Millennium, celebrating his exemplary leadership and tireless dedication to nurturing future generations. Motivated by these experiences, Justin envisioned IAC as an inclusive educational platform that caters to the diverse needs and interests of students. <br/> Justin’s vision for IAC was not limited to traditional education; it was a mission to create an environment where learning transcends subject matter and imparts life skills that students carry into adulthood. At the heart of this vision is a commitment to fostering a platform where students can connect with instructors who are not only knowledgeable but also supportive mentors. These mentors guide and inspire students, cultivating a passion for learning and a deeper understanding of the subjects they pursue. Justin dreamed of IAC as a safe space where students could explore their interests, gain meaningful insights, and grow both academically and personally.<br/> Central to Justin’s approach is the belief that education should equip students with practical skills that prepare them for real-world challenges. He aspired for IAC to be a place where students not only excel in academic pursuits but also develop the critical thinking and resilience necessary for professional and personal success. His dedication to a holistic approach in education underscores his commitment to the growth and development of every student under the IAC umbrella.<br/>In pursuit of his vision, Justin strives to build enduring trust with partners and collaborators. His deep-rooted passion for teaching and genuine care for his students fuel his dedication to nurturing an environment where growth and learning thrive. Justin’s vision for IAC's future is ambitious; he seeks to broaden the company’s reach to include more schools and expand the curriculum to encompass an even wider array of subjects. His relentless pursuit of excellence and drive to touch more students’ lives reflect his commitment to enhancing educational experiences and preparing learners for the future.<br/>Within the IAC community, Justin is a respected leader and source of inspiration. Instructors turn to him for guidance, leadership, and the invaluable insights he offers to help them excel as educators and mentors. His vast experience and steadfast commitment to education have made him a beacon of excellence, shaping the growth and development of those under his mentorship. Justin’s visionary approach motivates everyone within IAC to aim higher, pursue excellence, and continuously strive for self-improvement. Under his leadership, IAC is more than an educational institution; it is a vibrant, evolving community that inspires its members to push boundaries and achieve new levels of success.<br/>In this atmosphere of continuous learning and transformation, Justin’s influence is profound, serving as a reminder that the pursuit of knowledge and excellence is a lifelong journey. His leadership propels IAC forward, enriching the educational landscape and nurturing the potential of every student and instructor who is part of the IAC family.",
          images: [
            "/images/Staff_Photos/Justin/Justin_award.jpg",
            "/images/Staff_Photos/Justin/Justin_Frame.jpg",
            "/images/Staff_Photos/Justin/image16.jpg",
            "/images/Staff_Photos/Justin/image3.jpg",
            "/images/Staff_Photos/Justin/image.jpg",
            "/images/Staff_Photos/Justin/image2.jpg",
            "/images/Staff_Photos/Justin/image13.jpg",
            "/images/Staff_Photos/Justin/image00.jpg",
            "/images/Staff_Photos/Justin/image14.jpg",
            "/images/Staff_Photos/Justin/image11.jpg",
            "/images/Staff_Photos/Justin/image12.jpg",
            "/images/Staff_Photos/Justin/image20.jpg",
            "/images/Staff_Photos/Justin/image15.jpg",
            "/images/Staff_Photos/Justin/image19.jpg",
            "/images/Staff_Photos/Justin/image21.jpg",
            "/images/Staff_Photos/Justin/image17.jpg",
            "/images/Staff_Photos/Justin/image18.jpg",
          ],
        },
      },
      {
        name: "Jason Perez",
        role: "Co-Founder",
        bio: "Provides steadfast support to help kids thrive",
        image: "/images/Staff_Photos/Jason_P.jpg",
        icons: [],
        moreInfo: {
          text: "When Justin set out to establish IAC, his brother, Jason Perez, was not just a supporter but an indispensable part of that journey as his co-founder and unwavering champion. From the earliest stages of building the company, Jason was the steady anchor on whom Justin relied, offering unyielding support, insightful guidance, and relentless encouragement. His belief in Justin’s vision was profound and absolute. Jason recognized the immense potential in what Justin was creating and, without hesitation, dedicated himself to making that vision a reality. He understood that the journey would be filled with challenges, but his confidence in their shared mission drove him to give his all, day after day. While Justin emerged as the face of IAC, leading with his innovative approach to education, Jason worked diligently behind the scenes to ensure the company had the stability and resources needed to flourish. His quiet strength, strategic thinking, and tireless dedication were fundamental in building the strong foundation on which IAC would stand.<br/>As co-founder, Jason brought a unique blend of practical knowledge, strategic insight, and unwavering dedication that perfectly complemented Justin’s passion for teaching. He understood the nuances of starting a new venture—the long hours, the uncertainties, and the need for resilience—and was there at every turn to navigate obstacles and celebrate successes. Far from diminishing his impact, Jason’s work behind the scenes amplified it. He was not only a pillar of support but a force of execution, enabling Justin to shine as the leader while knowing that IAC’s operations were solid and its growth sustainable.<br/>Jason’s contributions went far beyond the financial realm; he was Justin’s confidant, sounding board, and motivator. He made personal sacrifices that underscored his commitment to IAC’s mission and to Justin’s dream. His belief in the transformative power of education was as deep as his dedication to ensuring that IAC could achieve its fullest potential. Jason’s generosity of spirit, boundless dedication, and willingness to go above and beyond propelled the company forward during its formative years. It was his drive and shared vision that helped translate ambition into tangible progress.<br/>Although Jason preferred to stay out of the spotlight, his influence permeates every part of IAC’s story. His quiet commitment was woven into the fabric of the company’s growth, ensuring that every decision and every milestone was backed by his unwavering support. His presence allowed Justin to focus on what he did best—creating an educational environment that was inclusive, innovative, and responsive to the unique needs of students. The synergy between the two brothers was a perfect blend of vision and execution, each playing a role that complemented and elevated the other. This dynamic laid the groundwork for IAC’s success and set the tone for its growth.<br/>Jason’s legacy at IAC is one of quiet strength, steadfast dedication, and enduring impact. As co-founder, he was more than a behind-the-scenes contributor; he was a cornerstone of the company’s early achievements. His belief in Justin’s vision was the driving force behind his unwavering support, and his role in helping turn that vision into a reality is irreplaceable. The profound bond between the brothers, marked by mutual respect and shared determination, created an atmosphere where IAC could thrive. Jason’s influence extended beyond just the initial stages of development; it became embedded in the company’s ethos, inspiring a culture of support, resilience, and ambition that resonates throughout IAC to this day.<br/>His contributions left an indelible mark not only on the company itself but also on everyone who has been part of its journey. In every aspect of IAC’s evolution—from the trust built with students and families to the innovative curriculum that sets it apart—Jason’s dedication is evident. His steadfast commitment to supporting the vision, ensuring operational soundness, and fostering an environment of growth and learning helped shape IAC into what it is today: a beacon of educational excellence.",
          images: [],
        },
      },
    ],
  },
  {
    category: "Senior Instructors",
    members: [
      {
        name: "Tina Huynh",
        role: "Chief Operating Officer",
        bio: "Oversees operations, engineering, and administration seamlessly.",
        image: "/images/Staff_Photos/Tina.jpg",
        icons: [FaLaptopCode, FaPencil, FaChess],
        moreInfo: {
          email: "tina@iacafterschools.com",
          phone: "(714) 858-2418",
          text: "Tina's journey into the world of education began during her middle school years when she volunteered at summer camps held at the University of California, Irvine. It was there that she first discovered her passion for teaching. She found immense joy in helping her fellow students grasp subjects she was knowledgeable about and experienced the satisfaction of giving back to others. Upon graduating from high school, Tina dedicated even more of her time to introducing elementary and middle school students to the world of STEM, with a particular focus on software engineering and coding. She cherished the moments when her students had those 'aha' moments, grasping complex concepts, and was elated to see their continued enthusiasm for coming to her classes. Being a first-generation software engineer herself, Tina is deeply committed to supporting the younger generations as they follow in her footsteps and strive to make a positive impact in their community.<br/>Tina’s journey in education began with a spark of passion during her middle school years when she volunteered at summer camps hosted by the University of California, Irvine. It was there that she first discovered the deep fulfillment of teaching—seeing students’ eyes light up as they understood new concepts and feeling the joy of giving back. This early experience laid the foundation for a lifelong commitment to empowering young minds. After high school, Tina devoted even more time to guiding elementary and middle school students into the fascinating world of STEM, especially focusing on software engineering and coding. She cherished those transformative “aha” moments when students grasped complex ideas and felt profound pride in witnessing their growing excitement and eagerness to learn. As a first-generation software engineer, Tina is fiercely dedicated to inspiring future generations, mentoring them as they strive to make meaningful impacts in their communities.<br/>Tina embodies determination, resilience, and unwavering integrity. She stands strong for justice, never hesitating to take a firm stance for what’s right. Her keen observational skills and empathetic nature make her an insightful and perceptive mentor. When the stakes are high, Tina approaches challenges with assertiveness and unwavering resolve. Dependable and loyal, she is the ally who will go above and beyond, delivering excellence that exceeds expectations. With Tina on your side, you can trust that every endeavor will be approached with passion, precision, and the highest level of dedication.<br/>Within IAC, Tina plays a pivotal role, working alongside Justin to oversee a wide array of responsibilities. From administrative management and curriculum design to website optimization and employee training, her impact is felt in every aspect of the organization. Tina is not just a supportive contributor; she is a proactive change agent, offering invaluable insights and expert advice that empower Justin and the entire team to make informed and strategic decisions.<br/>As a full-stack web developer, Tina’s dedication to web development shines through her meticulous work on the company website, which she built from the ground up and continues to enhance and maintain. Her unique skill set in both front-end and back-end development allows her to create a cohesive, seamless digital experience for IAC. With an eye for detail and design, she crafts user interfaces that are both visually appealing and highly functional, ensuring an intuitive and engaging experience for users. Tina’s ability to unify the front-end and back-end creates a synchronized digital platform that reflects her holistic approach and technical expertise.<br/>Tina’s extensive experience and thorough understanding of instructional expectations enable her to consistently meet and exceed the highest standards. Her dedication and knowledge make her an essential force within the IAC team, fostering excellence and driving the success of the organization. With her guidance and unwavering support, IAC continues to thrive, delivering quality and impact that resonate far beyond the classroom.",
          images: [
            "/images/Staff_Photos/Tina/image4.jpg",
            "/images/Staff_Photos/Tina/image9.jpg",
            "/images/Staff_Photos/Tina/image8.jpg",
            "/images/Staff_Photos/Tina/image3.jpg",
            "/images/Staff_Photos/Tina/image1.jpg",
            "/images/Staff_Photos/Tina/image2.jpg",
            "/images/Staff_Photos/Tina/image7.jpg",
            "/images/Staff_Photos/Tina/image6.jpg",
            "/images/Staff_Photos/Tina/image5.jpg",
          ],
        },
      },
      {
        name: "Mike Ash",
        role: "Director of Chess Operations",
        bio: "Leads chess operations with expertise and passion, inspiring growth and strategy.",
        image: "/images/Staff_Photos/Mike.jpg",
        icons: [PiSoccerBallFill, FaChess],
        moreInfo: {
          text: "Mike’s partnership with Justin, spanning over two decades, reflects an unshakeable bond built on trust, respect, and shared dedication. Through these years, Mike has been the cornerstone of their journey, embodying extraordinary loyalty, perseverance, and passion. His path from a devoted team member to an indispensable leader within the company is marked by tireless effort, steadfast determination, and an unwavering love for teaching chess. Mike’s role transcends his unmatched expertise as the most experienced and skilled instructor; he is the driving force behind our educational mission. Every class he leads radiates his joy for teaching, demonstrating that for Mike, teaching is not just a profession but a true calling. His passion to inspire and support his students’ growth shines through in every lesson, making him invaluable to our organization.<br/>Mike’s impact extends far beyond his profound understanding of chess. He teaches more than the strategies of the game; he instills resilience, strategic thinking, and sportsmanship, equipping students with life skills that resonate beyond the classroom. His instruction is enriched by deep empathy and an innate ability to connect with learners, fostering a supportive environment where they can thrive. This combination of compassion and expertise has made Mike an unparalleled mentor, not just to students but to new instructors who look to him for guidance. He leads by example, embodying the core values of our organization and ensuring that every instructor aligns with our high standards. Mike’s mentorship helps integrate new team members seamlessly, building their confidence and enhancing their teaching approach.<br/>In everything he does, Mike sets the standard for dedication. He doesn’t just fulfill expectations; he consistently surpasses them, establishing a benchmark of excellence that others strive to meet. His reliability is the foundation on which our programs are built, offering certainty and trust in every class he leads. Mike’s commitment and work ethic have earned him the reputation of being the most dependable instructor on our team, a testament to his unwavering integrity and relentless pursuit of quality.<br/>Mike’s influence is deeply felt throughout the company. His leadership extends beyond teaching, serving as a source of motivation and encouragement for all who have the privilege of working with him. He exemplifies what it means to be passionate, driven, and committed to one’s craft. His presence reassures both new and seasoned instructors, enabling them to deliver exceptional experiences to students with confidence, knowing they have an irreplaceable mentor to support them.<br/>Mike’s dedication, mentorship, and passion make him an extraordinary asset whose contributions are beyond measure. His influence will continue to shape the future of IAC, ensuring that the legacy of excellence, compassion, and inspiration he embodies lives on in every corner of our organization.<br/>",
          images: [
            "/images/Staff_Photos/Mike/image1.jpg",
            "/images/Staff_Photos/Mike/image2.jpg",
            "/images/Staff_Photos/Mike/image9.jpg",
            "/images/Staff_Photos/Mike/image3.jpg",
            "/images/Staff_Photos/Mike/image4.jpg",
            "/images/Staff_Photos/Mike/image6.jpg",
            "/images/Staff_Photos/Mike/image7.jpg",
            "/images/Staff_Photos/Mike/image8.jpg",
            "/images/Staff_Photos/Mike/image5.jpg",
          ],
        },
      },
      {
        name: "Tommy Owens",
        role: "Director of Basketball Operations",
        bio: "Leads basketball operations with dedication and a passion for excellence.",
        image: "/images/Staff_Photos/Tommy.jpg",
        icons: [FaBasketballBall, FaChess],
        moreInfo: {
          text: "Tommy’s journey with our organization is a story of unwavering dedication, boundless passion, and a steadfast commitment to mentorship. With years of service marked by excellence, Tommy stands as a pillar within our community. His extensive experience across various disciplines, including chess, volleyball, soccer, and basketball, showcases his versatility and deep-rooted commitment to education. Yet, it is basketball that truly captures his heart. His profound knowledge of the game—encompassing both technique and strategy—has solidified his reputation as the go-to expert and earned him the distinguished title of Director of Basketball Operations. In this leadership role, Tommy not only spearheads the basketball program but also shapes its vision and ensures its continued growth and success.<br/>One of Tommy’s most defining qualities is his dedication to mentorship. New instructors embarking on their teaching journey are met with the privilege of learning under Tommy’s expert guidance. He goes beyond imparting technical knowledge; he shares insights into effective classroom management, teaching styles, and the art of connecting with students. From meticulously designed drills to comprehensive gameplay techniques, Tommy’s mentorship equips instructors with the tools and confidence they need to excel. His approach is rooted in compassion, empathy, and a genuine desire to see others grow, both as educators and as individuals.<br/>Tommy’s influence stretches far beyond the basketball court. He embodies leadership marked by motivation, determination, and an unwavering drive to elevate everyone around him. His open-door policy fosters a welcoming and supportive environment where communication thrives and team members feel valued. This policy isn’t just a figure of speech—it reflects his commitment to being available, present, and a reliable source of guidance. Tommy’s approach cultivates trust and encourages collaboration, nurturing a strong sense of community and belonging among his colleagues.<br/>Drawing from his deep understanding of the company’s expectations and operational intricacies, Tommy acts as a guiding force for newcomers navigating their path within the organization. He shares his wealth of knowledge with unmatched dedication, helping others chart their own courses of growth and success. His mentorship is a testament to his belief in empowering others and fostering an atmosphere of continuous improvement. Tommy’s unwavering presence and support inspire confidence and encourage new instructors to rise to their full potential.<br/>The transformative impact of Tommy’s work is perhaps most evident in the youth programs he leads. Since joining our organization, the growth in his class sizes has been phenomenal, tripling under his stewardship. What sets him apart is his unique ability to forge connections with young players. His teaching transcends skill-building; he instills a genuine love for the game, igniting a passion that stays with them long after they leave his class. Students under Tommy’s instruction learn essential basketball skills—dribbling, passing, shooting, and effective teamwork—while absorbing lessons in discipline, resilience, and sportsmanship. They leave not just as better athletes but as more confident, well-rounded individuals with a deeper appreciation for the values the game embodies.<br/>Tommy’s dedication, compassion, and leadership make him a cherished mentor and an irreplaceable asset to our organization. His relentless pursuit of excellence, coupled with his empathetic and motivational nature, sets a standard that resonates throughout our programs. He is the heart of our basketball initiative and an inspiring force whose influence shapes not only the future of young athletes but also the professional growth of his peers. Tommy’s legacy is one of profound impact—one that will continue to elevate our programs and enrich the lives of everyone he mentors for years to come.",
          images: [
            "/images/Staff_Photos/Tommy/image1.jpg",
            "/images/Staff_Photos/Tommy/image2.jpg",
            "/images/Staff_Photos/Tommy/image3.jpg",
            "/images/Staff_Photos/Tommy/image4.jpg",
            "/images/Staff_Photos/Tommy/image5.jpg",
            "/images/Staff_Photos/Tommy/image6.jpg",
            "/images/Staff_Photos/Tommy/image7.jpg",
            "/images/Staff_Photos/Tommy/image8.jpg",
            "/images/Staff_Photos/Tommy/image9.jpg",
          ],
        },
      },
      {
        name: "Layla Kurokawa",
        role: "Director of Performing Arts Operations",
        bio: "Manages performing arts operations with dedication and vision.",
        image: "/images/Staff_Photos/Layla.jpg",
        icons: [FaTheaterMasks],
        moreInfo: {
          text: "Layla’s role as the Director of Performing Arts Operations at IAC is much more than a job title—it is a testament to her profound impact on the organization. This esteemed position reflects her pivotal contributions that have broadened the scope of IAC, ushering it into the dynamic world of performing arts and drama. Through her visionary leadership, Layla has created new pathways for students to explore their artistic abilities and express themselves creatively. Her influence has opened doors to a realm where students can engage with their passions, fostering a love for the arts that extends beyond the classroom.<br/>One of Layla’s most notable achievements lies in her dedication to mentoring and training new instructors, particularly those specializing in performing arts education. Layla embodies more than just an instructor; she is a mentor who meticulously imparts the values, standards, and high expectations that are the hallmark of IAC’s commitment to educational excellence. Under her expert guidance, new hires receive thorough training that equips them not just to meet but to exceed the company’s standards. Layla’s tireless dedication to nurturing new talent underscores her passion for cultivating future educators and performers who carry forward the principles of creativity and excellence.<br/>Layla’s influence reaches far beyond her own classes, touching every aspect of IAC’s performing arts programs. Her dedication to continuously refining and enhancing these programs ensures that students receive the highest quality education and opportunities. Her passion radiates throughout the institution, enriching students' experiences and nurturing a vibrant, artistic community.Known for her compassionate and inclusive approach, Layla is committed to ensuring that every student feels valued and seen.Her dedication to inclusivity knows no limits—she makes it her mission to accommodate the diverse needs of students, whether they are naturally extroverted or prefer to express themselves more quietly.<br/> In Layla’s classes, education is never a one- size - fits - all approach.She celebrates diversity and emphasizes the unique qualities and strengths of each student.Layla’s belief in the potential of every individual fuels her efforts to create a space where these unique traits can shine.Her dedication comes to life most vividly during the end- of - session showcase.This event is more than a performance; it is a heartfelt celebration of each student’s journey under Layla’s nurturing and attentive guidance.The showcase is designed to spotlight not just a few standout performers but to celebrate every student, acknowledging their growth, talents, and individuality.<br/> In Layla’s classroom, artistic growth is intertwined with the development of confidence and self- esteem.Her philosophy, rooted in the recognition and celebration of individuality, distinguishes her as an extraordinary and compassionate educator.Layla’s students leave her classes not only with enhanced artistic skills but with a newfound sense of self - worth and belief in their abilities.Her approach leaves an indelible mark on the hearts and minds of her students, making her a true beacon of inspiration and an invaluable leader within IAC.",
          images: [
            "/images/Staff_Photos/Layla/image1.jpg",
            "/images/Staff_Photos/Layla/image2.jpg",
            "/images/Staff_Photos/Layla/image5.jpg",
            "/images/Staff_Photos/Layla/image3.jpg",
            "/images/Staff_Photos/Layla/image6.jpg",
            "/images/Staff_Photos/Layla/image7.jpg",
            "/images/Staff_Photos/Layla/image4.jpg",
            "/images/Staff_Photos/Layla/image8.jpg",
            "/images/Staff_Photos/Layla/image9.jpg",
          ],
        },
      },
      {
        name: "Cory Camama",
        role: "Director of Volleyball Operations",
        bio: "Oversees volleyball operations with extensive experience and expertise.",
        image: "/images/Staff_Photos/Cory.jpg",
        icons: [FaVolleyballBall],
        moreInfo: {
          text: "Cory has quickly established himself as a vital member of our organization, bringing his passion and expertise in volleyball to the forefront of our sports programs. His deep understanding of the game, from the fundamentals to advanced strategies, has made him an indispensable coach and mentor to both his students and fellow instructors. Cory’s dedication to the sport is evident in every aspect of his work, and his impact on our volleyball program has been nothing short of transformative. Cory's classes have seen remarkable growth under his leadership, with more students than ever eager to learn from him. His ability to connect with young athletes, instilling in them not only the technical skills of volleyball but also a genuine love for the game, sets him apart as a coach. Students in Cory’s classes leave with sharpened skills in serving, passing, setting, and spiking, but more importantly, they develop a strong sense of teamwork, discipline, and sportsmanship. Cory’s approach to coaching goes beyond skill development—he teaches life lessons that extend far beyond the volleyball court, fostering a deep appreciation for the game and the values it represents.<br/>One of Cory’s standout qualities is his commitment to mentorship. He takes an active role in guiding new instructors, sharing his knowledge and experience to help them excel in their roles. Cory’s mentorship goes beyond teaching techniques; he offers invaluable insights into classroom management and effective coaching styles, ensuring that our new hires are well-prepared to deliver high-quality instruction. His open-door policy and willingness to support his colleagues at any time create a welcoming and collaborative atmosphere within the organization. Cory’s accessibility and generosity have fostered a sense of community and belonging among the team, making him a trusted mentor and leader. Cory's passion for volleyball and his dedication to his students have had a profound impact on our sports program. His contributions are a testament to his commitment to excellence, both in coaching and in mentoring the next generation of instructors. Cory's influence extends far beyond the volleyball court, shaping the lives of his students and colleagues alike. He is not just a coach; he is a mentor, a leader, and an invaluable asset to our organization, whose contributions have significantly enhanced the quality of our sports programs.",
          images: [],
        },
      },
      {
        name: "Jason Michael",
        role: "Technical Advisor",
        bio: "Provides expert technical guidance and innovative solutions.",
        image: "/images/Staff_Photos/JasonM.jpg",
        icons: [FaLaptopCode],
        moreInfo: {
          text: "As Justin embarked on his visionary mission to create an impactful educational landscape for the younger generation, Jason Michael emerged as the driving force behind its success. Jason’s unwavering dedication, boundless generosity, and profound technical expertise turned this ambitious dream into a vibrant reality. From the very beginning, Jason poured not just his skills but his whole heart into the project, ensuring that every element was executed with precision, care, and excellence.<br/>Jason’s contributions have always gone far beyond the typical realm of technical support. His role was crucial in optimizing and streamlining various components of the educational programs Justin envisioned. From designing seamless student enrollment processes to developing promotional strategies that expanded the reach of their initiatives, Jason’s commitment to excellence was resolute. He understood that true success lay in the smallest details, and he dedicated himself fully to making sure every aspect ran smoothly and flawlessly.<br/>What truly sets Jason apart is his remarkable generosity and genuine passion for helping others. He is the person who goes above and beyond to support his colleagues, consistently giving more of himself than anyone could expect. Whether staying late to solve a technical challenge or mentoring a new team member with patience and enthusiasm, Jason’s selfless spirit shines through in everything he does. His unwavering support and kindness have made him an invaluable part of the company and a cherished colleague to everyone he encounters.<br/>To Justin, Jason has been much more than a collaborator. He has been a mentor, confidant, and true partner, providing the wisdom, insight, and steadfast support needed to turn their shared vision into reality. Jason’s dedication to the company and commitment to Justin’s dream have been fundamental in making their goals come alive. His influence resonates throughout the organization, embedding values of integrity, excellence, and community in every endeavor.<br/>The partnership between Jason and Justin exemplifies how the fusion of diverse skills, creative thinking, and a shared vision can lead to transformative results. Their collaboration is more than a professional alliance; it is a testament to what can be achieved when individuals unite with purpose and passion. Together, they have built an educational platform that extends beyond teaching—it empowers students, equipping them with essential tools and knowledge to succeed in an ever-changing world.<br/>Jason’s work has laid the foundation for a future where digital literacy and innovation are central to education. His dedication has created an ecosystem that prepares students to navigate and excel in a complex, dynamic environment. Through his unmatched commitment, generosity, and passion, Jason has left an enduring legacy that touches the company, Justin, and countless lives that have been influenced by their shared vision. He is, in every sense, irreplaceable—a cornerstone of the company’s success and a beacon of what it means to be dedicated, passionate, and selfless in the pursuit of greater good.<br/>Jason embodies the true essence of what it means to be a mentor, a leader, and a friend. His legacy of unwavering dedication, generosity, and pursuit of excellence will continue to inspire and guide the company for years to come, setting the standard for what it means to lead with heart and determination.",
          images: [
            "/images/Staff_Photos/Jason_M/image-4.jpg",
            "/images/Staff_Photos/Jason_M/image-1.jpg",
            "/images/Staff_Photos/Jason_M/image-6.jpg",
            "/images/Staff_Photos/Jason_M/image-3.jpg",
            "/images/Staff_Photos/Jason_M/image-5.jpg",
          ],
        },
      },
      {
        name: "Kimberly Nguyen",
        role: "Director of Honors and Presentations",
        bio: "Drives employee recognition through impactful presentations.",
        image: "/images/Staff_Photos/Kim.jpg",
        icons: [FaBasketballBall, PiSoccerBallFill, FaVolleyballBall, FaChess],
        moreInfo: {
          text: "Kim’s role as the Director of Honors and Presentations at IAC is the embodiment of dedication, compassion, and vision. Her work has cultivated a culture where recognition is woven into the fabric of the institution, ensuring that every instructor and student feels seen, valued, and celebrated. With each initiative she leads, Kim brings warmth and sincerity, enhancing the sense of belonging and pride within the IAC community.<br/>What sets Kim apart is her exceptional ability to tailor recognition to each individual. She knows that every instructor and student has their own unique journey, and she takes great care to acknowledge their accomplishments in ways that resonate deeply. From organizing surprise events to honor educators to crafting customized tokens that mark students’ milestones, Kim’s attention to detail and empathy shine through. She believes wholeheartedly that recognizing someone’s efforts can inspire confidence, foster motivation, and remind them of their worth—and she dedicates herself to making this belief a reality.<br/>One of the most impactful parts of Kim’s work is her creation of personalized awards and keepsakes for students. These items are more than just physical tokens; they represent achievement, growth, and pride. Kim understands the power that such thoughtful gestures can have—how a well-crafted certificate or a custom memento can encourage students to push further and celebrate their progress. These tokens carry a message: that their journey matters, and their efforts are noticed.<br/>Kim’s dedication extends far beyond the creation of awards; it is evident in the meaningful events she organizes to highlight student success. Under her leadership, these gatherings are more than ceremonies; they are immersive, heartfelt celebrations that honor both individual stories and collective achievements. Each presentation reflects her commitment to making sure every student’s contributions are acknowledged with genuine respect. These events become cherished memories that students and families carry long after their time at IAC.<br/>Beyond her professional expertise, Kim is known for her compassion and inclusivity. She has built an environment where recognition is not just an occasional gesture but a daily practice that elevates morale and strengthens community bonds. Her efforts to acknowledge the dedication and excellence of instructors inspire them to continue giving their best, creating a ripple effect that enhances the entire educational experience. Kim’s open and caring approach ensures that IAC remains a place where everyone feels encouraged to excel.<br/>Her influence permeates every interaction, from large-scale events to the smallest gestures. Kim’s philosophy of recognition goes beyond celebrating achievements—it’s about affirming each person’s value and honoring the unique path they’ve taken. Through her tireless dedication, Kim has become a cornerstone of the IAC community, fostering a legacy of appreciation that will last for years to come.Kim has redefined what it means to celebrate excellence at IAC. Her work, whether through grand ceremonies or thoughtful personal touches, has left an enduring impact on students, instructors, and the entire organization. Her leadership, compassion, and unwavering commitment make her an invaluable part of the institution and a true inspiration to all who have the privilege of knowing her.",
          images: [
            "/images/Staff_Photos/Kim/IMG_5667.png",
            "/images/Staff_Photos/Kim/IMG_5665.png",
            "/images/Staff_Photos/Kim/IMG_5669.png",
            "/images/Staff_Photos/Kim/IMG_5670.png",
            "/images/Staff_Photos/Kim/IMG_5671.png",
          ],
        },
      },
    ],
  },
  {
    category: "Lead Instructors",
    members: [
      {
        name: "Brian Kile",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Brian.jpg",
        icons: [FaBasketballBall, PiSoccerBallFill, FaFootballBall],
      },
      {
        name: "Bailey Johnson",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Bailey.jpg",
        icons: [FaBasketballBall],
      },
      {
        name: "David Fuchs",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/David.jpg",
        icons: [FaChess, FaPencil],
      },
      {
        name: "Dominick Pallatto",
        role: "Theater Instructor",
        image: "/images/Staff_Photos/Dominick.jpg",
        icons: [FaChess, FaTheaterMasks],
      },
      {
        name: "Krystal Alexander",
        role: "Theater Instructor",
        image: "/images/Staff_Photos/Krystal.jpg",
        icons: [FaChess, FaPencil, FaTheaterMasks],
      },
      {
        name: "Gabriel Hernandez",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Gabe.jpg",
        icons: [FaChess, FaPencil, FaTheaterMasks],
      },
      {
        name: "Gino DeFalco",
        role: "Soccer Instructor",
        image: "/images/Staff_Photos/Gino.jpg",
        icons: [PiSoccerBallFill, FaVolleyballBall],
      },
      {
        name: "Jackie Rodriguez",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Jackie.jpg",
        icons: [FaBasketballBall, FaVolleyballBall],
      },
      {
        name: "James O'Leary",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/James_O.jpg",
        icons: [FaChess, FaPencil],
      },
      {
        name: "Jenny Dong",
        role: "Volleyball Instructor",
        image: "/images/Staff_Photos/Jenny.jpg",
        icons: [FaVolleyballBall],
      },
      {
        name: "Johnathan",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Johnathan.jpg",
        icons: [FaChess],
      },
      {
        name: "Tori Balnchard",
        role: "Volleyball Instructor",
        image: "/images/Staff_Photos/staff_photo_default.png",
        icons: [FaVolleyballBall, FaChess, FaPencil, FaTheaterMasks],
      },
      {
        name: "Nnamdi Agude",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Nnamdi.jpg",
        icons: [FaBasketballBall, FaChess, FaPencil, FaFootballBall],
      },
    ],
  },
  {
    category: "Assistant Instructors",
    members: [
      {
        name: "Alex Garber",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Alex.jpg",
        icons: [FaChess],
      },
      {
        name: "Andy Prendiville",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Andy.jpg",
        icons: [FaChess],
      },
      {
        name: "Bobby Xiao",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/staff_photo_default.png",
        icons: [FaChess],
      },
      {
        name: "Bodhi Armstrong",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/staff_photo_default.png",
        icons: [FaBasketballBall],
      },
      {
        name: "James Manley",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/JasonM.jpg",
        icons: [FaBasketballBall],
      },
      {
        name: "Keshawn Carter",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Keshawn.jpg",
        icons: [FaBasketballBall, PiSoccerBallFill, FaChess, FaVolleyballBall],
      },
      {
        name: "Lawrence Brown",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/staff_photo_default.png",
        icons: [FaBasketballBall],
      },
      {
        name: "Novaleigh Bui",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Novaleigh_Bui.jpg",
        icons: [FaChess],
      },
      {
        name: "Max Evans",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Max_Evans.jpg",
        icons: [FaBasketballBall, FaPencil],
      },
      {
        name: "Michael Le",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Michael_Le.jpg",
        icons: [FaBasketballBall],
      },
      {
        name: "Zayaan Khan",
        role: "Chess Instructor",
        image: "/images/Staff_Photos/Zayaan.jpg",
        icons: [FaChess],
      },
      {
        name: "Bob Barone",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/staff_photo_default.png",
        icons: [FaBasketballBall],
      },
      {
        name: "Juan Carlos Mendoza",
        role: "Basketball Instructor",
        image: "/images/Staff_Photos/Juan.jpg",
        icons: [FaBasketballBall],
      },
      {
        name: "Jack Clark",
        role: "Public Speaking Instructor",
        image: "/images/Staff_Photos/Jack_Clark.jpg",
        icons: [GiMicrophone, FaPencil, FaChess, FaTheaterMasks],
      },
    ],
  },
  {
    category: "Oversight",
    members: [
      {
        name: "Aldyn Richmond",
        role: "Administration Assistant",
        image: "/images/Staff_Photos/staff_photo_default.png",
        icons: [FaPencil, FaTheaterMasks],
      },
      {
        name: "Jessalyn Nguyen",
        role: "Administration Assistant",
        image: "/images/Staff_Photos/Jessalyn.jpg",
        icons: [FaBasketballBall, PiSoccerBallFill, FaVolleyballBall],
      },
      {
        name: "Middka Vicencio",
        role: "Administration Assistant",
        image: "/images/Staff_Photos/Middka.jpg",
        icons: [FaVolleyballBall],
      },
    ],
  },
];

export const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export const logos = [
  {
    alt: "Transistor",
    src: "/images/School_Icons/arroyo.jpg",
  },
  {
    alt: "Reform",
    src: "/images/School_Icons/fairmont.jpg",
  },
  {
    alt: "Tuple",
    src: "/images/School_Icons/hicks.jpg",
  },
  {
    alt: "SavvyCal",
    src: "/images/School_Icons/ladera.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/myford.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/orchardhills.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/peterscanyon.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/redhill.jpg",
  },
  {
    alt: "Statamic",
    src: "/images/School_Icons/tustinranch.jpg",
  },
];

export const features = [
  {
    icon: <FaMedal className="w-8 h-8" />,
    bgClass: "bg-chart-1",
    text: "Trusted by leading schools and parents",
  },
  {
    icon: <FaGraduationCap className="w-8 h-8" />,
    bgClass: "bg-chart-2",
    text: "Experienced & Dedicated Professional Instructors",
  },
  {
    icon: <FaChartPie className="w-8 h-8" />,
    bgClass: "bg-chart-3",
    text: "Well diversed classes in various disciplines",
  },
  {
    icon: <FaBrain className="w-8 h-8" />,
    bgClass: "bg-chart-3",
    text: "Inspires growth and collaboration",
  },
];

export const actions = [
  {
    id: "theme-toggle",
    tooltip: "Toggle Theme",
    icon: <ModeButton className="p-2" />,
  },
];

export const testimonials: testimonialsInfo[] = [
  {
    name: "Anonymous",
    title: "Chess Parent",
    school: "Hicks Canyon Elementary School",
    class: "Chess",
    image: "/images/School_Icons/hicks.jpg",
    text: "...my sons attend Hicks Canyon Elementary and have been in several after-school programs provided by IAC. They always have a great time, and [instructors] always go the extra mile to help my son, Taylor, so he can get the most out of the program. Also, when I was having a financially difficult time last year, [Justin] gave us a big discount, telling me that it was their passion to help out the community. I'm happy to say that I no longer need the financial assistance for the program, but it was so meaningful to feel that someone in the community cared about my kids' well-being and opportunities to experience wholesome activities.",
  },
  {
    name: "Anonymous",
    title: "Chess Parent",
    school: "Peters Canyon Elementary School",
    class: "Chess",
    image: "/images/School_Icons/peterscanyon.jpg",
    text: "Due to one of my children's severe food allergies, we have been denied by multiple camps and classes who did not want the risk of having them as a student. However, Justin was very responsive and collaborated with me on ways to adapt the class to be a safe space. Both of my kids love learning about chess and practicing among their peers. I'm excited they are able to learn a game that teaches critical thinking and persistence.",
  },
  {
    name: "Anonymous",
    title: "Chess Parent",
    school: "Peters Canyon Elementary School",
    class: "Chess",
    image: "/images/School_Icons/peterscanyon.jpg",
    text: "I am at a loss for words; upon reading [Justin's] email, I couldn't help but feel an overwhelming sense of relief. The appreciation of the scholarship is truly a blessing to me, and the many years of [my son's] participation have made such an impact on his life! People like [Justin] really do make such an impact.",
  },
  {
    name: "Anonymous",
    title: "Theater Parent",
    school: "Arroyo Elementary School",
    class: "Theater",
    image: "/images/School_Icons/arroyo.jpg",
    text: "Watching my once-shy daughter perform confidently on stage was a dream come true. The theater staff at IAC excel at nurturing talent and fostering self-esteem. Her enthusiasm for school has grown significantly, and she comes home eager to share her experiences.",
  },
  {
    name: "Anonymous",
    title: "Soccer Parent",
    school: "Hicks Elementary School",
    class: "Soccer",
    image: "/images/School_Icons/hicks.jpg",
    text: "The soccer program is outstanding! The coaches are highly skilled and serve as excellent role models. The staff ensure that every child feels included and valued, which has greatly boosted my son's confidence. I am deeply grateful to IAC for the peace of mind they provide.",
  },
  {
    name: "Anonymous",
    title: "Creative Writing Parent",
    school: "Historic Anaheim Elementary School",
    class: "Creative Writing",
    image: "/images/School_Icons/fairmont.jpg",
    text: "The creative writing program at IAC has been transformative for my daughter. The workshops have elevated her skills to new heights. As a working parent, finding quality after-school care was challenging until we discovered IAC. The diverse range of activities keeps my son engaged, and I greatly value the balance between education and fun that the program offers.",
  },
  {
    name: "Anonymous",
    title: "School Staff",
    school: "Peters Canyon Elementary School",
    class: "Chess",
    image: "/images/School_Icons/peterscanyon.jpg",
    text: "IAC's chess program has greatly enhanced student concentration and problem-solving abilities. The staff are patient and create a supportive environment that allows students to thrive, regardless of their skill level. The program reinforces the lessons we teach.",
  },
  {
    name: "Anonymous",
    title: "School Staff",
    school: "North Tustin Elementary School",
    class: "Chess",
    image: "/images/School_Icons/fairmont.jpg",
    text: "The chess club facilitated by IAC has become a highlight for many students. The program has significantly improved students' critical thinking skills and had a positive effect on their behavior and social skills.",
  },
  {
    name: "Anonymous",
    title: "Parent",
    school: "Hicks Elementary School",
    class: "Basketball",
    image: "/images/School_Icons/hicks.jpg",
    text: "I can’t speak highly enough of the basketball program at IAC. My daughter eagerly looks forward to every practice, excited to develop her abilities and engage with her teammates. The program strikes a perfect balance between skill development, teamwork, and fun.",
  },
];
