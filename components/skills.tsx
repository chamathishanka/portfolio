import { HoverEffect } from "./ui/cardHoverEffect";
import { TypewriterEffectSmooth } from "./ui/typewriterEffect";

export function Skills() {
    return (
        <div className="flex flex-col items-center px-4 pb-20">
            <div className="flex-col text-xl">
                <TypewriterEffectSmooth words={words} />
            </div>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "ReactJS",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/react.png?alt=media"
    },
    {
        title: "NextJS",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/nextjs.png?alt=media"
    },
    {
        title: "NestJS",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/nestjs.png?alt=media"
    },
    {
        title: "NodeJS",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/nodejs.png?alt=media"
    },
    {
        title: "TailwindCSS",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/tailwindcss.png?alt=media"
    },
    {
        title: "Html",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/html.png?alt=media"
    },
    {
        title: "CSS",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/css.png?alt=media"
    },
    {
        title: "MySQL",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/mysql.png?alt=media"
    },
    {
        title: "Python",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/python.png?alt=media"
    },
    {
        title: "Java",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/java.png?alt=media"
    },
    {
        title: "Docker",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/docker.png?alt=media"
    },
    {
        title: "GIT",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/git.png?alt=media"
    },
    {
        title: "Figma",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/figma.png?alt=media"
    },
    {
        title: "GitHub",
        description: "",
        link: "#my-work",
        icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/github.png?alt=media"
    }
];

const words = [

    {
        text: "Stacks &",
        className: "text-3xl md:text-6xl",
    },
    {
        text: "Tools",
        className: "text-3xl md:text-6xl text-blue-600 dark:text-blue-600",
    },
];