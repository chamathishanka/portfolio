import { HoverEffect } from "./ui/cardHoverEffect";
import { TypewriterEffectSmooth } from "./ui/typewriterEffect";

export function Skills() {
    return (
        <div className="flex flex-col items-center">
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
        icon: "/react.png"
    },
    {
        title: "NextJS",
        description: "",
        link: "#my-work",
        icon: "/nextjs.png"
    },
    {
        title: "NestJS",
        description: "",
        link: "#my-work",
        icon: "/nestjs.png"
    },
    {
        title: "NodeJS",
        description: "",
        link: "#my-work",
        icon: "/nodejs.png"
    },
    {
        title: "TailwindCSS",
        description: "",
        link: "#my-work",
        icon: "/tailwindcss.png"
    },
    {
        title: "Html",
        description: "",
        link: "#my-work",
        icon: "/html.png"
    },
    {
        title: "CSS",
        description: "",
        link: "#my-work",
        icon: "/css.png"
    },
    {
        title: "MySQL",
        description: "",
        link: "#my-work",
        icon: "/mysql.png"
    },
    {
        title: "Python",
        description: "",
        link: "#my-work",
        icon: "/python.png"
    },
    {
        title: "Java",
        description: "",
        link: "#my-work",
        icon: "/java.png"
    },
    {
        title: "Docker",
        description: "",
        link: "#my-work",
        icon: "/docker.png"
    },
    {
        title: "GIT",
        description: "",
        link: "#my-work",
        icon: "/git.png"
    },
    {
        title: "Figma",
        description: "",
        link: "#my-work",
        icon: "/figma.png"
    },
    {
        title: "GitHub",
        description: "",
        link: "#my-work",
        icon: "/github.png"
    },
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