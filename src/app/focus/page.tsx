"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Target, Users, BarChart } from "lucide-react";

const focusAreas = [
    {
        title: "Regional Ecosystem Development",
        desc: "Strengthening the innovation pipeline in Northern Nigeria through infrastructure, funding, and talent development.",
        icon: Map
    },
    {
        title: "Institutional Capacity Building",
        desc: "Empowering government agencies and private institutions with the digital readiness to compete in the 21st century.",
        icon: Target
    },
    {
        title: "Youth & Talent Up-skilling",
        desc: "Bridging the skills gap by training young talent in emerging technologies and professional excellence.",
        icon: Users
    },
    {
        title: "Data-Driven Governance",
        desc: "Advocating for policies that favor innovation and using data to inform better decision-making at all levels.",
        icon: BarChart
    }
];

export default function FocusPage() {
    const fadeIn = {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-20">
            <section className="bg-navy py-24 text-white">
                <div className="section-container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-5xl font-bold mb-6">Our Focus</h1>
                        <p className="text-xl text-white/70 max-w-2xl">
                            Strategically localized, globally competitive impact across Northern Nigeria.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy mb-6">Why Northern Nigeria?</h2>
                        <p className="text-navy/70 text-lg leading-relaxed">
                            Northern Nigeria holds immense untapped potential for innovation. Our focus is to unlock this potential by combining deep cultural insight with institutional excellence, building bridge between the region and the global digital economy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {focusAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-aqua/5 rounded-3xl space-y-4 hover:bg-aqua/10 transition-colors"
                            >
                                <div className="text-electric">
                                    <area.icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy">{area.title}</h3>
                                <p className="text-navy/60 leading-relaxed">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
