/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Github, Layers, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import image1 from "../public/projects/eshop.png";
import image2 from "../public/projects/delivo.png";
import image3 from "../public/projects/surveyswift.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "EShop",
        subtitle: "Modern E-Commerce Platform",
        description: "A multi-vendor e-commerce platform built with real-time inventory, advanced filtering, and secure payments. Features role-based access control for Customers, Vendors, and Admins.",
        features: ["JWT Auth & RBAC", "Product Management with Image Uploads", "Payment Gateway Integration"],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Vercel", "Redux Toolkit", "Nodemailer"],
        links: {
            live: "https://eshop-frontend-website.vercel.app/",
            client: "https://github.com/Rika4698/eShop-Frontend-Website",
            server: "https://github.com/Rika4698/eShop-Backend-Website"
        },
        image: image1
    },
    {
        title: "Delivo",
        subtitle: "Delivery Management System",
        description: "A role-based web application facilitating secure and efficient parcel delivery management. Includes tracking, status updates, and proper delivery workflows.",
        features: ["Role-based Access (Admin, Sender, Receiver)", "Real-time Parcel Tracking", "Status Update Workflow"],
        tech: ["React.js", "ShadCN UI", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Redux Toolkit", "Render", "Vercel"],
        links: {
            live: "https://delivo-beryl.vercel.app/",
            client: "https://github.com/Rika4698/Parcel-Delivery-API-Frontend",
            server: "https://github.com/Rika4698/Parcel-Delivery-API-Backend"
        },
        image: image2
    },
    {
        title: "Survey Swift",
        subtitle: "Survey & Polling Application",
        description: "A comprehensive survey platform designed to streamline survey operations. Includes dashboard analytics, admin verification, and secure payments.",
        features: ["Admin Verification System", "Stripe Payment Integration", "TanStack Query Data Fetching"],
        tech: ["React.js", "TanStack Query", "Node.js", "Tailwind CSS", "Express.js",  "Firebase"],
        links: {
            live: "https://polling-and-survey-client.web.app/",
            client: "https://github.com/Rika4698/polling-and-survey-application-client",
            server: "https://github.com/Rika4698/polling-and-surveys-application-server"
        },
        image: image3
    }
];

const techColors: { [key: string]: string } = {
    "React.js": "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20",
    "React": "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20",
    "Next.js": "text-black dark:text-white bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10",
    "TypeScript": "text-[#3178C6] bg-[#3178C6]/10 border-[#3178C6]/20",
    "Node.js": "text-[#339933] bg-[#339933]/10 border-[#339933]/20",
    "Express.js": "text-black dark:text-white bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10",
    "PostgreSQL": "text-[#4169E1] bg-[#4169E1]/10 border-[#4169E1]/20",
    "Prisma": "text-[#2D3748] dark:text-white bg-[#2D3748]/10 dark:bg-white/10 border-[#2D3748]/20 dark:border-white/20",
    "Vercel": "text-black dark:text-white bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10",
    "Redux Toolkit": "text-[#764ABC] bg-[#764ABC]/10 border-[#764ABC]/20",
    "Nodemailer": "text-[#22B8CF] bg-[#22B8CF]/10 border-[#22B8CF]/20",
    "MongoDB": "text-[#47A248] bg-[#47A248]/10 border-[#47A248]/20",
    "Mongoose": "text-[#880000] dark:text-[#E8D44D] bg-[#880000]/10 dark:bg-[#E8D44D]/10 border-[#880000]/20 dark:border-[#E8D44D]/20",
    "Render": "text-[#46E3B7] bg-[#46E3B7]/10 border-[#46E3B7]/20",
    "Tailwind CSS": "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/20",
    "Firebase": "text-[#FFCA28] bg-[#FFCA28]/10 border-[#FFCA28]/20",
    "TanStack Query": "text-[#FF4154] bg-[#FF4154]/10 border-[#FF4154]/20",
    "Axios": "text-[#5A29E4] bg-[#5A29E4]/10 border-[#5A29E4]/20",
    "Zustand": "text-[#443E38] dark:text-[#f8cbe8] bg-[#443E38]/10 dark:bg-[#f8cbe8]/10 border-[#443E38]/20 dark:border-[#f8cbe8]/20"
};

export function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const animationsInitialized = useRef(false);

    useEffect(() => {
        if (animationsInitialized.current) return;
        animationsInitialized.current = true;

        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(".proj-header", {
                scrollTrigger: {
                    trigger: ".proj-header",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            // Project Card Animation - Without tech tags animation
            const cards = gsap.utils.toArray(".project-card");
            cards.forEach((card: any) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

        }, sectionRef);

        return () => {
            ctx.revert();
            animationsInitialized.current = false;
        };
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 px-6 relative bg-white dark:bg-[#020617]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="proj-header text-center mb-24 space-y-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/20 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-lg shadow-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-black uppercase tracking-[0.3em]">
                        <Layers size={14} /> Masterpieces
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-black/20  dark:from-white dark:to-white/20">
                        Featured <span className="text-purple-700 dark:text-purple-600">Projects.</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore a selection of my best work, demonstrating my ability to solve complex problems with elegant code.
                    </p>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`project-card flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 xl:gap-20 items-center`}
                        >
                            {/* Project Visual */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 rotate-3 md:rotate-6 scale-95 group-hover:rotate-1 md:group-hover:rotate-3 group-hover:scale-100 transition-all duration-500 -z-10" />
                                <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-black/5 dark:border-white/5 bg-purple-100 dark:bg-purple-950/20">
                                    <div className="relative w-full aspect-[16/9.5] mt-4">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            priority={i === 0}
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 gap-3 md:gap-4">
                                            <a 
                                                href={project.links.client} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider text-[10px] md:text-xs hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                                            >
                                                <Github size={14} className="md:w-4 md:h-4" /> Client
                                            </a>
                                            <a 
                                                href={project.links.server}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider text-[10px] md:text-xs hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                                            >
                                                <Github size={14} className="md:w-4 md:h-4" /> Server
                                            </a>
                                            <a 
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-purple-600 text-white font-bold uppercase tracking-wider text-[10px] md:text-xs hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                                            >
                                                <ExternalLink size={14} className="md:w-4 md:h-4" /> Live
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <span className="text-6xl md:text-8xl font-black text-black/5 dark:text-white/5">
                                            0{i + 1}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl wh font-black uppercase tracking-tight leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-xl font-bold text-purple-600 dark:text-purple-400 font-mono">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                                    {project.description}
                                </p>

                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-foreground/80">Key Features</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-medium text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Tags - NO ANIMATION CLASS */}
                                <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                                    {project.tech.map((tag, idx) => {
                                        const colorClass = techColors[tag] || "text-foreground/70 bg-secondary dark:bg-white/5 border-black/5 dark:border-white/5";
                                        return (
                                            <span 
                                                key={idx} 
                                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl border ${colorClass} text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 cursor-default`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="pt-4 md:pt-6 flex items-center gap-4">
                                    <a 
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 md:gap-3 text-base md:text-lg font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500 transition-colors"
                                    >
                                        Live Preview
                                        <ArrowUpRight strokeWidth={3} size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}