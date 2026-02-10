"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Rocket, Shield, Users, Target, Globe, CheckCircle, ClipboardCheck, Zap, BarChart3, MessageSquare } from "lucide-react";

const services = [
  {
    title: "Strategy & Advisory",
    description: "Innovation & digital transformation strategy, ecosystem mapping, and program design for long-term roadmaps.",
    icon: Lightbulb,
  },
  {
    title: "Digital Products & Solutions",
    description: "Custom platforms, data reporting systems, and internal tools designed for operational excellence.",
    icon: Rocket,
  },
  {
    title: "Programs & Capacity Building",
    description: "Digital skills, AI training, and entrepreneurship programs designed for MSME and ecosystem growth.",
    icon: Zap,
  },
  {
    title: "Ecosystem Engagement",
    description: "Convenings, partnerships, and research-driven public-private collaboration design.",
    icon: Users,
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We deep-dive into the context to understand the unique challenges and institutional landscape.",
  },
  {
    number: "02",
    title: "Co-create",
    description: "We work closely with stakeholders to design solutions that are inclusive and practical.",
  },
  {
    number: "03",
    title: "Design",
    description: "Developing robust, execution-focused strategies tailored to specific measurable outcomes.",
  },
  {
    number: "04",
    title: "Execute",
    description: "We don't just hand over slides; we stay involved through implementation until it works.",
  },
  {
    number: "05",
    title: "Track",
    description: "Rigorous monitoring of impact and outcomes to ensure sustainable value creation.",
  },
];

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-electric/10 skew-x-12 transform origin-top-right -translate-y-20 -z-0" />

        <div className="section-container relative z-10 pt-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto lg:mx-0"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Don&apos;t Just Design Ideas. <br />
              <span className="text-aqua">We Implement What Works.</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Enovate Lab is a strategic consulting and implementation partner helping governments and organizations design, deploy, and scale innovation—especially across Northern Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary flex items-center justify-center">
                Partner With Us <ArrowRight className="ml-2" />
              </Link>
              <Link href="/services" className="btn-secondary flex items-center justify-center">
                See What We Do
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Enovate Lab 3.0 */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">Enovate Lab 3.0</span>
              <h2 className="text-4xl font-bold text-navy mb-6">From Innovation Hub to Strategic Partner</h2>
              <p className="text-navy/70 text-lg mb-6">
                Enovate Lab has evolved into a full-fledged consulting and implementation partner supporting government institutions, NGOs, and ecosystem builders.
              </p>
              <p className="text-navy/70 text-lg mb-8">
                We help partners move from ideas &rarr; strategy &rarr; execution &rarr; measurable outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Government Institutions",
                  "Development Organizations",
                  "Ecosystem Builders",
                  "Corporate Partners"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-navy font-bold">
                    <CheckCircle className="text-aqua" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative aspect-video bg-navy/5 rounded-3xl overflow-hidden border border-navy/10 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="text-6xl font-black text-navy/10 mb-4 tracking-tighter italic">ENOVATE 3.0</div>
                <p className="text-navy/40 font-medium">Strategic Implementation Partner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Service Cards */}
      <section className="py-24 bg-navy text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Execution Across Core Pillars</h2>
            <p className="text-white/60">We provide custom solutions, not templates, built on a collaborative delivery model that prioritizes results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-aqua/50 transition-all group"
              >
                <div className="bg-electric/20 p-4 rounded-lg inline-block mb-6 group-hover:bg-electric transition-colors">
                  <service.icon className="text-aqua group-hover:text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Steps */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-navy mb-4">How We Work</h2>
            <p className="text-navy/60 max-w-2xl mx-auto italic font-medium">
              &quot;We don&apos;t hand over slides and disappear. We stay until it works.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-navy/5 -z-0 hidden lg:block" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-navy/5 last:border-0 text-center"
              >
                <span className="text-4xl font-black text-electric/10 block leading-none">{step.number}</span>
                <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus - Northern Nigeria */}
      <section className="py-24 bg-aqua/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1 relative">
              <div className="bg-navy rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-aqua">Building Where It Matters Most</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Our specialized focus on Northern Nigeria is driven by a deep understanding of local realities and strong regional relationships.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <BarChart3 className="text-mustard" />
                    <span className="font-bold">Proven Cross-Sector Experience</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Shield className="text-aqua" />
                    <span className="font-bold">Strong Government Relationships</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">Strategic Focus</span>
              <h2 className="text-4xl font-bold text-navy mb-6">Northern Roots, <br />Global Standards</h2>
              <p className="text-navy/70 text-lg mb-8 leading-relaxed">
                We combine local insights with institutional excellence to build sustainable bridges between regional potential and the global digital economy.
              </p>
              <Link href="/contact" className="btn-primary">
                Learn About Our Impact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Enovate Lab & Proof of Work */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-navy mb-10">Why Enovate Lab?</h2>
              <div className="space-y-6">
                {[
                  { t: "Strategy + Implementation", d: "Combined approach ensuring that plans actually become reality." },
                  { t: "Deep Expertise", d: "Unrivaled understanding of government, development, and tech ecosystems." },
                  { t: "Custom Solutions", d: "We reject templates in favor of bespoke tools tailored to your needs." },
                  { t: "Collaborative Model", d: "We work WITH you, building internal capacity as we deliver." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-aqua flex items-center justify-center text-white">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{item.t}</h4>
                      <p className="text-navy/60 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-4xl font-bold text-navy mb-10">Proof of Work</h2>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-navy/5 p-8 rounded-2xl border border-navy/10 flex items-center justify-center text-navy/20 font-bold uppercase tracking-widest h-32">
                  Partner Logo
                </div>
                <div className="bg-navy/5 p-8 rounded-2xl border border-navy/10 flex items-center justify-center text-navy/20 font-bold uppercase tracking-widest h-32">
                  Partner Logo
                </div>
                <div className="col-span-2 bg-aqua/5 p-8 rounded-2xl border border-aqua/20">
                  <div className="text-electric font-black text-3xl mb-1">50+</div>
                  <div className="text-navy/60 text-sm font-bold uppercase">Successful Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            {...fadeIn}
            className="bg-navy rounded-3xl p-12 md:p-20 relative overflow-hidden text-center text-white"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-electric/5 -z-0" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-aqua">Let&apos;s Build What Works</h2>
              <p className="text-white/70 text-lg mb-12">
                Join a network of forward-thinking organizations building the future of Africa. Let&apos;s discuss your next project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-primary">
                  Partner with Enovate Lab
                </Link>
                <Link href="/contact?subject=Strategy%20Session" className="btn-secondary border-white text-white hover:bg-white hover:text-navy">
                  Request a Strategy Session
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
