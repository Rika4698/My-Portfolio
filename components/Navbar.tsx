"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            const tl = gsap.timeline();
            tl.to(overlayRef.current, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.5,
                ease: "power3.out"
            }).to(menuRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power4.out"
            }, "-=0.3").from(".mobile-nav-link", {
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.3");
        } else {
            document.body.style.overflow = "auto";
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.5,
                ease: "power3.in"
            });
            gsap.to(overlayRef.current, {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.5,
                ease: "power3.in"
            });
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Hire-Me", href: "#hire-me" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
                    isScrolled
                        ? "bg-white/40 dark:bg-black/40 backdrop-blur-xl py-3 shadow-xl shadow-black/5 dark:shadow-white/10"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-lg md:text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400 group whitespace-nowrap">
                        SHARMIN AKTER REKA<span className="text-purple-600">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-9">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] xl:text-[12px] font-black uppercase tracking-[0.2em] text-foreground/70 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:-translate-y-0.5 "
                            >
                                {link.name}
                            </Link>
                        ))}
                  <div className="h-4 w-px bg-black/10 dark:bg-gray-400" />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-3 rounded-2xl bg-secondary/50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-foreground"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md opacity-0 pointer-events-none transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Content */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[70] bg-white dark:bg-[#020617] shadow-2xl translate-x-full overflow-y-auto pb- h-full"
            >
                <div className="p-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-16">
                        <Link href="/" className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400">
                            SHARMIN AKTER REKA<span className="text-purple-600">.</span>
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-3 rounded-2xl bg-secondary dark:bg-white/5"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="mobile-nav-link text-3xl font-black uppercase tracking-tighter text-foreground/80 hover:text-purple-600 dark:hover:text-purple-400 flex items-center justify-between group"
                            >
                                {link.name}
                                <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-600" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pt-10 border-t border-black/5 dark:border-white/5">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Social Presence</p>
                        <div className="flex gap-4">
                            <a href="https://github.com/Rika4698" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-purple-600/20 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:text-purple-600 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sharmin-rika-2b17a42b4/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-purple-600/20 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:text-purple-600 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:rika_cse_1819@istt.edu.bd" className="p-3 rounded-xl bg-purple-600/20 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:text-purple-600 transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
