"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Insight & Assessment",
        desc: "Every project begins with understanding. We analyze the existing institutional landscape, identify gaps, and uncover hidden opportunities.",
        details: ["Audit of current infrastructure", "Stakeholder interviews", "Regional market analysis"]
    },
    {
        title: "Strategic Blueprinting",
        desc: "We design a customized roadmap that balances ambition with institutional reality. This isn&apos;t a generic plan; it&apos;s a blueprint for execution.",
        details: ["KPI definition", "Resource mapping", "Risk mitigation strategies"]
    },
    {
        title: "Agile Implementation",
        desc: "Our team works side-by-side with yours to bring the blueprint to life. We prioritize building capacity within your organization as we deliver results.",
        details: ["Phased rollout", "Continuous feedback loops", "Institutional capacity building"]
    },
    {
        title: "Impact Measurement",
        desc: "We don&apos;t just deliver and disappear. We measure success against predefined KPIs and ensure that innovation is sustained long after our engagement.",
        details: ["Impact reporting", "Long-term scalability planning", "Knowledge transfer"]
    }
];

export default function ProcessPage() {
    const fadeIn = {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-20">
            <section className="bg-navy py-24 text-white">
                <div className="section-container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-5xl font-bold mb-6">How We Work</h1>
                        <p className="text-xl text-white/70 max-w-2xl">
                            Disciplined execution and institutional credibility drive our methodology.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container">
                    <div className="space-y-24">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                className="flex flex-col lg:flex-row gap-12 lg:items-center"
                            >
                                <div className="text-7xl font-black text-navy/10 w-32 shrink-0">
                                    0{i + 1}
                                </div>
                                <div className="flex-grow max-w-2xl">
                                    <h2 className="text-3xl font-bold text-navy mb-4">{step.title}</h2>
                                    <p className="text-navy/70 text-lg mb-8 leading-relaxed">{step.desc}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.details.map((detail, j) => (
                                            <span key={j} className="px-4 py-2 bg-aqua/10 text-navy font-bold text-sm rounded-full">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
