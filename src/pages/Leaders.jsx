import React from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const leaders = [
    {
        name: "MULUMBA SONGSORE",
        role: "EXECUTIVE DIRECTOR",
        bio: "Mulumba believes that the Upper West Region's greatest resource is its people. He founded NAA to bridge the gap between inherent potential and tangible opportunity.",
        image: "/images/leader_dir.jpg",
        manifesto: "SOVEREIGNTY IS AN INSIDE JOB."
    },
    {
        name: "AMINATA SULLEY",
        role: "ADVOCACY & JUSTICE LEAD",
        bio: "A fierce defender of human rights, Aminata leads our GBV task force and safe-haven initiatives across the districts.",
        image: "/images/leader_advocacy.jpg",
        manifesto: "DIGNITY IS NON-NEGOTIABLE."
    },
    {
        name: "SAMUEL BEKOE",
        role: "PROGRAMS DIRECTOR",
        bio: "Samuel oversees the technical implementation of our Literacy and Enterprise hubs, ensuring radical accountability at every level.",
        image: "/images/youth_skills_ghana.jpg", // Reusing your high-end youth image for him
        manifesto: "AUTHENTICITY DRIVES IMPACT."
    },
];

const Leaders = () => {
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-xs tracking-[0.5em] text-secondary uppercase">The Architects</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                        YOUTH <br />
                        <span className="text-white italic opacity-20">LEADERSHIP.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24" ref={revealRef}>
                    {leaders.map((leader, i) => (
                        <div key={i} className="group flex flex-col items-start space-y-8">
                            <div className="relative w-full aspect-[4/5] overflow-hidden grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ring-1 ring-white/5">
                                <img src={leader.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={leader.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                    <div className="flex gap-4">
                                        <Instagram className="w-5 h-5 text-white hover:text-secondary cursor-pointer" />
                                        <Twitter className="w-5 h-5 text-white hover:text-secondary cursor-pointer" />
                                        <Linkedin className="w-5 h-5 text-white hover:text-secondary cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <span className="font-mono text-[10px] text-secondary tracking-[0.4em] uppercase">{leader.role}</span>
                                    <h3 className="text-3xl md:text-4xl font-display tracking-tight uppercase mt-2">{leader.name}</h3>
                                </div>
                                <p className="font-body text-sm text-white/40 leading-relaxed max-w-sm">
                                    {leader.bio}
                                </p>
                                <div className="pt-6 border-t border-white/5">
                                    <span className="font-mono text-[9px] text-white/20 italic tracking-widest">
                                        "{leader.manifesto}"
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-xl">
                        <h4 className="text-2xl md:text-4xl font-display tracking-tight uppercase mb-6">READY TO LEAD?</h4>
                        <p className="font-body text-white/40 text-sm leading-relaxed uppercase tracking-wider mb-8">
                            We are always looking for passionate youth from the Upper West Region to join our district cohorts. If your roots are deep and your vision is radical, let's talk.
                        </p>
                        <a href="/#contact" className="inline-flex items-center gap-4 text-xs font-mono tracking-widest text-secondary border-b border-secondary/30 pb-2 hover:border-secondary transition-all">
                            JOIN THE COHORT / 2026
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaders;
