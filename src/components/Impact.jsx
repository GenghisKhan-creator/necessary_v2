import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 5000, label: "LIVES IMPACTED", suffix: "+" },
    { value: 12, label: "REGIONAL AWARDS", suffix: "" },
    { value: 85, label: "SCHOLARSHIPS", suffix: "" },
    { value: 200, label: "ACTIVE LEADERS", suffix: "+" },
];

const Impact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            stats.forEach((_, i) => {
                const target = { val: 0 };
                const el = document.getElementById(`stat-${i}`);

                gsap.to(target, {
                    val: stats[i].value,
                    duration: 3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    onUpdate: () => {
                        if (el) el.innerText = Math.round(target.val).toLocaleString();
                    },
                });
            });

            // Advanced line animation
            gsap.from(".divider-line", {
                scaleY: 0,
                opacity: 0,
                duration: 1.5,
                stagger: 3 / stats.length, // synced with number animation
                transformOrigin: "top",
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            // Reveal stat labels
            gsap.from(".stat-content", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Subtle parallax for background text
            gsap.to(".bg-parallax-text", {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="impact" ref={containerRef} className="py-40 bg-primary border-y border-white/5 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-content relative group p-12 flex flex-col items-center lg:items-start overflow-hidden">
                            {/* Vertical divider for large screens */}
                            {idx !== 0 && (
                                <div className="divider-line hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/10"></div>
                            )}

                            <div className="flex items-baseline mb-6">
                                <span
                                    id={`stat-${idx}`}
                                    className="text-6xl md:text-8xl font-display text-white leading-none tracking-tighter"
                                >
                                    0
                                </span>
                                <span className="text-4xl md:text-5xl font-display text-secondary ml-1 opacity-0 animate-fade-in delay-700">
                                    {stat.suffix}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="h-[2px] w-8 bg-secondary/30 group-hover:w-16 group-hover:bg-secondary transition-all duration-700"></div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white/60 transition-colors">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Corner highlight */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Accent Text with Scrubbed Parallax */}
            <div className="bg-parallax-text absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none hidden sm:block">
                <span className="text-[25vw] font-display leading-none tracking-tighter">RESTORATION / IMPACT / VOICES</span>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full"></div>
        </section>
    );
};

export default Impact;
