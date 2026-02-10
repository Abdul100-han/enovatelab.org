"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Globe, Shield, Zap, Target, Users } from "lucide-react";

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
                        <span className="text-aqua font-bold tracking-widest uppercase text-sm mb-4 block">Enovate Lab 3.0</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">From Innovation Hub to <br />Strategic Partner</h1>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                            Enovate Lab has evolved into a full-fledged consulting and implementation partner helping partners move from ideas &rarr; strategy &rarr; execution &rarr; measurable outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div {...fadeIn} className="bg-aqua/5 p-12 rounded-3xl border border-aqua/10">
                            <h2 className="text-3xl font-bold text-navy mb-6">Our Evolution</h2>
                            <p className="text-navy/70 text-lg leading-relaxed mb-6">
                                We have evolved from an innovation platform into a strategic partner supporting government institutions, development organizations, and ecosystem builders.
                            </p>
                            <p className="text-navy/70 text-lg leading-relaxed">
                                Our goal is to ensure that digital solutions and capacity-building programs are not just designed, but successfully deployed and scaled.
                            </p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-navy p-12 rounded-3xl text-white shadow-2xl">
                            <h2 className="text-3xl font-bold mb-6 text-aqua">The Implementation Edge</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                We specialize in the &quot;Last Mile&quot; of innovation. We don&apos;t just hand over strategy slides; we stay through the difficult phases of implementation.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-aqua font-bold">
                                    <Target size={20} />
                                    <span>Result-Oriented Delivery</span>
                                </div>
                                <div className="flex items-center space-x-3 text-aqua font-bold">
                                    <Zap size={20} />
                                    <span>Agile Problem Solving</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 border-t border-navy/5 bg-navy/5">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy">Why Organizations Trust Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Strategy + Implementation", icon: History, desc: "A combined approach ensuring that digital plans actually become institutional reality." },
                            { title: "Deep Local Networks", icon: Globe, desc: "Unrivaled understanding of local realities and strong regional relationships across Northern Nigeria." },
                            { title: "Collaborative Model", icon: Users, desc: "We work side-by-side with your team, building capacity as we deliver results." }
                        ].map((value, i) => (
                            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white p-10 rounded-2xl shadow-sm border border-navy/5 text-center">
                                <div className="flex justify-center text-electric mb-6">
                                    <value.icon size={48} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4">{value.title}</h3>
                                <p className="text-navy/60 leading-relaxed text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
