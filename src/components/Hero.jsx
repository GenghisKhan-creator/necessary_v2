import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="pt-48 pb-20 px-6 md:px-12 bg-accent-sage min-h-screen flex flex-col items-center overflow-hidden">
            {/* Tagline Pill */}
            <div className="bg-white/60 backdrop-blur-md px-6 py-2 rounded-full mb-10 shadow-sm border border-black/5">
                <span className="text-[11px] font-display font-bold text-primary tracking-widest uppercase">Building Brighter Paths</span>
            </div>

            {/* Main Heading */}
            <div className="max-w-5xl text-center mb-10">
                <h1 className="text-6xl md:text-[6.5rem] font-display font-medium text-primary leading-[1] tracking-tight">
                    Shine Hope Where It's <br />
                    <span className="relative inline-flex items-center justify-center mx-4">
                        <span className="relative z-10">Needed</span>
                        {/* Frame effect for "Needed" */}
                        <div className="absolute -inset-x-6 -inset-y-2 border-[3px] border-secondary rounded-sm opacity-80">
                            <div className="absolute -top-[3px] -left-[3px] w-2 h-2 bg-secondary"></div>
                            <div className="absolute -top-[3px] -right-[3px] w-2 h-2 bg-secondary"></div>
                            <div className="absolute -bottom-[3px] -left-[3px] w-2 h-2 bg-secondary"></div>
                            <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 bg-secondary"></div>
                        </div>
                    </span>
                    Most
                </h1>
            </div>

            {/* Subtext */}
            <div className="max-w-xl text-center mb-12">
                <p className="text-primary/70 font-body text-base md:text-lg leading-relaxed">
                    At Necessary Aid, we connect people with communities in need, turning compassion into tangible change.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
                <button className="group flex items-center bg-primary text-secondary px-8 py-3.5 rounded-full font-body text-[13px] font-bold transition-all shadow-xl hover:translate-y-[-2px]">
                    Donate Now
                    <div className="ml-4 w-9 h-9 bg-secondary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                </button>
                <button className="group flex items-center bg-white border-2 border-primary/5 text-primary px-8 py-3.5 rounded-full font-body text-[13px] font-bold transition-all hover:bg-neutral-bg shadow-lg hover:translate-y-[-2px]">
                    Volunteer
                    <div className="ml-4 w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                </button>
            </div>

            {/* Image Grid with Thick Border */}
            <div className="relative w-full max-w-6xl mx-auto mb-24">
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-[3rem] -z-10 translate-y-8 h-full w-full"></div>
                <div className="p-3 bg-secondary rounded-[2.5rem] shadow-2xl border-[12px] border-secondary overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-[1.8rem] overflow-hidden">
                        <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                            <img src="/images/mission_culture.jpg" className="w-full h-full object-cover" alt="Community" />
                        </div>
                        <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                            <img src="/images/girl_edu.jpg" className="w-full h-full object-cover" alt="Children" />
                        </div>
                        <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden border-secondary">
                            <img src="/images/youth_empowerment.jpg" className="w-full h-full object-cover" alt="Outdoors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className="w-full max-w-7xl mx-auto text-center">
                <p className="text-primary/40 font-body text-[11px] font-bold uppercase tracking-[0.2em] mb-12">Supported by Changemakers Worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
                     <LogoPlaceholder name="Logoipsum" />
                     <LogoPlaceholder name="Logoipsum" />
                     <LogoPlaceholder name="Logoipsum" />
                     <LogoPlaceholder name="Logoipsum" />
                     <LogoPlaceholder name="Logoipsum" />
                </div>
            </div>
        </section>
    );
};

const LogoPlaceholder = ({ name }) => (
    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm border-2 border-primary/40"></div>
        </div>
        <span className="font-display text-sm font-bold text-primary/80 uppercase tracking-tighter">{name}</span>
    </div>
);

export default Hero;

