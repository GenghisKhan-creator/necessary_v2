import React from "react";
import { useGsapReveal } from "../hooks/useGsap";

const ImpactSummary = () => {
    const reveal = useGsapReveal({ y: 30, delay: 0.5 });

    return (
        <div 
            ref={reveal}
            className="group relative bg-[#051c22]/40 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl max-w-[280px] md:max-w-[340px]"
        >
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent-green/10 blur-2xl rounded-full"></div>
            
            <div className="space-y-4">
                <span className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] text-white/40 uppercase block">
                    Total donations collected
                </span>
                
                <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl md:text-3xl font-display text-white transition-transform group-hover:scale-105 duration-500">
                        $385,970.70
                    </h3>
                </div>

                <div className="space-y-2">
                    <div className="h-[4px] w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[86%] bg-accent-green transition-all duration-1000 ease-parallax"></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[8px] md:text-[9px] font-mono tracking-wider">
                        <span className="text-white/60">632 investors</span>
                        <span className="text-accent-green">86%</span>
                    </div>
                </div>

                <p className="text-[9px] font-body text-white/30 leading-tight">
                    Help Restore Flood-Affected Settlements across the Upper West. Every cent counts towards sovereignty.
                </p>
            </div>
        </div>
    );
};

export default ImpactSummary;
