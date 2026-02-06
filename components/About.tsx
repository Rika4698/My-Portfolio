/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { User, Sparkles } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                x: -50,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
            });

            gsap.from(".about-reveal", {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ">
                    <div ref={imageRef} className="relative  group mt-0 lg:-mt-[300px] xl:mt-0  ">
                        <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-[4rem] blur-[80px] opacity-10 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-700 " />

                        <div className="relative aspect-square rounded-[4rem] overflow-hidden border-2 border-black/5 dark:border-white/5 shadow-2xl bg-blue-400/50 dark:bg-white/5 backdrop-blur-sm ">
                            <Image
                                src="https://i.ibb.co.com/60xWLW5r/profiles.png"
                                alt="About Sharmin Akter Reka"
                                fill
                                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105"
                            />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute -bottom-8 -right-8 p-8 bg-white dark:bg-[#0f172a] border border-black/5 dark:border-white/5 rounded-[3rem] shadow-2xl animate-float">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    <Sparkles size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Academy</p>
                                    <p className="text-sm font-black uppercase text-foreground">B.Sc. in CSE </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={textRef} className="space-y-12 ">
                        <div className="space-y-8 text-center lg:text-start">
                            <div className="about-reveal inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 shadow-sm text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                <User size={14} /> The Journey
                            </div>
                            <h2 className="about-reveal text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400">Me.</span>
                            </h2>
                            <p className="about-reveal text-xl text-muted-foreground leading-relaxed font-bold text-left">
                                 I'm Sharmin Akter Reka, a passionateFull-Stack Developer with a strong foundation in building responsive, scalable, and user-focused web applications. I specialize in React, Next.js, and modern technologies to create clean, high-performance interfaces. I enjoy solving real-world problems through efficient code, thoughtful design, and continuous learning. My goal is to deliver reliable software that provides both great user experience and business value.
                            </p>
                        </div>

                        <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 gap-10 ">
                            <div className="group p-8 rounded-[2.5rem] bg-secondary/40 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-xl shadow-purple-500/5">
                                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-8 border-b border-black/5 dark:border-white/5 pb-4">Background</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0 shadow-lg shadow-purple-600/40" />
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-foreground">ISTT, Dhaka</p>
                                            <p className="text-[10px] font-bold text-muted-foreground mt-1">Undergraduate Studies (2019-2025)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="group p-8 rounded-[2.5rem] bg-secondary/40 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-xl shadow-purple-500/5">
                                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-8 border-b border-black/5 dark:border-white/5 pb-4">Communication</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0 shadow-lg shadow-purple-600/40" />
                                        Bangla (Native)
                                    </li>
                                    <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-600 flex-shrink-0 shadow-lg shadow-purple-600/40" />
                                        English (Fluent)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
