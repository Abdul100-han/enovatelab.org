"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Globe, Shield } from "lucide-react";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-navy py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-electric/10 skew-x-12 transform origin-top-right -z-0" />
                <div className="section-container relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
                        <p className="text-xl text-white/70 max-w-2xl">
                            Building the infrastructure for innovation and excellence across Africa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div {...fadeIn} className="bg-aqua/5 p-12 rounded-3xl">
                            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
                            <p className="text-navy/70 text-lg leading-relaxed">
                                To foster a culture of innovation and execution, providing institutions and entrepreneurs with the tools, networks, and credibility needed to compete globally.
                            </p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-navy p-12 rounded-3xl text-white">
                            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                            <p className="text-white/70 text-lg leading-relaxed">
                                To be the leading catalyst for socio-economic transformation in Africa through technology, policy, and disciplined execution.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* History / Values */}
            <section className="py-24 border-t border-navy/5">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Integrity", icon: Shield, desc: "We uphold the highest ethical standards in all our institutional engagements." },
                            { title: "Execution", icon: History, desc: "We focus on tangible results rather than just ideas or proposals." },
                            { title: "Global Excellence", icon: Globe, desc: "We adhere to international benchmarks in everything we build and support." }
                        ].map((value, i) => (
                            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center space-y-4">
                                <div className="flex justify-center text-electric">
                                    <value.icon size={48} />
                                </div>
                                <h3 className="text-xl font-bold text-navy">{value.title}</h3>
                                <p className="text-navy/60 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
