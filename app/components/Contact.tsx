"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-6">Get in Touch</h2>
                    <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                        LET'S WORK <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-gray-500">TOGETHER</span>
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-8"
                >
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Have a project in mind? Let's build something extraordinary. I'm always open to discussing new opportunities and ideas.
                    </p>

                    <a
                        href="mailto:omotoshopeter737@gmail.com"
                        className="group relative px-10 py-5 bg-white text-primary font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Mail className="w-6 h-6" />
                            SAY HELLO
                        </span>
                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-6">
                        {[
                            { icon: Github, href: "https://github.com/Afrimann", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/omotosho-peter-8590b0220/", label: "LinkedIn" },
                            { icon: Twitter, href: "https://x.com/Afriimann", label: "Twitter" }
                        ].map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:-translate-y-1"
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Peter Omoh. All rights reserved.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
