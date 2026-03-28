"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Play } from "lucide-react";
import Image from "next/image";

const TYPE_ROLES = [
    "Full-Stack Developer",
    "Front-End Developer",
    "MERN Stack Developer",
    "Junior Web Developer"
];

const HackerRankIcon = ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 11.885 0 13S13.287 24 12 24C10.712 24 2.25 19.114 1.608 18 .963 16.885.963 6.115 1.608 5S10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .258-.115.258-.258 0-.094-.05-.172-.124-.218L9.356 5.126a.259.259 0 0 0-.131-.037c-.141 0-.258.115-.258.258v.258H7.505c-.141 0-.258.115-.258.258v12.276c0 .141.115.258.258.258H8.967v.258c0 .141.115.258.258.258.047 0 .09-.013.128-.036l1.441-1.311a.256.256 0 0 0 .127-.222c0-.141-.115-.258-.258-.258h-.7v-3.875h4.074v3.746h-.701c-.141 0-.258.115-.258.258 0 .094.05.172.124.218l1.441 1.311c.038.023.081.036.128.036.141 0 .258-.115.258-.258v-.258h1.463c.141 0 .258-.115.258-.258V5.863c0-.141-.115-.258-.258-.258h-1.463v-.258c0-.141-.115-.258-.258-.258-.047 0-.09.013-.128.036L14.42 6.436a.256.256 0 0 0-.124.105.256.256 0 0 0-.001.258z" />
    </svg>
);

/*
  Blob lives in a 500×540 viewBox.
  OUTER  = the visible stroke border (slightly larger)
  INNER  = the clip-path applied to the image (slightly inset)

  Shape matches reference: wide+rounded top-left, gentle right taper,
  soft bottom with slight right lean — like a guitar pick / teardrop rotated.
*/
const VW = 500;
const VH = 540;

const BLOB_BORDER = `
  M 250 22
  C 360 10, 468 80, 474 200
  C 480 310, 430 420, 336 474
  C 292 498, 248 506, 210 494
  C 150 474, 66 416, 34 318
  C 6 230, 24 110, 108 56
  C 148 32, 196 26, 250 22 Z
`.trim();

