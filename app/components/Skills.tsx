"use client";

import { motion } from "framer-motion";
import { Layers, Database, Cpu, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Core",
        icon: <Layers className="w-6 h-6 text-accent" />,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Sass", "Framer Motion"]
    },
    {
        title: "Backend & Services",
        icon: <Database className="w-6 h-6 text-accent" />,
        skills: ["Convex", "Sanity", "Firebase", "Node.js", "Express", "PostgreSQL"]
    },
    {
        title: "Tools & DevOps",
        icon: <Cpu className="w-6 h-6 text-accent" />,
        skills: ["Git", "Docker", "Postman", "Vercel", "Jest", "CI/CD"]
    },
    {
        title: "Data & Visualization",
        icon: <Wrench className="w-6 h-6 text-accent" />,
        skills: ["Recharts", "D3.js", "Chart.js", "Figma", "UI/UX Architecture"]
    }
];

export default function Skills() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Tech Stack</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white">
                        Technologies I <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">Master</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-black/30 rounded-lg">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
