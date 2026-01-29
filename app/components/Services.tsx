"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Code2, Rocket } from "lucide-react";

const services = [
    {
        title: "Web Application Development",
        description: "Building modern, scalable, and interactive single-page applications (SPA) using React and Next.js.",
        icon: <Monitor className="w-10 h-10" />
    },
    {
        title: "Responsive Design",
        description: "Crafting pixel-perfect layouts that adapt seamlessly to desktops, tablets, and mobile devices.",
        icon: <Smartphone className="w-10 h-10" />
    },
    {
        title: "API Integration",
        description: "Seamlessly connecting user interfaces with complex backend systems and third-party APIs.",
        icon: <Code2 className="w-10 h-10" />
    },
    {
        title: "Performance & SEO",
        description: "Optimizing applications for lightning-fast load times, smooth animations, and search engine visibility.",
        icon: <Rocket className="w-10 h-10" />
    }
];

export default function Services() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">What I Do</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            Solving Problems Through <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Creative Engineering</span>
                        </h3>
                    </div>
                    <p className="text-gray-400 max-w-md text-lg">
                        I help businesses and startups build digital products that are not only visual pleasant but technical sound.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 bg-white/5 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 mb-8 text-accent group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h4 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                                {service.title}
                            </h4>

                            <p className="relative z-10 text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                {service.description}
                            </p>

                            {/* <div className="relative z-10 mt-auto pt-8 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <span className="w-8 h-[2px] bg-accent" />
                                LEARN MORE
                            </div> */}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
