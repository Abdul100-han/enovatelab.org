"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Rocket, Shield, Users, Target, Globe, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Innovation Consulting",
    description: "Tailored strategies to foster innovation within organizations, bridging the gap between ideas and execution.",
    icon: Lightbulb,
  },
  {
    title: "Digital Transformation",
    description: "Empowering institutions with modern digital tools and processes to stay competitive in a global market.",
    icon: Rocket,
  },
  {
    title: "Startup Support",
    description: "Incubation and acceleration programs designed for African-rooted startups aimed at global scalability.",
    icon: Target,
  },
  {
    title: "Policy & Research",
    description: "Fact-based research and policy advocacy to create enabling environments for innovation to thrive.",
    icon: Shield,
  },
];

const steps = [
  {
    number: "01",
    title: "Insight",
    description: "We begin by deep-diving into the challenges and opportunities through rigorous research and analysis.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a robust, execution-focused roadmap tailored to your specific institutional needs.",
  },
  {
    number: "03",
    title: "Execution",
    description: "We work alongside you to implement solutions, ensuring quality and institutional credibility.",
  },
  {
    number: "04",
    title: "Impact",
    description: "Measuring outcomes and scale, ensuring sustainable growth and long-term value creation.",
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
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-electric/10 skew-x-12 transform origin-top-right -translate-y-20 -z-0" />

        <div className="section-container relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Innovation Rooted in <span className="text-aqua">Trust</span>. Excellence Built for <span className="text-mustard">Impact</span>.
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Fostering innovation and institutional credibility across Northern Nigeria and beyond. We build globally competitive solutions with African roots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary flex items-center justify-center group">
                What We Do <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary flex items-center justify-center">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl font-bold text-navy mb-6">A Trusted Partner for Institutional Innovation</h2>
              <p className="text-navy/70 text-lg mb-6">
                Enovate Lab is a premier innovation hub and consulting firm dedicated to driving excellence and execution. We specialize in helping governments, institutions, and startups navigate the complexities of modern growth.
              </p>
              <p className="text-navy/70 text-lg mb-8">
                Our approach combines deep local context with global best practices, ensuring that innovation is not just a buzzword, but a driver of tangible socio-economic impact.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="text-electric" size={40} />
                <div>
                  <h4 className="font-bold text-navy">Execution-Focused Team</h4>
                  <p className="text-navy/60 text-sm">We don&apos;t just plan; we deliver results that matter.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-aqua/20 rounded-2xl overflow-hidden">
                {/* Visual placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-navy/20 font-bold text-6xl">
                  ENOVATE
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-mustard p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-navy font-bold text-3xl">10+</p>
                <p className="text-navy/80 text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Service Cards */}
      <section className="py-24 bg-navy text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-aqua font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="text-4xl font-bold mb-6">Execution Across Four Core Pillars</h2>
            <p className="text-white/60">We provide a comprehensive suite of services designed to foster innovation at every level of society and industry.</p>
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
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">Our Process</span>
              <h2 className="text-4xl font-bold text-navy">A Disciplined Approach to Innovation</h2>
            </div>
            <p className="text-navy/60 max-w-sm mb-2">Our methodology is designed for clarity, accountability, and maximum institutional impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {/* Connecting lines for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-navy/5 -z-0 hidden lg:block" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 p-8 space-y-6 md:p-10 border-b lg:border-b-0 lg:border-r border-navy/5 last:border-0"
              >
                <span className="text-5xl font-black text-navy/5 block leading-none">{step.number}</span>
                <h3 className="text-2xl font-bold text-navy">{step.title}</h3>
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
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] bg-navy rounded-2xl"></div>
                <div className="aspect-[4/5] bg-electric/20 rounded-2xl mt-8"></div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">Strategic Focus</span>
              <h2 className="text-4xl font-bold text-navy mb-6">Northern Roots, <span className="text-electric">Global Vision</span></h2>
              <p className="text-navy/70 text-lg mb-6">
                Enovate Lab maintains a specialized focus on the Northern Nigerian ecosystem. We understand the unique challenges and vast untapped potential of this region.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Talent development in emerging tech",
                  "Institutional capacity building",
                  "Vibrant startup ecosystem orchestration",
                  "Government technology integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-navy font-medium">
                    <CheckCircle className="text-aqua mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/focus" className="text-electric font-bold flex items-center hover:underline group">
                Deep Dive into Our Regional Impact <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Enovate Lab */}
      <section className="py-24 bg-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-navy mb-16">Why Organizations Trust Enovate Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Institutional Credibility", desc: "We maintain the highest standards of professional integrity and institutional excellence." },
              { title: "Deep Local Networks", desc: "Access to unrivaled relationships across government, academia, and the private sector." },
              { title: "Proven Track Record", desc: "A history of successful project delivery and measurable impact across diverse sectors." }
            ].map((reason, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div className="mb-6 flex justify-center text-mustard">
                  <Globe size={48} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-navy mb-4">{reason.title}</h4>
                <p className="text-navy/60 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
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
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Enovate your institution?</h2>
              <p className="text-white/70 text-lg mb-12">
                Join a network of forward-thinking organizations building the future of Africa. Let&apos;s discuss your next project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-primary">
                  Request a Consultation
                </Link>
                <Link href="/services" className="px-6 py-3 font-bold border-b-2 border-transparent hover:border-aqua transition-all">
                  Browse Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
