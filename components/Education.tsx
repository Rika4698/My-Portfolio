/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, LucideIcon, X } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    status: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    result?: string;
    certificateUrl?: string;
}

const educationData: { category: string; items: EducationItem[] }[] = [
    {
        category: "Academic",
        items: [
            {
                degree: "B.Sc. in Computer Science & Engineering",
                institution: "Institute Of Science Trade & Technology (ISTT)",
                location: "Mirpur-13, Dhaka",
                period: "2019 – 2025",
                result: "CGPA: ",
                status: "Result Published: Jan 2025",
                icon: GraduationCap,
                color: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-500/10 dark:bg-purple-500/5",
            }
        ]
    },
    {
        category: "Professional Courses",
        items: [
            {
                degree: "Complete Web Development Course",
                institution: "Programming Hero",
                location: "Online",
                period: "2023",
                status: "Certified",
                certificateUrl: "https://i.ibb.co.com/nqg35Y15/PH-certificate.jpg", // Replace with actual certificate URL
                icon: Award,
                color: "text-emerald-600 dark:text-emerald-400",
                bg: "bg-emerald-500/10 dark:bg-emerald-500/5",
            },
            {
                degree: "Next Level Web Development Course",
                institution: "Programming Hero",
                location: "Online",
                period: "2025",
                status: "Certified",
                certificateUrl: "https://i.ibb.co.com/mFY56n4p/PH2-certificate.png", // Replace with actual certificate URL
                icon: Award,
                color: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-500/10 dark:bg-blue-500/5",
            }
        ]
    }
];

export function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
    const animationsInitialized = useRef(false);

    useEffect(() => {
        if (animationsInitialized.current) return;
        animationsInitialized.current = true;

        const ctx = gsap.context(() => {
            // Header Animation - Simplified and smoother
            gsap.from(".edu-header", {
                scrollTrigger: {
                    trigger: ".edu-header",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            // Card Animation - Simplified without excessive delays
            const cards = gsap.utils.toArray(".edu-card");
            cards.forEach((card: any, idx) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    delay: idx * 0.1,
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
        <>
            <section id="education" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-secondary/20 dark:bg-[#020617]">
                {/* Background elements */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

                <div className="max-w-5xl mx-auto">
                    <div className="edu-header text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/20 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-lg shadow-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] font-black uppercase tracking-[0.3em]">
                            <GraduationCap size={14} /> Academic
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-black/20  dark:from-white dark:to-white/20">
                            Education & <span className="text-purple-700 dark:text-purple-600">Courses.</span>
                        </h2>
                    </div>

                    <div className="grid gap-16">
                        {educationData.map((section, sectionIdx) => (
                            <div key={sectionIdx} className="space-y-8">
                                <h3 className="text-xl font-black uppercase tracking-widest text-muted-foreground pl-4 border-l-4 border-purple-600 ">
                                    {section.category}
                                </h3>

                                <div className="grid gap-6">
                                    {section.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`edu-card group relative p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border-2 border-black/5 dark:border-white/5 hover:border-purple-700 dark:hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-1 ${
                                                item.certificateUrl ? 'cursor-pointer' : ''
                                            }`}
                                            onClick={() => item.certificateUrl && setSelectedCertificate(item.certificateUrl)}
                                        >
                                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                                    <item.icon size={32} />
                                                </div>

                                                <div className="flex-grow space-y-4">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <h3 className="text-2xl font-black tracking-tight text-foreground/90 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                            {item.degree}
                                                            {item.certificateUrl && (
                                                                <ExternalLink className="inline-block ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            )}
                                                        </h3>
                                                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary dark:bg-white/5 text-xs font-black uppercase tracking-wider text-muted-foreground w-fit">
                                                            <Calendar size={14} />
                                                            {item.period}
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="text-lg font-bold text-foreground/70 flex items-center gap-2">
                                                            {item.institution}
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
                                                            <div className="flex items-center gap-2">
                                                                <MapPin size={16} className="text-purple-500" />
                                                                {item.location}
                                                            </div>
                                                            {/* {item.result && (
                                                                <div className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                                    {item.result}
                                                                </div>
                                                            )} */}
                                                            {item.status && (
                                                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider">
                                                                    {item.status}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {item.certificateUrl && (
                                                        <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1 mt-2">
                                                            Click to view certificate
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div 
                        className="relative max-w-3xl w-full bg-white dark:bg-gray-900 rounded-3xl p-4 shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
                            aria-label="Close certificate"
                        >
                            <X size={24} />
                        </button>
                        <div className="w-full h-[70vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                            <Image
                                src={selectedCertificate}
                                width={500}
                                height={500}
                                alt="Certificate"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}