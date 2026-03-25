import React from "react";
import { useGsapReveal } from "../hooks/useGsap";

const About = () => {
    const revealRef = useGsapReveal({ y: 40, stagger: 0.15 });

    return (
        <div className="bg-primary text-white min-h-screen pt-48 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-start mb-32" ref={revealRef}>
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-secondary"></div>
                            <span className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase">Our Story & Identity</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display font-medium leading-[1] tracking-tighter mb-12 uppercase">
                            History of <br />
                            Necessary Aid <br />
                            <span className="text-secondary italic">Alliance</span>
                        </h1>
                        <p className="font-body text-lg text-white/60 leading-relaxed tracking-wide max-w-xl">
                            Necessary Aid Alliance is a registered Non-Governmental Organization in Ghana that seeks to canvass educational support for rural children, promote gender equality, foster girl child empowerment, stimulating skills training for women in rural communities and providing support for vulnerable groups. Our utmost aim is to break the cycle of endemic poverty through education, entrepreneurial training for women so as to economically empower them and ensure self-reliance.
                        </p>
                    </div>
                    <div className="lg:w-1/2 aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
                        <img src="/images/mission_culture.jpg" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" alt="About NAA History" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-24">
                    <div className="bg-white/5 p-12 rounded-[3rem] border border-white/5 hover:bg-white/10 transition-all">
                        <h3 className="text-2xl font-display text-secondary tracking-tight uppercase mb-6 italic">Mission</h3>
                        <p className="text-base font-body text-white/60 leading-relaxed">
                            We work to bridge the educational inequality gap in rural communities whilst empowering the girl child to make informed strategic life choices. Necessary Aid Alliance offers skills training programs for women to leverage for improved finances. We also provide continuous care and support for vulnerable groups in society.
                        </p>
                    </div>
                    <div className="bg-white/5 p-12 rounded-[3rem] border border-white/5 hover:bg-white/10 transition-all">
                        <h3 className="text-2xl font-display text-secondary tracking-tight uppercase mb-6 italic">Vision</h3>
                        <p className="text-base font-body text-white/60 leading-relaxed">
                            Thriving rural communities where children will have the opportunity to attain quality education, teenage girls will be safe and free to make informed decisions, women will be able to earn enough to feed families, and inspired healthy vulnerable groups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

