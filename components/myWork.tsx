"use client";

import React, { useEffect, useState } from 'react';
import { PinContainer } from './ui/3dPin';
import Image from 'next/image';
import { TypewriterEffectSmooth } from './ui/typewriterEffect';

const words = [

    {
        text: "My ",
        className: "text-3xl md:text-6xl",
    },
    {
        text: " Projects",
        className: "text-3xl md:text-6xl text-cyan-500 dark:text-cyan-500",
    },
];

function MyWork() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server
    }

    return (
        <div className="h-auto w-full flex flex-col items-center justify-center gap-4">
            <div className="flex-col">
                <TypewriterEffectSmooth words={words} />
            </div>

            <div className="h-auto w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4  relative">
                            <Image
                                src="/medichive.gif" // Path to the GIF in the public directory
                                alt="Medichive GIF"
                                fill // Fill the parent container
                                style={{ objectFit: 'cover' }} // Cover the entire area
                                className="rounded-lg"
                                unoptimized

                            />
                        </div>
                    </div>
                </PinContainer>

                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4  relative">
                            <Image
                                src="/uniconn.gif" // Path to the GIF in the public directory
                                alt="Uniconn GIF"
                                fill // Fill the parent container
                                style={{ objectFit: 'cover' }} // Cover the entire area
                                className="rounded-lg"
                                unoptimized
                            />
                        </div>
                    </div>
                </PinContainer>

                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4  relative">
                            <Image
                                src="/hardware.gif" // Path to the GIF in the public directory
                                alt="Hardware GIF"
                                fill // Fill the parent container
                                style={{ objectFit: 'cover' }} // Cover the entire area
                                className="rounded-lg"
                                unoptimized

                            />
                        </div>
                    </div>
                </PinContainer>
            </div>
        </div>
    );
}

export default MyWork;