"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "rgba(15, 23, 42, 0.5)", // var(--slate-900) with 50% opacity
        "rgba(0, 0, 0, 0.5)", // var(--black) with 50% opacity
        "rgba(38, 38, 38, 0.5)", // var(--neutral-900) with 50% opacity
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.8))", // var(--cyan-500) and var(--emerald-500) with 80% opacity
        "linear-gradient(to bottom right, rgba(236, 72, 153, 0.8), rgba(79, 70, 229, 0.8))", // var(--pink-500) and var(--indigo-500) with 80% opacity
        "linear-gradient(to bottom right, rgba(249, 115, 22, 0.8), rgba(234, 179, 8, 0.8))", // var(--orange-500) and var(--yellow-500) with 80% opacity
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current) {
                ref.current.scrollBy({
                    top: 2, // Increase the scroll speed
                    behavior: "smooth",
                });
            }
        }, 25); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-[40px] p-10 scrollbar-hide"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};