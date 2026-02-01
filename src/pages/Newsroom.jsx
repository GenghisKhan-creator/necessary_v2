import React from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { ArrowRight, ExternalLink } from "lucide-react";

const newsItems = [
    {
        date: "JAN 24, 2026",
        source: "UPPER WEST TIMES",
        title: "NAA ANNOUNCES EXPANSION INTO SISSALA EAST DISTRICT",
        category: "EXPANSION",
        image: "/images/news_award.jpg"
    },
    {
        date: "DEC 12, 2025",
        source: "GLOBAL NGO HUB",
        title: "HOW YOUTH-LED SOVEREIGNTY IS REDEFINING AID IN GHANA",
        category: "TRANSFORMATION",
        image: "/images/youth_skills_ghana.jpg"
    },
    {
        date: "NOV 05, 2025",
        source: "REGIONAL ASSEMBLY",
        title: "NECESSARY AID ALLIANCE RECEIVES COMMUNITY IMPACT AWARD",
        category: "RECOGNITION",
        image: "/images/news_award.jpg"
    }
];

const Newsroom = () => {
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-xs tracking-[0.5em] text-secondary uppercase">The Movement Feed</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                        NEWS & <br />
                        <span className="text-white italic opacity-20">DISPATCHES.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-12" ref={revealRef}>
                    {newsItems.map((item, i) => (
                        <div key={i} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12 transition-all hover:border-secondary/30">
                            <div className="md:col-span-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-widest block mb-2">{item.date}</span>
                                <span className="font-mono text-xs text-secondary tracking-[0.2em] font-bold">{item.source}</span>
                            </div>

                            <div className="md:col-span-6 space-y-4">
                                <span className="font-mono text-[8px] bg-white/5 text-white/40 px-3 py-1 tracking-[0.3em] uppercase">{item.category}</span>
                                <h3 className="text-2xl md:text-5xl font-display tracking-tight leading-tight uppercase group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="md:col-span-3 flex justify-end">
                                <button className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-white/60 hover:text-white transition-all uppercase">
                                    READ ARTICLE <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 bg-primary-dark p-12 md:p-24 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                        <img src="/logo.jpg" alt="Logo" className="w-64 h-64 grayscale" />
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <h4 className="text-3xl md:text-5xl font-display tracking-tight uppercase mb-8">FOR PRESS ENQUIRIES</h4>
                        <p className="font-body text-white/40 leading-relaxed text-sm md:text-lg tracking-wide mb-12 uppercase">
                            We provide primary reports, HD imagery, and expert commentary on youth leadership and rural transformation in Northern Ghana.
                        </p>
                        <a href="mailto:press@necessaryaid.org" className="inline-flex items-center gap-6 text-xs font-mono tracking-widest text-secondary border-b border-secondary/30 pb-2 hover:border-secondary transition-all">
                            PRESS@NECESSARYAID.ORG <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsroom;
