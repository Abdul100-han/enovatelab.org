"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
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
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-white/70 max-w-2xl">
                            Let&apos;s discuss how we can partner to drive innovation in your organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl font-bold text-navy mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="bg-electric/10 p-4 rounded-xl text-electric">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Location</h4>
                                        <p className="text-navy/60">Kano State, Nigeria</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="bg-electric/10 p-4 rounded-xl text-electric">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Phone</h4>
                                        <p className="text-navy/60">+234 123 456 7890</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="bg-electric/10 p-4 rounded-xl text-electric">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">Email</h4>
                                        <p className="text-navy/60">info@enovatelab.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-aqua/5 rounded-2xl border border-aqua/10">
                                <h4 className="font-bold text-navy mb-4 text-xl">Visit Our Hub</h4>
                                <p className="text-navy/60 leading-relaxed mb-6">
                                    Our physical space in Kano serves as the heartbeat of regional innovation. We welcome visits by appointment.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-3xl shadow-xl border border-navy/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy">Full Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-electric outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-electric outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-electric outline-none transition-all bg-white">
                                        <option>Innovation Consulting</option>
                                        <option>Digital Transformation</option>
                                        <option>Startup Support</option>
                                        <option>Other Inquiry</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Message</label>
                                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-electric outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="button" className="btn-primary w-full flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
