"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false)
        });

        tl.to(".loader-text", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        })
            .to(".loader-progress", {
                width: "100%",
                duration: 1.5,
                ease: "power2.inOut"
            }, "-=0.5")
            .to(".loader-container", {
                y: "-100%",
                duration: 1,
                ease: "power4.inOut",
                delay: 0.5
            });

        // Prevent scrolling while loading
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div className="loader-container fixed inset-0 z-[100] bg-white dark:bg-gray-950 flex flex-col items-center justify-center overflow-hidden px-4">
            <div className="space-y-4 text-center w-full max-w-full">
                <div className="overflow-hidden">
                    <h1 className="loader-text text-xl sm:text-2xl md:text-5xl font-black text-purple-700 dark:text-purple-500 tracking-tighter opacity-0 translate-y-full uppercase truncate px-2">
                        <span className="hidden sm:inline">SHARMIN AKTER REKA</span>
                        <span className="sm:hidden">SHARMIN AKTER REKA</span>
                        <span className="text-purple-700 dark:text-purple-500">.</span>
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <p className="loader-text text-muted-foreground tracking-[0.2em] sm:tracking-[0.4em] font-black text-[9px] sm:text-[10px] uppercase opacity-0 translate-y-full text-black dark:text-white">
                        Initializing Experience
                    </p>
                </div>
                <div className="w-48 sm:w-64 md:w-full max-w-md mx-auto h-1 bg-black/5 dark:bg-white/5 rounded-full mt-8 sm:mt-12 relative overflow-hidden">
                    <div className="loader-progress absolute left-0 top-0 h-full w-0 bg-purple-700 dark:bg-purple-500 rounded-full shadow-lg shadow-purple-600/20" />
                </div>
            </div>
        </div>
    );
}