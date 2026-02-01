import React from "react";
import { ArrowRight } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsap";

const GetInvolved = () => {
    const revealLeft = useGsapReveal({ x: -50, opacity: 0 });
    const revealRight = useGsapReveal({ x: 50, opacity: 0 });

    return (
        <section id="get-involved" className="py-20 px-6 md:px-12 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-primary-dark ring-1 ring-white/10 rounded-sm">
                    <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5" ref={revealLeft}>
                        <div className="flex items-center gap-4 mb-20">
                            <div className="h-[1px] w-12 bg-secondary"></div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-secondary">Join Us</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display leading-[0.85] tracking-tighter text-white mb-16">
                            YOUR HANDS, <br />
                            <span className="text-white/30 italic">OUR SOIL.</span>
                        </h2>

                        <div className="space-y-12">
                            <p className="font-body text-white/50 max-w-md leading-relaxed">
                                Change isn't requested from the outside; it's cultivated from within. Whether you bring time, expertise, or resources, you become part of the renewal.
                            </p>

                            <div className="flex flex-col gap-6">
                                <button className="group relative flex justify-between items-center w-full py-8 border-y border-white/5 hover:border-secondary transition-all px-4 overflow-hidden">
                                    {/* Hover Background Fill */}
                                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-secondary/5 transition-all duration-500 -z-10"></div>

                                    <span className="text-xl font-display text-white group-hover:translate-x-4 transition-transform duration-500">VOLUNTEER ON GROUND</span>
                                    <ArrowRight className="w-6 h-6 text-white group-hover:text-secondary group-hover:rotate-45 transition-all duration-500" />
                                </button>
                                <button className="group relative flex justify-between items-center w-full py-8 border-b border-white/5 hover:border-secondary transition-all px-4 overflow-hidden">
                                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-secondary/5 transition-all duration-500 -z-10"></div>

                                    <span className="text-xl font-display text-white group-hover:translate-x-4 transition-transform duration-500">FINANCIAL STEWARDSHIP</span>
                                    <ArrowRight className="w-6 h-6 text-white group-hover:text-secondary group-hover:rotate-45 transition-all duration-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-square lg:aspect-auto overflow-hidden group" ref={revealRight}>
                        <img
                            src="/images/cta_portrait.jpg"
                            alt="Community Member"
                            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="text-center">
                                <span className="block font-display text-7xl md:text-9xl text-white/10 select-none transform transition-transform duration-1000 group-hover:scale-150">ACT NOW</span>
                            </div>
                        </div>
                        {/* Overlay accent with parallax hint */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2 pointer-events-none group-hover:translate-x-1/3 transition-transform duration-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
