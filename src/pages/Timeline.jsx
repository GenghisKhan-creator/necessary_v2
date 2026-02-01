import React from "react";
import { useGsapReveal } from "../hooks/useGsap";

const milestones = [
    {
        year: "2020",
        title: "BORN FROM THE SOIL",
        desc: "Necessary Aid Alliance is founded in Wa by a small cohort of youth determined to redefine the meaning of aid in Northern Ghana.",
        image: "/images/timeline_founding.jpg"
    },
    {
        year: "2021",
        title: "THE JIRAPA COHORT",
        desc: "Opening of our first district hub and safe-haven initiative, providing immediate sanctuary and legal aid for women and children.",
        image: "/images/gbv.jpg"
    },
    {
        year: "2022",
        title: "LITERACY ACTION LAUNCH",
        desc: "Our mobile classroom reaches its 1,000th student, bringing critical thinking and reading skills to the most remote villages.",
        image: "/images/girl_edu.jpg"
    },
    {
        year: "2023",
        title: "ENTERPRISE SOVEREIGNTY",
        desc: "Launch of the Youth Enterprise Hub. First 10 solar-powered irrigation grids installed in Lawra, transforming local agriculture.",
        image: "/images/story_innovation.jpg"
    },
    {
        year: "2024",
        title: "REGIONAL RECOGNITION",
        desc: "NAA receives the Community Impact Award. Documented impact reaches over 5,000 lives across 11 districts.",
        image: "/images/news_award.jpg"
    },
    {
        year: "2026",
        title: "SISSALA EXPANSION",
        desc: "Strategic scaling into the Sissala East district, bringing the Movement of Sovereignty to the northern borders.",
        image: "/images/mission_culture.jpg"
    }
];

const Timeline = () => {
    const revealRef = useGsapReveal({ y: 50, stagger: 0.2 });

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:mb-40">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-xs tracking-[0.5em] text-secondary uppercase">Evolutionary Path</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                        OUR RADICAL <br />
                        <span className="text-white italic opacity-20">TIMELINE.</span>
                    </h1>
                </div>

                <div className="relative" ref={revealRef}>
                    {/* Central Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-white/5 md:-translate-x-1/2 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-b from-secondary via-secondary/20 to-transparent origin-top scale-y-0 animate-scroll-line"></div>
                    </div>

                    <style>{`
                        @keyframes scroll-line {
                            to { transform: scaleY(1); }
                        }
                        .animate-scroll-line {
                            animation: scroll-line 4s linear forwards;
                        }
                    `}</style>

                    <div className="space-y-32 md:space-y-64">
                        {milestones.map((m, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Marker Circle */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-2 border-secondary md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(255,140,0,0.3)]"></div>

                                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 pl-12 md:pl-0">
                                    <span className="text-5xl md:text-8xl font-display text-secondary/30 leading-none">{m.year}</span>
                                    <h3 className="text-3xl md:text-5xl font-display tracking-tight uppercase leading-none">{m.title}</h3>
                                    <p className="font-body text-white/40 text-sm md:text-lg leading-relaxed max-w-md uppercase tracking-wide">
                                        {m.desc}
                                    </p>
                                </div>

                                <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-white/5 grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 group">
                                    <img src={m.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt={m.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-64 flex flex-col items-center text-center">
                    <div className="h-40 w-[1px] bg-gradient-to-b from-secondary to-transparent mb-12"></div>
                    <h4 className="text-3xl md:text-6xl font-display tracking-tight uppercase mb-8">THE STORY IS <br /><span className="text-secondary italic">UNFINISHED.</span></h4>
                    <p className="font-mono text-[10px] tracking-[0.5em] text-white/20 uppercase mb-12">Join us in writing the next chapter.</p>
                    <a href="/donate" className="px-12 py-5 bg-secondary text-primary font-mono text-xs tracking-widest font-bold hover:bg-white transition-all uppercase">
                        STAKE YOUR CLAIM
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
