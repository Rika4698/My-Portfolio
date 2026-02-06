"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Rocket, ShieldCheck, Zap, Heart, Target, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
    {
        icon: Rocket,
        title: "Adaptive Learner",
        description: "Continuously adapting to evolving technologies, with a focus on modern web development practices and industry trends.",
        color: "text-orange-600 dark:text-orange-400"
    },
    {
        icon: ShieldCheck,
        title: "Clean Code",
        description: "Excellence in writing maintainable, scalable, and highly optimized code architectures.",
        color: "text-emerald-600 dark:text-emerald-400"
    },
    {
        icon: Zap,
        title: "UI/UX Focused",
        description: "Proficient in designing responsive, accessible, and user-centric web interfaces that balance functionality with aesthetics.",
        color: "text-blue-600 dark:text-blue-400"
    },
    {
        icon: Target,
        title: "Team-oriented",
        description: "Excellent communication skills and ability to work collaboratively in team environments while meeting deadlines.",
        color: "text-purple-600 dark:text-purple-400"
    }
];

export function WhyHireMe() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".why-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom-=100",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            cardRefs.current.forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse",
                    },
                    y: 60,
                    opacity: 0,
                    scale: 0.95,
                    duration: 1,
                    delay: i * 0.1,
                    ease: "power4.out"
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hire-me" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="why-header text-center mb-24 space-y-6">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Heart size={14} /> Commitment to Excellence
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-black/20  dark:from-white dark:to-white/20">
                        Why Choose <span className="text-purple-700 dark:text-purple-600">Me?</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-bold text-lg max-w-2xl mx-auto">
                        Combining technical expertise with a creative mindset to deliver high-impact digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strengths.map((item, idx) => (
                        <div
                            key={idx}
                            ref={(el) => { if (el) cardRefs.current[idx] = el; }}
                            className="group p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border-2 border-black/5 dark:border-white/5 hover:border-purple-700 dark:hover:border-purple-500  transition-all duration-500 flex flex-col items-center text-center shadow-xl shadow-purple-500/5 hover:shadow-2xl dark:shadow-none relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className={`w-16 h-16 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-sm mb-10`}>
                                <item.icon size={32} />
                            </div>

                            <h3 className="text-2xl font-black mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors uppercase tracking-tight relative z-10">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed  relative z-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Stats */}
                {/* <div className="mt-24 p-12 md:p-16 rounded-[4rem] bg-secondary/40 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-sm flex flex-col md:flex-row items-center justify-around gap-12 text-center shadow-xl shadow-purple-500/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="space-y-3 relative z-10">
                        <p className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">2+</p>
                        <p className="text-purple-600 dark:text-purple-400 font-black text-[10px] uppercase tracking-[0.4em]">Years Exp</p>
                    </div>
                    <div className="w-px h-16 bg-black/10 dark:bg-white/10 hidden md:block" />
                    <div className="space-y-3 relative z-10">
                        <p className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">20+</p>
                        <p className="text-purple-600 dark:text-purple-400 font-black text-[10px] uppercase tracking-[0.4em]">Projects</p>
                    </div>
                    <div className="w-px h-16 bg-black/10 dark:bg-white/10 hidden md:block" />
                    <div className="space-y-3 relative z-10">
                        <p className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">100%</p>
                        <p className="text-purple-600 dark:text-purple-400 font-black text-[10px] uppercase tracking-[0.4em]">Passion</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
