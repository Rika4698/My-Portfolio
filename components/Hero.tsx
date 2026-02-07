"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Image from "next/image";

const TYPE_ROLES = [
    "Full-Stack Developer",
    "Front-End Developer",
    "MERN Stack Developer",
    "Junior Web Developer"
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(".hero-badge", {
                y: -20,
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
                .from(".hero-title-line", {
                    y: 100,
                    skewY: 10,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.2
                }, "-=0.8")
                .from(".hero-description", {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1
                }, "-=0.8")
                .from(".hero-btns", {
                    y: 30,
                    opacity: 0,
                    duration: 1
                }, "-=0.8")
                .from(imageRef.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.out"
                }, "-=1.5");

            // Float animation
            gsap.to(imageRef.current, {
                y: 15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Typewriter effect logic
    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = TYPE_ROLES[currentRoleIndex];

            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % TYPE_ROLES.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <section id="/" ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-24 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10 ">
                <div ref={contentRef} className="space-y-12 order-2 lg:order-1 text-center lg:text-left">
                    <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 shadow-xl shadow-purple-500/5 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mx-auto lg:mx-0">
                        <Sparkles size={14} className="animate-pulse" /> Available for New Projects
                    </div>

                    <div className="space-y-6">
                        <div className="overflow-hidden">
                            <h1 className="text-6xl md:text-8xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                                <span className="hero-title-line block">SHARMIN</span>
                                <span className="hero-title-line block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400 drop-shadow-sm">AKTER REKA</span>
                            </h1>
                        </div>

                        <div className="hero-description h-12 flex items-center justify-center lg:justify-start">
                            <p className="text-lg md:text-2xl lg:text-4xl text-purple-600 dark:text-purple-400 font-extrabold uppercase tracking-[0.3em] lg:tracking-[0em] font-mono">
                                {displayText}<span className="animate-blink border-r-4 border-current ml-1" />
                            </p>
                        </div>

                        <p className="hero-description text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
                            From concept to code — I design and build digital products people love to use.
                        </p>
                    </div>

                    <div className="hero-btns flex flex-wrap justify-center lg:justify-start gap-6 pt-6">
                        <a
                            href="#projects"
                            className="px-6 py-4 rounded-2xl bg-foreground text-background hover:scale-105 active:scale-95 font-bold uppercase border border-black/5  dark:border-white/5 bg-purple-600 dark:bg-purple-500 text-white tracking-widest text-[10px] md:text-[13px] transition-all flex items-center gap-3 group shadow-2xl shadow-purple-500/10"
                        >
                            Explore Works <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/Front-End Developer Resume.pdf"
                            download
                            className="px-6 py-4 rounded-2xl bg-blue-600 dark:bg-blue-400 text-white border border-black/5  dark:border-white/5 hover:border-purple-500/30 hover:scale-105 active:scale-95 font-bold uppercase tracking-widest text-[10px] md:text-[13px]  transition-all flex items-center gap-3 group shadow-xl shadow-purple-500/5"
                        >
                            Resume <ArrowRight size={18} className="rotate-90 group-hover:translate-y-1 transition-transform" />
                        </a>

                        <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-0">
                            {[
                                { icon: Github, href: "https://github.com/Rika4698", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/sharmin-rika-2b17a42b4/", label: "LinkedIn" },
                                { icon: Mail, href: "mailto:rika_cse_1819@istt.edu.bd", label: "Email" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank" rel="noopener noreferrer"
                                    className="p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-purple-500/20 dark:bg-white/20 hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/30 transition-all text-muted-foreground shadow-xl shadow-purple-500/5"
                                    aria-label={social.label}
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center relative  mt-0 lg:-mt-56 xl:mt-0">
                    {/* Abstract background decor */}
                    <div className="absolute -inset-20 bg-gradient-to-tr from-purple-500/10 to-transparent blur-[100px] -z-10" />

                    <div ref={imageRef} className="relative w-56 h-56 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full group ">
                        <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-10 dark:opacity-20 group-hover:opacity-25 transition-opacity duration-1000" />

                        <div className="relative w-full h-full rounded-full overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl bg-purple-400/50 dark:bg-white/5 backdrop-blur-sm">
                            <Image
                                src="https://i.ibb.co.com/60xWLW5r/profiles.png"
                                alt="Sharmin Akter Reka"
                               
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 "
                                priority
                            />
                        </div>

                        {/* Floating elements */}
                        {/* <div className="absolute top-0 -right-8 p-6 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 rounded-3xl shadow-2xl animate-float">
                            <span className="text-4xl">🚀</span>
                        </div> */}
                        <div className="absolute bottom-10 -left-8 p-3.5 md:p-6 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 rounded-3xl shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                            <span className="text-4xl">💻</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
