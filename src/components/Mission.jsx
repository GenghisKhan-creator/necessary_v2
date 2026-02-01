import React from "react";
import { useGsapReveal, useGsapParallax } from "../hooks/useGsap";

const Mission = () => {
    const titleRef = useGsapReveal({ y: 50, stagger: 0.1 });
    const textRef = useGsapReveal({ y: 30, delay: 0.2 });
    const statsRef = useGsapReveal({ y: 40, stagger: 0.2, delay: 0.4 });
    const imageRef = useGsapParallax(0.1);

    return (
        <section id="about" className="py-20 md:py-40 px-6 md:px-12 lg:px-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute top-20 right-0 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                <span className="text-[20vw] font-display leading-none whitespace-nowrap">ROOTS / TRUTH</span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                <div className="space-y-12">
                    <div ref={titleRef}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-8 md:w-12 bg-secondary"></div>
                            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-secondary">Our Purpose</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter mb-6 uppercase break-words">
                            Radical renewal <br />
                            through youth.
                        </h2>
                    </div>

                    <div className="space-y-6 max-w-xl" ref={textRef}>
                        <p className="font-body text-white/60 leading-relaxed text-sm md:text-lg tracking-wide">
                            Necessary Aid Alliance is not just an organization; it's a movement born from the soil of the Upper West Region. We believe empowerment is an inside job, led by those who understand the rhythm of our communities.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:gap-16 pt-4" ref={statsRef}>
                        <div className="space-y-2">
                            <h4 className="text-4xl sm:text-5xl md:text-6xl font-display text-secondary">100%</h4>
                            <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/40">Led by Local Youth</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-4xl sm:text-5xl md:text-6xl font-display text-secondary">24/7</h4>
                            <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/40">Community Presence</p>
                        </div>
                    </div>
                </div>

                <div className="relative group perspective-1000">
                    <div className="aspect-[4/5] bg-primary-dark overflow-hidden rounded-sm relative shadow-2xl transition-transform duration-700 hover:rotate-y-6 hover:scale-[1.02]">
                        <img
                            ref={imageRef}
                            src="/images/mission_culture.jpg"
                            alt="Ghanaian Youth Culture"
                            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 scale-125"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
