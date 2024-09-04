import { HoverEffect } from "./ui/cardHoverEffect";

export function Skills() {
    return (
        <div className="max-w-4xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "ReactJS",
        description:
            "",
        link: "https://stripe.com",
    },
    {
        title: "NextJS",
        description:
            "",
        link: "https://netflix.com",
    },
    {
        title: "NestJS",
        description:
            "",
        link: "https://google.com",
    },
    {
        title: "NodeJS",
        description:
            "",
        link: "https://stripe.com",
    },
    {
        title: "TailwindCSS",
        description:
            "",
        link: "https://google.com",
    },
    {
        title: "HTML",
        description:
            "",
        link: "https://netflix.com",
    },
    {
        title: "CSS",
        description:
            "",
        link: "https://google.com",
    },
    {
        title: "MySQL",
        description:
            "",
        link: "https://google.com",
    },
    {
        title: "Docker",
        description:
            "",
        link: "https://stripe.com",
    },
    {
        title: "Figma",
        description:
            "",
        link: "https://netflix.com",
    },

];
