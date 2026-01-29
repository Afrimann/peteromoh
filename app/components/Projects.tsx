"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Faire Creatives",
        category: "E-Commerce Application",
        description: "A comprehensive e-commerce platform for Faire Creatives, featuring a seamless storefront for branded merchandise and a real-time admin dashboard for analytics and order management.",
        image: "/faire.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
        links: {
            demo: "https://faire-build.vercel.app",
            repo: "https://github.com/"
        }
    },
    {
        id: 2,
        title: "ElCharis Trove",
        category: "Clothing Store (E-commerce)",
        description: "A boutique fashion marketplace for ElCharis Trove, designed to showcase curated accessories. Includes a robust admin interface for product management and sales tracking.",
        image: "/elcharis.png",
        tags: ["Next.js", "Sanity", "Clerk", "Tailwind"],
        links: {
            demo: "https://www.elcharistrove.org",
            repo: "https://github.com/"
        }
    },
    {
        id: 3,
        title: "Crown Haven",
        category: "Saas Dashboard",
        description: "A secure real-estate service marketplace connecting property owners with trusted providers. Features include booking management, secure payments, and verified provider listings.",
        image: "/crown.png",
        tags: ["Next.js", "Backend API", "Tailwind", "Redux", "Motion", "Recharts"],
        links: {
            demo: "https://crownhaven.vercel.app",
            repo: "https://github.com/"
        }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full py-20 lg:py-32 bg-primary dark text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 space-y-4"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase">Selected Works</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                        Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">Projects</span>
                    </h3>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-20 lg:gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-20 items-center`}
                        >
                            {/* Image Visual */}
                            <div className="w-full lg:w-3/5 group">
                                <Link href={project.links.demo} target="_blank" className="block relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>
                            </div>

                            {/* Text Visual */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-accent text-sm font-medium tracking-wider uppercase">{project.category}</span>
                                    <h4 className="text-3xl md:text-4xl font-bold">{project.title}</h4>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-gray-300 hover:border-accent hover:text-accent transition-colors bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4">
                                    <Link href={project.links.demo} className="flex items-center gap-2 text-white font-bold hover:text-accent transition-colors group">
                                        Live Demo
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </Link>
                                    <Link href={project.links.repo} className="flex items-center gap-2 text-gray-400 font-medium hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                        <span>Source Code</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 lg:mt-32 flex justify-center"
                >
                    <Link href="https://www.github.com/Afrimann" target="_blank" className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full overflow-hidden transition-all hover:border-accent">
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors">
                            VIEW ALL PROJECTS
                        </span>
                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
