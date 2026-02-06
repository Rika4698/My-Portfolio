/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
    Code2, Server, Wrench, Lightbulb, Sparkles,
    MessageSquare, Users, Brain, Clock, Target
} from "lucide-react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
    SiGithub, SiPostman, SiVercel, SiFigma, SiPrisma, SiBootstrap, SiFirebase, SiRender
} from "react-icons/si";
import { LayoutGrid } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        skills: [
            { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
            { name: "ShadCN UI", icon: LayoutGrid, color: "text-violet-600" },
            { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
            { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-[#F7DF1E]" },
            { name: "HTML5 / CSS3", icon: SiHtml5, color: "text-[#E34F26]" },
        ],
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-500/10 dark:bg-blue-500/5",
        border: "hover:border-blue-500/50 dark:hover:border-blue-300/50"
    },
    {
        title: "Backend Development",
        icon: Server,
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
            { name: "Express.js", icon: SiExpress, color: "text-black dark:text-white" },
            { name: "Next Auth", icon: RiShieldKeyholeLine, color: "text-[#A855F7]" },
            { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
            { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748] dark:text-white" },
            { name: "REST APIs", icon: TbApi, color: "text-[#FF5733]" },
        ],
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-500/10 dark:bg-emerald-500/5",
        border: "hover:border-emerald-500/50 dark:hover:border-emerald-300/50"
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        skills: [
            { name: "Git / GitHub", icon: SiGithub, color: "text-[#F05032]" },
            { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
            { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
            { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
            { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
            { name: "Render", icon: SiRender, color: "text-[#46E3B7]" },
            { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
        ],
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-500/10 dark:bg-orange-500/5",
        border: "hover:border-orange-500/50 dark:hover:border-orange-300/50"
    },
    {
        title: "Soft Skills",
        icon: Lightbulb,
        skills: [
            { name: "Communication", icon: MessageSquare, color: "text-purple-500" },
            { name: "Teamwork", icon: Users, color: "text-blue-500" },
            { name: "Problem Solving", icon: Brain, color: "text-pink-500" },
            { name: "Time Management", icon: Clock, color: "text-orange-500" },
            { name: "Leadership", icon: Target, color: "text-red-500" },
        ],
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-500/10 dark:bg-purple-500/5",
        border: "hover:border-purple-500/50 dark:hover:border-purple-300/50"
    }
];

export function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const animationsInitialized = useRef(false);

    useEffect(() => {
        if (animationsInitialized.current) return;
        animationsInitialized.current = true;

        const ctx = gsap.context(() => {
            // Header Animation - Simplified and smoother
            gsap.from(".skill-header", {
                scrollTrigger: {
                    trigger: ".skill-header",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            // Card Entrance Animation - Simplified without floating
            const cards = gsap.utils.toArray(".skill-card");
            cards.forEach((card: any, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: "power3.out"
                });

                // Skill Items Animation inside each card
                const items = card.querySelectorAll(".skill-item");
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    x: -15,
                    opacity: 0,
                    stagger: 0.04,
                    duration: 0.4,
                    delay: 0.3 + (i * 0.1),
                    ease: "power2.out"
                });
            });

        }, sectionRef);

        return () => {
            ctx.revert();
            animationsInitialized.current = false;
        };
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-32 px-6 relative bg-secondary/30 dark:bg-[#020617]/50">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="skill-header text-center mb-24 space-y-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/20 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-lg shadow-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-black uppercase tracking-[0.3em]">
                        <Sparkles size={14} /> Technical Arsenal
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-black/20  dark:from-white dark:to-white/20">
                        My <span className="text-purple-700 dark:text-purple-600">Expertise.</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        A curated collection of the technologies and tools I use to create exceptional digital experiences.
                    </p>
                </div>

                <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`skill-card group px-2 py-4 lg:p-10 rounded-xl lg:rounded-[2.5rem] bg-purple-100/90 dark:bg-purple-950/20 backdrop-blur-xl border-2 border-white/20 dark:border-white/5 ${category.border} transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 p-32 rounded-full ${category.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                <div className={`w-16 h-16 rounded-2xl bg-secondary dark:bg-white/5 flex items-center justify-center ${category.color} shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <category.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground/90">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {category.skills.map((skill: any, i) => (
                                    <div
                                        key={i}
                                        className="skill-item flex items-center gap-3 p-3 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default group/item"
                                    >
                                        <div className={`p-2 rounded-lg bg-secondary dark:bg-white/5 ${skill.color} group-hover/item:scale-110 transition-transform duration-300`}>
                                            <skill.icon size={18} />
                                        </div>
                                        <span className="font-bold text-sm lg:text-lg text-foreground/80 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}