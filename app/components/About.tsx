"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Contributions", value: "30+" },
    { label: "Satisified Clients", value: "20+" },
];

const cards = [
    {
        icon: <Code className="w-8 h-8 text-secondary" />,
        title: "Development",
        description: "Building robust, scalable, and high-performance applications using modern technologies.",
    },
    {
        icon: <Palette className="w-8 h-8 text-secondary" />,
        title: "Design",
        description: "Crafting intuitive and visually stunning user interfaces that captivate and engage.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-secondary" />,
        title: "Innovation",
        description: "Pushing boundaries to deliver unique digital solutions that stand out in the market.",
    },
];

export default function About() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Who I Am</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Crafting Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-white">Experiences</span>
                        <br /> That Matter.
                    </h3>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-400 leading-relaxed"
                    >
                        <p>
                            I am <span className="text-white font-bold">Peter Omotosho</span>, a passionate creative developer and designer with a knack for building immersive web experiences. My journey began with a curiosity for how things work on the web, which quickly evolved into a career defined by continuous learning and innovation.
                        </p>
                        <p>
                            I believe that great design is not just about how something looks, but how it works and feels. By bridging the gap between design and engineering, I create products that are not only beautiful but also performant and accessible.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-black/30 text-accent group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{card.title}</h4>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{card.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
