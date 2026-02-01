import React from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { Heart, Globe, ShieldCheck } from "lucide-react";

const DonatePage = () => {
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    const tiers = [
        { title: "SEED", amount: "$25", impact: "Provides educational materials for one child for a term." },
        { title: "RENEWAL", amount: "$100", impact: "Supports vocational training for one youth leader." },
        { title: "TRANSFORM", amount: "$500", impact: "Funds a community-wide GBV awareness campaign." }
    ];

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center" ref={revealRef}>
                <div className="mb-20">
                    <Heart className="w-16 h-16 text-secondary mx-auto mb-8 animate-pulse" />
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display tracking-tighter mb-8 uppercase break-words">STAKE YOUR <br /><span className="text-secondary italic">CLAIM.</span></h1>
                    <p className="text-white/40 font-body text-lg max-w-2xl mx-auto tracking-wide">
                        Your stewardship is the fuel for radical renewal. Every contribution is an investment in the sovereignty of the Upper West Region.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {tiers.map((tier, i) => (
                        <div key={i} className="bg-primary-dark p-12 border border-white/5 hover:border-secondary transition-all group flex flex-col justify-between items-center text-center">
                            <div className="space-y-6">
                                <span className="font-mono text-xs tracking-[0.4em] text-white/20 uppercase">{tier.title}</span>
                                <h3 className="text-5xl font-display text-white group-hover:text-secondary transition-colors">{tier.amount}</h3>
                                <p className="text-xs font-body text-white/40 leading-relaxed">{tier.impact}</p>
                            </div>
                            <button className="mt-12 w-full py-4 bg-white/5 border border-white/10 text-white font-mono text-[10px] tracking-widest hover:bg-secondary hover:text-primary transition-all uppercase">
                                SELECT LEVEL
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left border-t border-white/5 pt-20">
                    <div className="flex gap-6 items-start">
                        <Globe className="w-8 h-8 text-secondary shrink-0" />
                        <div>
                            <h4 className="font-display text-lg mb-2 uppercase">Global Reach</h4>
                            <p className="text-xs text-white/40 leading-relaxed uppercase">We accept international contributions via secure channels to ensure your impact reaches Ghana safely.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <ShieldCheck className="w-8 h-8 text-secondary shrink-0" />
                        <div>
                            <h4 className="font-display text-lg mb-2 uppercase">Radical Transparency</h4>
                            <p className="text-xs text-white/40 leading-relaxed uppercase">100% of public donations go directly to community programs. Our systems are audited and open.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
