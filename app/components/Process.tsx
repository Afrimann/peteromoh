"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "I start by understanding your business goals, target audience, and project requirements to lay a solid foundation."
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "Creating a roadmap and visual prototypes. I focus on user experience and interface design that aligns with your brand."
    },
    {
        number: "03",
        title: "Development",
        description: "Writing clean, scalable code. I build the application using modern technologies, ensuring performance and security."
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "Deploying the product to production. I assist with ongoing maintenance and scaling as your user base grows."
    }
];

export default function Process() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">My Process</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white">
                        From Concept to <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-secondary">Completion</span>
                    </h3>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-white/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative z-10 group"
                        >
                            <div className="w-24 h-24 bg-primary border-4 border-white/10 rounded-full flex items-center justify-center text-3xl font-black text-white/20 group-hover:text-accent group-hover:border-accent transition-colors duration-500 mx-auto mb-8">
                                {step.number}
                            </div>

                            <div className="text-center px-4">
                                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                                    {step.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
