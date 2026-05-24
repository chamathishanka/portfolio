"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [activeCard, setActiveCard] = useState(0);
    const [paused, setPaused] = useState(false);
    const resumeTimer = useRef<ReturnType<typeof setTimeout>>();
    const cardLength = content.length;

    const linearGradients = [
        "linear-gradient(to bottom right, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.8))",
        "linear-gradient(to bottom right, rgba(236, 72, 153, 0.8), rgba(79, 70, 229, 0.8))",
        "linear-gradient(to bottom right, rgba(249, 115, 22, 0.8), rgba(234, 179, 8, 0.8))",
    ];

    const backgroundColors = [
        "rgba(15, 23, 42, 0.5)",
        "rgba(0, 0, 0, 0.5)",
        "rgba(38, 38, 38, 0.5)",
    ];

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setActiveCard((p) => (p + 1) % cardLength);
        }, 4000);
        return () => clearInterval(id);
    }, [paused, cardLength]);

    const goTo = (i: number) => {
        setPaused(true);
        setActiveCard(i);
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setPaused(false), 5000);
    };

    return (
        <motion.div
            animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
            className="rounded-3xl px-8 py-8 md:px-12 md:py-10"
            onMouseEnter={() => { clearTimeout(resumeTimer.current); setPaused(true); }}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="flex flex-row items-center gap-8 md:gap-12 min-h-[14rem]">
                {/* Text */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCard}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">
                                {content[activeCard].title}
                            </h2>
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                {content[activeCard].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCard}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        style={{ background: linearGradients[activeCard % linearGradients.length] }}
                        className={cn(
                            "hidden sm:block h-48 w-64 md:h-56 md:w-80 rounded-2xl overflow-hidden flex-shrink-0",
                            contentClassName
                        )}
                    >
                        {content[activeCard].content ?? null}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {content.map((item, i) => (
                    <button
                        key={item.title}
                        onClick={() => goTo(i)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            i === activeCard ? "bg-white w-6" : "bg-slate-600 hover:bg-slate-400 w-1.5"
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </motion.div>
    );
};
