"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Users, PencilRuler, Play, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        title: "Understand the Context",
        desc: "We begin by deep-diving into the unique challenges and opportunities of each project, ensuring we understand the local realities and institutional landscape.",
        icon: Search,
        details: ["Deep context analysis", "Stakeholder interviews", "Regional ecosystem mapping"]
    },
    {
        title: "Co-create with Stakeholders",
        desc: "We don&apos;t design in isolation. We work side-by-side with our partners to ensure that solutions are inclusive, practical, and sustainable.",
        icon: Users,
        details: ["Design thinking workshops", "Collaborative goal setting", "Institutional alignment"]
    },
    {
        title: "Design Practical Strategies",
        desc: "Our blueprints are built for execution, not just presentation. We design robust strategies that bridge the gap from idea to measurable outcome.",
        icon: PencilRuler,
        details: ["Execution-focused roadmaps", "KPI & metric definition", "Resource mobilization plans"]
    },
    {
        title: "Stay Involved through Execution",
        desc: "We don&apos;t hand over slides and disappear. We stay in the room until the digital solutions and programs are successfully deployed.",
        icon: Play,
        details: ["Hands-on implementation support", "Project management", "Institutional capacity building"]
    },
    {
        title: "Track Outcomes & Impact",
        desc: "We rigorously monitor the results of our work to ensure long-term value creation and sustainable growth for the institutions we serve.",
        icon: BarChart3,
        details: ["Impact assessment", "Continuous optimization", "Knowledge transfer"]
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
            <section className="bg-navy py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-electric/10 skew-x-12 transform origin-top-right -z-0" />
                <div className="section-container relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-aqua">How We Work</h1>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed italic border-l-4 border-mustard pl-6">
                            &quot;We don&apos;t hand over slides and disappear. We stay until it works.&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="space-y-24">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col lg:flex-row gap-12 lg:items-center"
                            >
                                <div className="text-6xl font-black text-electric/10 w-24 shrink-0">
                                    0{i + 1}
                                </div>
                                <div className="flex-grow max-w-2xl">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="p-3 bg-aqua/10 rounded-xl text-electric">
                                            <step.icon size={24} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-navy">{step.title}</h2>
                                    </div>
                                    <p className="text-navy/70 text-lg mb-8 leading-relaxed">{step.desc}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.details.map((detail, j) => (
                                            <span key={j} className="px-4 py-2 bg-navy/5 text-navy font-bold text-xs rounded-full border border-navy/10">
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

            <section className="py-24 bg-navy text-white text-center">
                <div className="section-container">
                    <h2 className="text-3xl font-bold mb-10">Ready to start a project with us?</h2>
                    <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto mx-auto border-none">
                        <span>Partner with Enovate Lab</span>
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
