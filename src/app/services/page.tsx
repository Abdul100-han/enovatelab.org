"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceDetails = [
    {
        title: "Strategy & Advisory",
        desc: "We help organizations design and implement innovation frameworks that drive growth. Our approach is rooted in practical outcomes and strategic institutional alignment.",
        features: [
            "Innovation & digital transformation strategy",
            "Ecosystem & stakeholder mapping",
            "Program and policy design",
            "Organizational strategy & roadmaps"
        ],
        icon: Lightbulb
    },
    {
        title: "Digital Products & Solutions",
        desc: "Modernizing processes through custom-built technology. We provide tools that enhance efficiency and offer high-level organizational insights.",
        features: [
            "Custom digital platforms & tools",
            "Data collection & reporting systems",
            "Internal tools for operations",
            "Technology advisory & product scoping"
        ],
        icon: Rocket
    },
    {
        title: "Programs & Capacity Building",
        desc: "Equipping the workforce of tomorrow with future-proof skills. We design and deploy large-scale training initiatives across diverse sectors.",
        features: [
            "AI & emerging technology training",
            "Leadership & management soft skills",
            "Entrepreneurship & MSME development",
            "Innovation ecosystem capacity building"
        ],
        icon: Zap
    },
    {
        title: "Ecosystem & Stakeholder Engagement",
        desc: "Building bridges between public and private sectors. We coordinate multi-stakeholder partnerships to solve complex regional challenges.",
        features: [
            "Roundtables, convenings & summits",
            "Multi-stakeholder partnerships",
            "Ecosystem research & coordination",
            "Public–private collaboration design"
        ],
        icon: Users
    }
];

export default function ServicesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-20">
            <section className="bg-navy py-24 text-white">
                <div className="section-container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-5xl font-bold mb-6 text-aqua">Our Core Services</h1>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                            We don&apos;t just plan; we stay through the implementation edge.
                            Explore our comprehensive suite of strategic and technical services.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {serviceDetails.map((service, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 border border-navy/10 rounded-3xl hover:border-electric/30 transition-all bg-white shadow-xl hover:shadow-2xl flex flex-col"
                            >
                                <div className="text-electric mb-6">
                                    <service.icon size={40} />
                                </div>
                                <h2 className="text-2xl font-bold text-navy mb-4">{service.title}</h2>
                                <p className="text-navy/60 mb-8 leading-relaxed">{service.desc}</p>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {service.features.map((f, j) => (
                                        <li key={j} className="flex items-start text-navy font-medium">
                                            <div className="w-1.5 h-1.5 bg-aqua rounded-full mt-2 mr-3 shrink-0" />
                                            <span className="text-sm">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto">
                                    <span>Inquire About This Service</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
