"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Github, Linkedin, Mail, Heart, ArrowUp, Download } from "lucide-react";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-reveal", {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Looping Text Animation
            gsap.to(".looping-text", {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="py-20 px-6 bg-white dark:bg-[#020617] border-t border-black/5 dark:border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">

                {/* Brand / Name */}
                <div className="footer-reveal space-y-8 w-full overflow-hidden">
                    <h2 className="text-[12vw] md:text-[8vw] font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-black to-black/20  dark:from-white dark:to-white/10 opacity-20 hover:opacity-100 transition-opacity duration-700 select-none">
                        SHARMIN AKTER REKA
                    </h2>

                    {/* Looping Text */}
                    <div className="flex whitespace-nowrap overflow-hidden">
                        <div className="looping-text flex text-2xl md:text-5xl font-black uppercase text-purple-600/30">
                            {[1, 2, 3, 4].map((i) => (
                                <span key={i} className="flex items-center gap-12 mr-12">
                                    Frontend Developer <span className="text-foreground/10">•</span> MERN Stack Developer <span className="text-foreground/10">•</span>Full-Stack Developer <span className="text-foreground/10">•</span>Junior Web Developer <span className="text-foreground/10">•</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Resume Button */}
                <div className="footer-reveal">
                    <a
                        href="/Front-End Developer Resume.pdf"
                        download
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl border-2 border-purple-600 hover:bg-purple-500"
                    >
                        <Download size={18} /> Download Resume
                    </a>
                </div>

                {/* Navigation */}
                <div className="footer-reveal flex flex-wrap justify-center gap-8 md:gap-16">
                    {["Home", "About", "Skills", "Education", "Projects", "Hire-Me", "Contact"].map((item) => (
                        <Link
                            key={item}
                           href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                            className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground hover:text-purple-600 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Socials & Copyright */}
                <div className="footer-reveal w-full pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground order-2 md:order-1">
                        © {new Date().getFullYear()} Sharmin Akter Reka.
                    </p>

                    <div className="flex gap-6 order-1 md:order-2">
                        {[
                            { icon: Github, href: "https://github.com/Rika4698" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/sharmin-rika-2b17a42b4/" },
                            { icon: Mail, href: "mailto:rekasharmin46@gmail.com" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="   text-muted-foreground
    hover:text-purple-600
    p-2
    rounded-xl
    bg-purple-900/20
    border border-transparent
    transition-all duration-300 ease-out
    hover:border-purple-500
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-lg hover:shadow-purple-500/20"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    <div className="order-3 flex items-center justify-center">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-purple-600 transition-colors"
                        >
                            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
