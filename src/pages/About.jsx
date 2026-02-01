import React from "react";
import { useGsapReveal } from "../hooks/useGsap";

const About = () => {
    const revealRef = useGsapReveal({ y: 40, stagger: 0.15 });

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-start mb-32" ref={revealRef}>
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-secondary"></div>
                            <span className="font-mono text-xs tracking-[0.4em] text-secondary uppercase">Our Identity</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display leading-[0.9] tracking-tighter mb-12 uppercase break-words">
                            Born from <br />
                            <span className="text-secondary italic text-3xl md:text-6xl">the soil.</span>
                        </h1>
                        <p className="font-body text-lg text-white/60 leading-relaxed tracking-wide max-w-xl">
                            Necessary Aid Alliance (NAA) is a youth-led non-governmental organization dedicated to mobilizing resources and advocating for the vulnerable and less privileged in the Upper West Region of Ghana.
                        </p>
                    </div>
                    <div className="lg:w-1/2 aspect-[4/3] bg-primary-dark rounded-sm overflow-hidden ring-1 ring-white/10 shadow-2xl">
                        <img src="/images/mission_culture.jpg" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" alt="About NAA" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
                    {["Vision", "Values", "Commitment"].map((title, i) => (
                        <div key={i} className="space-y-4">
                            <h3 className="text-xl font-display text-secondary tracking-tight uppercase">{title}</h3>
                            <p className="text-sm font-body text-white/40 leading-relaxed uppercase tracking-widest text-xs">
                                {title === "Vision" ? "To create a world where every young person and child in the Upper West Region has the tools, safety, and opportunity to define their own destiny." :
                                    title === "Values" ? "Authenticity, Radical Accountability, Community-Led Renewal, and the unwavering belief in the power of Youth Leadership." :
                                        "We don't just provide aid; we build infrastructures of hope and self-reliance that last generations."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
