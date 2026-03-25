import React from "react";
import { ArrowRight } from "lucide-react";

const Mission = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-white">
            <div className="max-w-7xl mx-auto">
                
                {/* Story Top Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-start">
                    <div>
                        <div className="inline-block bg-secondary px-5 py-2 rounded-lg mb-8">
                            <span className="text-[11px] font-display font-bold text-primary uppercase tracking-widest">Our Story</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-[1.1] tracking-tight uppercase">
                            It Started With <br /> a Visit and a <br /> Promise.
                        </h2>
                    </div>
                    <div className="lg:pt-20">
                        <p className="text-white/60 font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                            Necessary Aid Alliance works to bridge the educational inequality gap in rural communities whilst empowering the girl child to make informed strategic life choices. By offering entrepreneurial training for women and support for vulnerable groups, we aim to break the cycle of endemic poverty and ensure self-reliance.
                        </p>
                        <button className="group flex items-center bg-secondary text-primary px-6 py-3 rounded-full font-body text-[13px] font-bold transition-all hover:bg-white shadow-xl">
                            Read The Full Story
                            <div className="ml-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowRight className="w-4 h-4 text-secondary" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Bottom Impact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Team Photo Container */}
                    <div className="lg:col-span-8 rounded-[2rem] overflow-hidden group">
                        <img 
                            src="/images/gbv.jpg" 
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" 
                            alt="Necessary Aid Team" 
                        />
                    </div>

                    {/* Stat Cards Container */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {[
                            { val: "22+", label: "Communities Reached" },
                            { val: "65+", label: "Projects Completed" },
                            { val: "850+", label: "Volunteers United" }
                        ].map((stat, i) => (
                            <div key={i} className="flex-1 bg-white p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform">
                                <h3 className="text-4xl md:text-5xl font-display font-medium text-primary mb-2 tracking-tighter">{stat.val}</h3>
                                <p className="text-primary/40 font-body text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Mission;


