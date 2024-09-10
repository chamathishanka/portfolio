import React from "react";
import { BackgroundGradientAnimation } from "./ui/backgroundGradientAnimation";
import { TypewriterEffectSmooth } from "./ui/typewriterEffect";

const words = [
    {
        text: "About",
        className: "text-3xl md:text-7xl",
    },
    {
        text: "Me",
        className: "text-3xl md:text-7xl",
    },
];

export function AboutMe() {
    return (
        <BackgroundGradientAnimation className="h-screen relative">
            {/* <div className="absolute left-0 top-0 h-full flex items-center animate-slide-in z-60">
                <div className="bg-white text-black p-8 rounded-r-lg shadow-lg backdrop-filter backdrop-blur-lg">
                    <p className="text-3xl md:text-4xl lg:text-7xl font-bold z-60">About Me</p>
                </div>
            </div> */}
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <TypewriterEffectSmooth words={words} />
            </div>

        </BackgroundGradientAnimation>
    );
}