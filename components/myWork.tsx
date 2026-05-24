"use client";

import React, { useEffect, useState } from 'react';
import { PinContainer } from './ui/3dPin';
import Image from 'next/image';
import { TypewriterEffectSmooth } from './ui/typewriterEffect';
import { BackgroundGradientAnimation } from './ui/backgroundGradientAnimation';

const words = [
    {
        text: "My",
        className: "text-3xl md:text-6xl",
    },
    {
        text: "Projects",
        className: "text-3xl md:text-6xl text-blue-600 dark:text-blue-600",
    },
];

function MyWork() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <BackgroundGradientAnimation>
            <div className="h-auto w-full flex flex-col items-center justify-center gap-4 p-4 pb-16">
                <div className="flex-col mb-4">
                    <TypewriterEffectSmooth words={words} />
                </div>

                <div className="w-full flex flex-col items-center gap-36 md:flex-row md:flex-wrap md:justify-center md:items-start md:gap-10 px-4 py-6">
                    <PinContainer
                        title="/youtu.be/GuR3GZIov5c"
                        href="https://youtu.be/GuR3GZIov5c"
                    >
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[17rem] sm:w-[22rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                MEDICHIVE
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    Designed and developed the frontend and backend
                                    of the doctors&apos; portal.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 relative">
                                <Image
                                    src="/medichive.gif"
                                    alt="Medichive GIF"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </PinContainer>

                    <PinContainer
                        title="ongoing project"
                        href=""
                    >
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[17rem] sm:w-[22rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                UNICONN
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    I am currently working as a full-stack developer on this project.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 relative">
                                <Image
                                    src="/uniconn.gif"
                                    alt="Uniconn GIF"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </PinContainer>

                    <PinContainer
                        title="/linkedin.com/posts/chamathishanka"
                        href="https://www.linkedin.com/posts/chamathishanka_innovation-teamwork-exmo2023-activity-7239995737478959104-RqMC?utm_source=share&utm_medium=member_desktop"
                    >
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[17rem] sm:w-[22rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                AUTOMATED BEVERAGE MIXER
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    Developed IoT functionalities and created 3D
                                    animations and models for 3D printing.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 relative">
                                <Image
                                    src="/hardware.gif"
                                    alt="Hardware GIF"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}

export default MyWork;
