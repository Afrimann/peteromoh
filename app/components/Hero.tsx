"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const roles = ["A Developer", "A Designer", "An Innovator"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-primary flex flex-col lg:flex-row items-center justify-center overflow-hidden px-6 lg:px-20 selection:bg-accent selection:text-white">

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] opacity-40 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] opacity-20" />
            </div>

            {/* Architectural Name Watermark */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
                className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none select-none overflow-hidden opacity-5"
            >
                <div className="whitespace-nowrap font-black text-[15rem] md:text-[25rem] lg:text-[35rem] leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:2px_white] lg:[-webkit-text-stroke:4px_white] blur-[2px]">
                    PETER
                </div>
                <div className="whitespace-nowrap font-black text-[15rem] md:text-[25rem] lg:text-[35rem] leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:2px_white] lg:[-webkit-text-stroke:4px_white] blur-[2px] ml-[20%]">
                    OMOTOSHO
                </div>
            </motion.div>

            {/* Content Left */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-20 w-full flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="w-full"
                >
                    <h1 className="text-7xl md:text-8xl lg:text-9xl w-full font-black text-secondary tracking-tighter leading-[0.9]">
                        I BUILD <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-blue-400">
                            DIGITAL
                        </span> <br />
                        DREAMS
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 md:mt-8 flex items-center gap-4 overflow-hidden"
                >
                    <div className="h-[2px] w-8 md:w-12 bg-accent" />
                    <span className="text-lg md:text-2xl text-gray-300 font-light tracking-widest uppercase">
                        I am {" "}
                        <motion.span
                            key={roleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="inline-block font-bold text-white relative"
                        >
                            {roles[roleIndex]}
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent" />
                        </motion.span>
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto"
                >
                    <button className="group relative px-8 py-4 bg-secondary text-primary font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto flex justify-center">
                        <span className="relative z-10 flex items-center gap-2">
                            EXPLORE WORK
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                    </button>

                    <button className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all font-medium tracking-wide w-full sm:w-auto">
                        CONTACT ME
                    </button>
                </motion.div>
            </motion.div>

            {/* Image Right */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute lg:relative z-10 w-full lg:w-1/2 h-full top-0 lg:top-auto right-0 flex items-end justify-center lg:justify-end opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto mix-blend-lighten"
            >
                {/* Gradient Mask for fading image into black */}
                <div className="absolute inset-0 z-20 bg-linear-to-t from-primary via-transparent to-transparent lg:bg-linear-to-l lg:from-transparent lg:via-transparent lg:to-primary" />

                <div className="relative w-full h-full lg:h-[90%] max-w-2xl translate-y-0 lg:translate-x-10 grayscale contrast-125 brightness-110">
                    <Image
                        src="/peter.JPG"
                        alt="Portrait"
                        fill
                        className="object-cover object-[center_-100px] md:object-[center_-150px] "
                        priority
                    />
                </div>
            </motion.div>

            {/* Custom Scroll Indicator */}
            <div className="absolute bottom-10 left-10 z-30 hidden lg:flex items-center gap-4 text-white/50 text-sm tracking-widest [writing-mode:vertical-rl] rotate-180">
                <span className="animate-pulse">SCROLL TO DISCOVER</span>
                <div className="h-16 w-px bg-white/20" />
            </div>
        </section>
    );
}
