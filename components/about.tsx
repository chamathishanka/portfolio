"use client";
import React from "react";
import { StickyScroll } from "./ui/stickyScrollReveal";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriterEffect";
import { BackgroundGradientAnimation } from "./ui/backgroundGradientAnimation";

const words = [
    {
        text: "About",
        className: "text-3xl md:text-6xl",
    },
    {
        text: "Me",
        className: "text-3xl md:text-6xl text-blue-600 dark:text-blue-600",
    },
];

const content = [
    // {
    //     title: "Real time changes",
    //     description:
    //         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    //     content: (
    //         <div className="h-full w-full  flex items-center justify-center text-white">
    //             <Image
    //                 src="/weeknd.jpg"
    //                 width={300}
    //                 height={300}
    //                 className="h-full w-full object-cover"
    //                 alt="linear board demo"
    //             />
    //         </div>
    //     ),
    // },
    {
        title: "About Me",
        description: "Hi there! I’m Chamath Ishanka, an enthusiastic IT student with a passion for web development and exploring the creative side of the IT industry. Currently pursuing my BSc in Information Technology at the University of Moratuwa, I am dedicated to building innovative solutions that make technology more accessible and engaging.",
        content: (
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/uom.jpg?alt=media"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
            />
        ),
    },
    {
        title: "My Goals",
        description: "My goal is to grow as a Software Engineer and make a positive impact in the tech world. I’m particularly interested in blending technical expertise with creativity, developing solutions that are not only functional but also inspiring and user-friendly.",
        content: (
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/software.jpg?alt=media"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
            />
        ),
    },
    {
        title: "A Little More About Me",
        description: "When I’m not coding, you can find me producing music, traveling to new places, reading, or enjoying creative pursuits—whether it's making art, watching films, or exploring new forms of expression. I love exploring new technologies and constantly pushing myself to learn and create more.",
        content: (
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-757c2.appspot.com/o/prod.jpg?alt=media"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
            />
        ),
    },

];
export function About() {
    return (
        <BackgroundGradientAnimation>
            <div className="py-10 px-10 md:px-40">
                <div className="flex justify-center items-center mt-0">
                    <TypewriterEffectSmooth words={words} />
                </div>
                <StickyScroll content={content} />
            </div>
        </BackgroundGradientAnimation>
    );
}
