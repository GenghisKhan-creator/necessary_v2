import React, { useState } from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { MapPin, Info } from "lucide-react";

const districts = [
    { id: "wa_m", name: "WA MUNICIPAL", x: 45, y: 60, programs: "Literacy Action, Advocacy Hub", impact: "2,500+ Lives Touched" },
    { id: "wa_w", name: "WA WEST", x: 30, y: 70, programs: "Enterprise Hub, Seed Funding", impact: "45 Youth Startups" },
    { id: "wa_e", name: "WA EAST", x: 65, y: 65, programs: "Mobile Libraries, Safety Nets", impact: "12 Rural Schools Supported" },
    { id: "lawra", name: "LAWRA", x: 20, y: 45, programs: "Innovation Lab, Solar Tech", impact: "15 Village Grids Installed" },
    { id: "jirapa", name: "JIRAPA", x: 35, y: 40, programs: "GBV Solidarity Shield", impact: "5 Safe Houses Active" },
    { id: "nandom", name: "NANDOM", x: 15, y: 25, programs: "Vocational Excellence", impact: "200+ Trained Artisans" },
    { id: "sis_w", name: "SISSALA WEST", x: 55, y: 30, programs: "Agri-Enterprise Hub", impact: "50+ Micro-Farms Funded" },
    { id: "sis_e", name: "SISSALA EAST", x: 80, y: 20, programs: "Literacy action for girls", impact: "98% School Retention" },
    { id: "nad_k", name: "NADOWLI-KALEO", x: 38, y: 52, programs: "Advocacy & Human Rights", impact: "District Policy Reforms" },
    { id: "lamb", name: "LAMBUSSIE", x: 42, y: 15, programs: "Health & Nutrition Hub", impact: "Vital Aid in 20 Villages" },
    { id: "daf", name: "DAFFIAMA BUSSIE ISSA", x: 52, y: 48, programs: "Youth Justice Initiative", impact: "Legal Aid for 80+ Families" },
];

const ImpactMap = () => {
    const [hovered, setHovered] = useState(null);
    const revealRef = useGsapReveal({ y: 50 });

    return (
        <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-white text-primary overflow-hidden relative border-y border-primary/5">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none text-primary">
                <span className="text-[25vw] font-display leading-none whitespace-nowrap absolute -top-20 -left-20">GEOGRAPHY // IMPACT</span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10" ref={revealRef}>
                <div className="space-y-12">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-accent-green"></div>
                            <span className="font-mono text-xs tracking-[0.5em] text-primary/60 font-bold uppercase">Operational Footprint</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display leading-[0.85] tracking-tighter uppercase mb-6 text-primary">
                            WHERE WE <br />
                            <span className="text-secondary italic">MANIFEST.</span>
                        </h2>
                        <p className="font-body text-primary/60 leading-relaxed text-sm md:text-lg tracking-wide max-w-lg">
                            Necessary Aid Alliance is strategically rooted across all 11 districts of the Upper West Region. We don't just work in Wa; we work in the heart of our rural communities.
                        </p>
                    </div>

                    <div className="space-y-8 bg-premium-cream p-8 md:p-12 border border-primary/5 rounded-[2rem] relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Info className="w-6 h-6 text-accent-green" />
                        </div>

                        {hovered ? (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <span className="font-mono text-[10px] text-accent-green tracking-[0.4em] uppercase font-bold">DISTRICT DATA / {hovered.id}</span>
                                <h3 className="text-4xl md:text-5xl font-display tracking-tighter uppercase text-primary">{hovered.name}</h3>
                                <div className="space-y-2">
                                    <p className="text-xs font-mono text-primary/30 uppercase tracking-widest font-bold">Active Programs:</p>
                                    <p className="text-lg md:text-xl font-display text-primary italic font-bold">{hovered.programs}</p>
                                </div>
                                <div className="pt-6 border-t border-primary/5 flex items-baseline gap-4">
                                    <span className="text-4xl md:text-6xl font-display text-secondary">{hovered.impact.split(' ')[0]}</span>
                                    <span className="text-xs font-mono text-primary/40 uppercase tracking-widest font-bold">{hovered.impact.split(' ').slice(1).join(' ')}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="py-12 md:py-20 flex flex-col items-center justify-center text-center space-y-4">
                                <MapPin className="w-12 h-12 text-accent-green/30 mb-4 animate-bounce" />
                                <p className="font-mono text-xs text-primary/40 tracking-widest uppercase font-bold">Explore the points on the map <br /> to see regional impact data.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative aspect-square w-full bg-premium-cream rounded-full border border-primary/5 flex items-center justify-center group shadow-2xl">
                    {/* Stylized Abstract Map of Upper West */}
                    <svg viewBox="0 0 100 100" className="w-[90%] h-[90%] drop-shadow-2xl overflow-visible">
                        {/* Connecting Lines for Aesthetic */}
                        <g className="opacity-10 group-hover:opacity-20 transition-opacity">
                            {districts.map((d, i) => (
                                districts[i + 1] && <line key={i} x1={d.x} y1={d.y} x2={districts[i + 1].x} y2={districts[i + 1].y} stroke="var(--color-primary)" strokeWidth="0.1" />
                            ))}
                        </g>

                        {/* District Points */}
                        {districts.map((d) => (
                            <g
                                key={d.id}
                                className="cursor-pointer group/point"
                                onMouseEnter={() => setHovered(d)}
                            >
                                <circle
                                    cx={d.x}
                                    cy={d.y}
                                    r={hovered?.id === d.id ? "1.5" : "0.8"}
                                    className={`transition-all duration-500 fill-accent-green ${hovered?.id === d.id ? "opacity-100" : "opacity-40"}`}
                                />
                                <circle
                                    cx={d.x}
                                    cy={d.y}
                                    r={hovered?.id === d.id ? "3" : "0"}
                                    className="fill-accent-green opacity-20 animate-pulse"
                                />
                                {hovered?.id === d.id && (
                                    <text
                                        x={d.x + 2}
                                        y={d.y - 2}
                                        className="fill-primary font-display text-[2px] font-bold uppercase tracking-tighter pointer-events-none"
                                    >
                                        {d.name}
                                    </text>
                                )}
                            </g>
                        ))}
                    </svg>

                    {/* Compass Marker */}
                    <div className="absolute top-10 right-10 flex flex-col items-center gap-2 opacity-10">
                        <div className="w-10 h-[1px] bg-white"></div>
                        <span className="font-mono text-[7px] tracking-widest">N</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactMap;
