import React from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { BarChart3, PieChart, TrendingUp, ShieldCheck } from "lucide-react";

const stats = [
    { label: "LITERACY ACTION", value: "45%", color: "bg-secondary" },
    { label: "GBV PROTECTION", value: "30%", color: "bg-white/40" },
    { label: "YOUTH ENTERPRISE", value: "15%", color: "bg-white/20" },
    { label: "OPERATIONS", value: "10%", color: "bg-white/10" },
];

const KPIs = [
    { title: "TRUST RATING", value: "100%", desc: "Open Audit Status" },
    { title: "LOCAL IMPACT", value: "5K+", desc: "Documented Lives" },
    { title: "YOUTH LED", value: "100%", desc: "Decision Power" },
];

const Dashboard = () => {
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-xs tracking-[0.5em] text-secondary uppercase">Transparency Hub</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                        RADICAL <br />
                        <span className="text-white italic opacity-20">ACCOUNTABILITY.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24" ref={revealRef}>
                    {/* Left: Financial Allocation */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                        <div className="flex items-center justify-between border-b border-white/5 pb-8">
                            <h3 className="text-3xl md:text-4xl font-display tracking-tight uppercase">Fund Allocation / 2024</h3>
                            <PieChart className="w-8 h-8 text-secondary opacity-30" />
                        </div>

                        <div className="space-y-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase">{stat.label}</span>
                                        <span className="text-3xl font-display text-white">{stat.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${stat.color} transition-all duration-1000 delay-500`}
                                            style={{ width: stat.value }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Key Performance */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
                        {KPIs.map((kpi, i) => (
                            <div key={i} className="bg-primary-dark p-10 border border-white/5 flex flex-col justify-between aspect-video md:aspect-auto">
                                <div className="space-y-2">
                                    <span className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase">{kpi.title}</span>
                                    <h4 className="text-5xl md:text-7xl font-display text-white">{kpi.value}</h4>
                                </div>
                                <p className="font-mono text-[9px] tracking-[0.2em] text-secondary uppercase mt-8">{kpi.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom: Audit Status */}
                <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-white/5 pt-20">
                    <div className="relative aspect-video md:aspect-[16/6] overflow-hidden rounded-sm ring-1 ring-white/5 grayscale brightness-50">
                        <img src="/images/dashboard_visual.jpg" className="w-full h-full object-cover" alt="Transparency" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <ShieldCheck className="w-12 h-12 text-secondary" />
                            <h4 className="text-2xl md:text-3xl font-display tracking-tight uppercase">Open Source Stewardship</h4>
                        </div>
                        <p className="font-body text-white/40 text-sm leading-relaxed uppercase tracking-wider">
                            We believe that trust is the only currency that matters. Our books are open to the public, and our impact is measured not by intent, but by verified regional change.
                        </p>
                        <button className="flex items-center gap-6 group">
                            <span className="text-xs font-mono tracking-[0.5em] text-white border-b border-white/20 pb-2 group-hover:border-secondary transition-all">DOWNLOAD FULL REPORT / PDF</span>
                            <TrendingUp className="w-4 h-4 text-white/30 group-hover:text-secondary translate-y-1 transition-all" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
