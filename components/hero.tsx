"use client"; // Ensure this component is treated as a client component

import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriterEffect';
import { SparklesCore } from './ui/sparkles';
import { motion } from "framer-motion";

const words = [
    {
        text: "Chamath",
        className: "text-3xl md:text-7xl",
    },
    {
        text: "Ishanka",
        className: "text-3xl md:text-7xl text-cyan-500 dark:text-cyan-500",
    },
];

const Hero = () => {
    return (
        <div>
            <section>
                <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <div className="w-full absolute inset-0 h-screen">
                        <SparklesCore
                            id="tsparticlesfullpage"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={100}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                    <div className="relative z-20 flex flex-col items-center justify-center h-[40rem]">
                        <motion.div
                            className="flex flex-col items-center justify-center mt-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 6, ease: "easeInOut" }}
                        >
                            <TypewriterEffectSmooth words={words} />
                            <p className="text-gray-600 dark:text-gray-400 text-1xl md:text-2xl">
                                I&apos;m a
                                <span className="text-1xl md:text-3xl text-white dark:text-white text-b"> Web Developer </span>
                                from Sri Lanka.
                            </p>
                        </motion.div>
                        <div className="w-[40rem] h-20 relative mt-4">
                            {/* Gradients */}
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            {/* Core component */}
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={250}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                            {/* Radial Gradient to prevent sharp edges */}
                            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;