const BLOB_IMAGE = `
  M 250 36
  C 354 24, 454 90, 460 204
  C 466 312, 418 416, 328 468
  C 286 490, 244 498, 208 486
  C 150 468, 72 412, 44 318
  C 18 232, 36 116, 116 64
  C 154 40, 200 34, 250 36 Z
`.trim();

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef   = useRef<HTMLDivElement>(null);
    const imageRef     = useRef<HTMLDivElement>(null);

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText]           = useState("");
    const [isDeleting, setIsDeleting]             = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
            tl.from(".hero-badge",       { y: -20, opacity: 0, duration: 1, delay: 0.5 })
              .from(".hero-title-line",  { y: 100, skewY: 10, opacity: 0, duration: 1.2, stagger: 0.2 }, "-=0.8")
              .from(".hero-description", { y: 40,  opacity: 0, duration: 1, stagger: 0.1 }, "-=0.8")
              .from(".hero-btns",        { y: 30,  opacity: 0, duration: 1 }, "-=0.8")
              .from(imageRef.current,    { scale: 0.85, opacity: 0, duration: 1.5, ease: "expo.out" }, "-=1.5");
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = TYPE_ROLES[currentRoleIndex];
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length === currentRole.length) setTimeout(() => setIsDeleting(true), 1500);
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((p) => (p + 1) % TYPE_ROLES.length);
                }
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <section
            id="/"
            ref={containerRef}
            className="min-h-screen flex flex-col justify-center px-4 sm:px-6 relative overflow-hidden pt-24 pb-16"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full relative z-10">

                {/* ── Text ── */}
                <div ref={contentRef} className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
                    <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 shadow-xl shadow-purple-500/5 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mx-auto lg:mx-0">
                        <Sparkles size={14} className="animate-pulse" /> Available for New Projects
                    </div>

                    <div className="space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                                <span className="hero-title-line block">SHARMIN</span>
                                <span className="hero-title-line block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400">
                                    AKTER REKA
                                </span>
                            </h1>
                        </div>

                        <div className="hero-description h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 font-extrabold uppercase tracking-widest font-mono">
                                {displayText}<span className="animate-blink border-r-4 border-current ml-1" />
                            </p>
                        </div>

                        <p className="hero-description text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                            From concept to code — I design and build digital products people love to use.
                        </p>
                    </div>

                    <div className="hero-btns flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                        <a href="#projects" className="px-5 py-3.5 rounded-2xl hover:scale-105 active:scale-95 font-bold uppercase border border-black/5 dark:border-white/5 bg-purple-600 dark:bg-purple-500 text-white tracking-widest text-[11px] transition-all flex items-center gap-2 group shadow-2xl shadow-purple-500/10">
                            Explore Works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/Full Stack Developer Resume.pdf" download className="px-5 py-3.5 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white border border-black/5 dark:border-white/5 hover:scale-105 active:scale-95 font-bold uppercase tracking-widest text-[11px] transition-all flex items-center gap-2 group shadow-xl">
                            Resume <ArrowRight size={16} className="rotate-90 group-hover:translate-y-1 transition-transform" />
                        </a>

                        <div className="w-full flex items-center justify-center lg:justify-start gap-3 mt-1">
                            {[
                                { icon: Github,         href: "https://github.com/Rika4698",                          label: "GitHub" },
                                { icon: Linkedin,       href: "https://www.linkedin.com/in/sharmin-rika-2b17a42b4/", label: "LinkedIn" },
                                { icon: Mail,           href: "mailto:rekasharmin46@gmail.com",                       label: "Email" },
                                { icon: HackerRankIcon, href: "https://www.hackerrank.com/profile/sharmin_rika",     label: "HackerRank" },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="p-3.5 rounded-2xl border border-black/5 dark:border-white/5 bg-purple-500/20 dark:bg-white/20 hover:scale-110 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/30 transition-all text-muted-foreground shadow-lg"
                                    aria-label={s.label}>
                                    <s.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Blob image — fluid width, SVG handles all scaling ── */}
                <div className="order-1 lg:order-2 flex justify-center items-center relative py-6 lg:py-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent blur-[80px] -z-10 rounded-full " />

                    {/*
                      The entire blob — border, image clip, badges, play button —
                      lives inside ONE responsive SVG foreignObject + SVG combo.

                      We use a wrapper div that is fluid (max 460px, 85vw on mobile).
                      Inside: an <svg> for the border strokes, and a sibling div for
                      the image (clipped with an inline SVG clipPath).
                    */}
                    <div
                        ref={imageRef}
                        className="relative mx-auto animate-float"
                        style={{ width: "min(85vw, 460px)", aspectRatio: `${VW}/${VH}` }}
                    >
                        {/* ── Border rings (SVG, scales 100%) ── */}
                        <svg
                            viewBox={`0 0 ${VW} ${VH}`}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                        >
                            <defs>
                                <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%"   stopColor="#f472b6" />
                                    <stop offset="40%"  stopColor="#a855f7" />
                                    <stop offset="75%"  stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                            </defs>
                            {/* Outer gradient stroke */}
                            <path d={BLOB_BORDER} stroke="url(#bg1)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Inner dashed accent */}
                            {/* <path d={BLOB_BORDER} stroke="#c084fc" strokeWidth="1.5" fill="none"
                                strokeDasharray="10 14" strokeLinecap="round"
                                transform={`translate(${VW / 2},${VH / 2}) scale(0.93) translate(-${VW / 2},-${VH / 2})`}
                                opacity="0.45"
                            /> */}
                        </svg>

                        {/* ── Image clipped to blob ── */}
                        {/*
                          clipPath with an inline SVG that uses the same coordinate space.
                          We define the clipPath in a hidden <svg> and reference it.
                        */}
                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                                    {/*
                                      Convert path to 0-1 space: divide all coords by VW (x) and VH (y).
                                      BLOB_IMAGE coords in 500×540 space → divide x/500, y/540
                                    */}
                                    <path d="
                                      M 0.500 0.067
                                      C 0.708 0.044, 0.908 0.167, 0.920 0.378
                                      C 0.932 0.578, 0.836 0.770, 0.656 0.867
                                      C 0.572 0.907, 0.488 0.922, 0.416 0.900
                                      C 0.300 0.867, 0.144 0.763, 0.088 0.589
                                      C 0.036 0.430, 0.072 0.215, 0.232 0.119
                                      C 0.308 0.074, 0.400 0.063, 0.500 0.067 Z
                                    " />
                                </clipPath>
                            </defs>
                        </svg>

                        <div
                            className="absolute group overflow-hidden"
                            style={{
                                inset: "2%",
                                clipPath: "url(#blobClip)",
                                background: "linear-gradient(135deg,rgba(244,114,182,.18),rgba(99,102,241,.18))",
                            }}
                        >
                            {/* Subtle pink top-left wash — exactly like reference */}
                            <div
                                className="absolute inset-0 z-10 pointer-events-none"
                                style={{
                                    background: "linear-gradient(145deg,rgba(244,114,182,.28) 0%,transparent 45%)",
                                }}
                            />
                            <Image
                                src="https://i.ibb.co.com/60xWLW5r/profiles.png"
                                alt="Sharmin Akter Reka"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 85vw, 460px"
                                priority
                            />
                        </div>

                        {/* ── Play button — positioned at blob bottom-center ── */}
                        {/* <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 z-20">
                            <button
                                className="flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-purple-600/40"
                                style={{ width: "clamp(40px, 11%, 56px)", height: "clamp(40px, 11%, 56px)" }}
                                aria-label="Play intro video"
                            >
                                <Play className="text-white fill-white" style={{ width: "40%", height: "40%", marginLeft: "5%" }} />
                            </button>
                        </div> */}

                        {/* ── HackerRank badge (right side) ── */}
                                                <a
                            href="https://www.hackerrank.com/profile/sharmin_rika"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 p-2 md:p-3 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 rounded-2xl shadow-2xl hover:scale-110 transition-transform animate-float"
                            style={{ animationDelay: "1s" }}
                            title="HackerRank Profile"
                        >
                            <span
                                className="flex items-center justify-center w-6 md:w-10 h-6 md:h-10 rounded-sm md:rounded-xl text-white"
                                style={{ background: "linear-gradient(135deg, #00EA64, #00b050)" }}
                            >
                                <HackerRankIcon size={22} />
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-green-500">
                                HackerRank
                            </span>
                        </a>

                        {/* ── Laptop badge (left side) ── */}
                         <div
                            className="absolute bottom-10 md:bottom-14 -left-0  p-2  md:p-6 bg-white dark:bg-slate-900 border border-black/5 dark:border-white/5 rounded-3xl shadow-2xl animate-float"
                            style={{ animationDelay: "2s" }}
                        >
                            <span className="text-4xl">💻</span>
                        </div>

                        {/* ── Decorative dots ── */}
                        <span className="absolute top-[6%]  right-[8%]  w-2.5 h-2.5 rounded-full bg-pink-400   opacity-70 animate-float" />
                        <span className="absolute top-[16%] left-[-1%] w-2   h-2   rounded-full bg-purple-400 opacity-55" />
                        <span className="absolute bottom-[28%] right-[1%] w-2 h-2   rounded-full bg-indigo-400 opacity-55 animate-float" />
                    </div>
                </div>

            </div>
        </section>
    );
}