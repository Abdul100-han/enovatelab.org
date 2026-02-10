"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Target, Users, BarChart3, Shield, Globe } from "lucide-react";

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
        icon: BarChart3
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
                        <h1 className="text-5xl font-bold mb-6 text-aqua">Building Where It Matters Most</h1>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                            Strategically localized, globally competitive impact across Northern Nigeria and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white text-navy leading-relaxed">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center mb-20 lg:text-left lg:mx-0">
                        <h2 className="text-4xl font-bold mb-6">Why Northern Nigeria?</h2>
                        <p className="text-navy/70 text-lg mb-8">
                            Northern Nigeria holds immense untapped potential for innovation. Our focus is to unlock this potential by combining deep cultural insight with institutional excellence.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                            <div className="p-6 bg-navy/5 rounded-2xl border border-navy/10">
                                <h4 className="font-bold mb-2 flex items-center"><Shield className="text-electric mr-2" size={18} /> Local Realities</h4>
                                <p className="text-sm text-navy/60">Deep understanding of regional challenges and socio-economic context.</p>
                            </div>
                            <div className="p-6 bg-navy/5 rounded-2xl border border-navy/10">
                                <h4 className="font-bold mb-2 flex items-center"><Globe className="text-electric mr-2" size={18} /> Global Vision</h4>
                                <p className="text-sm text-navy/60">Adhering to international standards in every project we deliver.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {focusAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-aqua/5 rounded-3xl space-y-4 hover:bg-aqua/10 transition-colors border border-aqua/10"
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
