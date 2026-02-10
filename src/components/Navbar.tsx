"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/process" },
    { name: "Our Focus", href: "/focus" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-navy/95 backdrop-blur-md py-3 shadow-lg"
                    : "bg-transparent py-5"
            )}
        >
            <div className="section-container flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-white tracking-tight">
                        ENOVATE<span className="text-aqua">LAB</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-aqua",
                                pathname === link.href ? "text-aqua" : "text-white/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-primary py-2 px-5 text-sm">
                        Work With Us
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "fixed inset-0 top-[60px] bg-navy z-40 md:hidden transition-transform duration-300 ease-in-out transform",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col items-center pt-20 space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-xl font-medium transition-colors hover:text-aqua",
                                pathname === link.href ? "text-aqua" : "text-white/80"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="btn-primary py-2 px-8"
                        onClick={() => setIsOpen(false)}
                    >
                        Work With Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
