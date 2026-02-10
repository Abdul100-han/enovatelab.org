"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceDetails = [
    {
        title: "Innovation Consulting",
        desc: "We help organizations design and implement innovation frameworks that drive growth. From corporate innovation strategies to digital roadmap development.",
        features: ["Strategic Design", "Digital Roadmap", "Internal R&D Setup"]
    },
    {
        title: "Digital Transformation",
        desc: "Modernizing institutional processes through technology. We provide end-to-end digital solutions that enhance efficiency and service delivery.",
        features: ["Process Automation", "Enterprise Solutions", "Data Analytics"]
    },
    {
        title: "Startup & SME Support",
        desc: "Building the next generation of African unicorns. We provide incubation, acceleration, and market access for high-growth potential businesses.",
        features: ["Incubation", "Market Access", "Mentorship Networks"]
    },
    {
        title: "Policy & Research",
        desc: "Informing the future of innovation through data. We provide advisory services for governments and international organizations on innovation policy.",
        features: ["Ecosystem Mapping", "Impact Assessment", "Policy Advocacy"]
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
                        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-white/70 max-w-2xl">
                            Comprehensive solutions designed to foster institutional innovation and sustainable growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {serviceDetails.map((service, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                className="p-10 border border-navy/5 rounded-3xl hover:border-electric/30 transition-all bg-white shadow-sm"
                            >
                                <h2 className="text-2xl font-bold text-navy mb-4">{service.title}</h2>
                                <p className="text-navy/60 mb-8 leading-relaxed">{service.desc}</p>
                                <ul className="space-y-3 mb-10">
                                    {service.features.map((f, j) => (
                                        <li key={j} className="flex items-center text-navy/80 font-medium">
                                            <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="text-electric font-bold flex items-center hover:underline group">
                                    Inquire about this service <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
