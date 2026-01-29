"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Working with him was an absolute game-changer for our business. The attention to detail and technical expertise is unmatched.",
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        avatar: "/avatar_1.png"
    },
    {
        id: 2,
        quote: "The ability to translate complex requirements into a seamless user experience is what sets him apart. Highly recommended!",
        name: "David Chen",
        role: "Product Manager, InnovateX",
        avatar: "/avatar_2.png"
    },
    {
        id: 3,
        quote: "Not just a developer, but a true creative partner. The final result exceeded our expectations in every way.",
        name: "Marcus Thorne",
        role: "Founder,f Studio Alpha",
        avatar: "/avatar_3.png"
    },
    {
        id: 4,
        quote: "Exceptional delivery speed without compromising on quality. The code is clean, maintanable, and scalable.",
        name: "Elena Rodriguez",
        role: "CTO, NextLevel",
        avatar: "/avatar_1.png" // Reusing for demo, ideally would generate more
    }
];

export default function Testimonials() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 mb-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Testimonials</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white">
                        Trusted by <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Industry Leaders</span>
                    </h3>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 z-20 bg-linear-to-r from-primary to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 z-20 bg-linear-to-l from-primary to-transparent pointer-events-none" />

                <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* Double the list to create seamless loop */}
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-white/10 group-hover:text-accent/20 transition-colors" />

                            <p className="text-lg text-gray-300 leading-relaxed mb-8 italic">"{item.quote}"</p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-sm text-accent">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
