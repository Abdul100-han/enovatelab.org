import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/5">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                ENOVATE<span className="text-aqua">LAB</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Fostering innovation and institutional credibility. African-rooted, globally competitive execution for a sustainable future.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-electric transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-electric transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-electric transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-electric transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/about" className="hover:text-aqua transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-aqua transition-colors">Services</Link></li>
                            <li><Link href="/process" className="hover:text-aqua transition-colors">How We Work</Link></li>
                            <li><Link href="/focus" className="hover:text-aqua transition-colors">Our Focus</Link></li>
                            <li><Link href="/contact" className="hover:text-aqua transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="#" className="hover:text-aqua transition-colors">Innovation Consulting</Link></li>
                            <li><Link href="#" className="hover:text-aqua transition-colors">Digital Transformation</Link></li>
                            <li><Link href="#" className="hover:text-aqua transition-colors">Startup Support</Link></li>
                            <li><Link href="#" className="hover:text-aqua transition-colors">Policy Research</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-aqua shrink-0" />
                                <span>Kano State, Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-aqua shrink-0" />
                                <span>+234 123 456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-aqua shrink-0" />
                                <span>info@enovatelab.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>© {new Date().getFullYear()} Enovate Lab. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
