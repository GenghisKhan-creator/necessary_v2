import React from "react";
import { ArrowRight } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsap";

const GetInvolved = () => {
    const revealLeft = useGsapReveal({ x: -50, opacity: 0 });
    const revealRight = useGsapReveal({ x: 50, opacity: 0 });

    return (
        <section id="get-involved" className="py-24 md:py-48 px-6 md:px-12 bg-premium-cream overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-primary/5">
                    <div className="p-12 lg:p-24 space-y-12" ref={revealLeft}>
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-accent-green"></div>
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/40 font-bold">Join the movement</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display leading-[0.85] tracking-tighter text-primary uppercase">
                            YOUR HANDS, <br />
                            <span className="text-secondary italic">OUR SOIL.</span>
                        </h2>

                        <div className="space-y-12">
                            <p className="font-body text-primary/60 max-w-md leading-relaxed text-lg tracking-wide">
                                Change isn't requested from the outside; it's cultivated from within. Whether you bring time, expertise, or resources, you become part of the renewal.
                            </p>

                            <div className="flex flex-col gap-6">
                                <button className="group relative flex justify-between items-center w-full py-8 border-y border-primary/5 hover:border-accent-green transition-all px-4 overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 bg-accent-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                                    <span className="text-xl font-display text-primary group-hover:translate-x-4 transition-transform duration-500">VOLUNTEER ON GROUND</span>
                                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent-green group-hover:text-white transition-all duration-500">
                                        <ArrowRight className="w-6 h-6 transform lg:group-hover:rotate-45 transition-transform" />
                                    </div>
                                </button>
                                
                                <a href="/donate" className="group relative flex justify-between items-center w-full py-8 border-b border-primary/5 hover:border-secondary transition-all px-4 overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                                    <span className="text-xl font-display text-primary group-hover:translate-x-4 transition-transform duration-500">GIVE A RADIANT GIFT</span>
                                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                        <ArrowRight className="w-6 h-6 transform lg:group-hover:rotate-45 transition-transform" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-square lg:aspect-auto overflow-hidden group p-6 lg:p-12" ref={revealRight}>
                         <div className="w-full h-full rounded-[3rem] overflow-hidden relative shadow-2xl">
                            <img
                                src="/images/cta_portrait.jpg"
                                alt="Community Member"
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700"></div>
                            
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-full border border-white/20 transform group-hover:scale-120 transition-transform duration-1000 shadow-2xl">
                                    <span className="block font-display text-2xl md:text-3xl text-white uppercase tracking-tighter">ACT NOW</span>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                
                {/* Stats row below (Image 5 style) */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60">
                    <div className="text-center group">
                         <h5 className="text-4xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">22+</h5>
                         <p className="font-mono text-[9px] uppercase tracking-widest text-primary/50">Districts Reached</p>
                    </div>
                    <div className="text-center group">
                         <h5 className="text-4xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">65+</h5>
                         <p className="font-mono text-[9px] uppercase tracking-widest text-primary/50">Projects Completed</p>
                    </div>
                    <div className="text-center group">
                         <h5 className="text-4xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">850+</h5>
                         <p className="font-mono text-[9px] uppercase tracking-widest text-primary/50">Active Volunteers</p>
                    </div>
                    <div className="text-center group">
                         <h5 className="text-4xl font-display text-primary mb-2 group-hover:scale-110 transition-transform">5k+</h5>
                         <p className="font-mono text-[9px] uppercase tracking-widest text-primary/50">Lives Transformed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
