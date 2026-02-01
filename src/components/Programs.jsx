import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsap";

const programs = [
    {
        id: "01",
        title: "LITERACY ACTION",
        desc: "Empowering children and adults with reading, writing, and critical thinking skills.",
        image: "/images/girl_edu.jpg",
    },
    {
        id: "02",
        title: "ENTERPRISE HUB",
        desc: "Incubating small businesses and teaching vocational skills to rural youth.",
        image: "/images/youth_empowerment.jpg",
    },
    {
        id: "03",
        title: "JUSTICE & SAFETY",
        desc: "Fighting against Gender Based Violence and protecting vulnerable community members.",
        image: "/images/gbv.jpg",
    },
    {
        id: "04",
        title: "ADVOCACY HUB",
        desc: "Defending human rights and promoting civic engagement among women and youth.",
        image: "/images/advocacy.jpg",
    },
];

const Programs = () => {
    const [active, setActive] = useState(0);
    const containerRef = useRef(null);
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    const handleMouseEnter = (idx) => {
        setActive(idx);
    };

    return (
        <section id="programs" className="py-20 md:py-40 px-6 md:px-12 lg:px-24 bg-primary-dark text-white overflow-hidden relative" ref={containerRef}>
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
                <div className="w-full lg:w-1/2 space-y-12 md:space-y-24">
                    <div>
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <div className="h-[1px] w-8 md:w-12 bg-secondary/50"></div>
                            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-secondary">The Modalities</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-display leading-[0.85] tracking-tighter">
                            HOW WE <br />
                            <span className="text-secondary italic">OPERATE.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col border-t border-white/5" ref={revealRef}>
                        {programs.map((program, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onClick={() => setActive(idx)}
                                className={`group relative py-8 md:py-12 border-b border-white/5 cursor-pointer transition-all duration-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 ${active === idx ? "opacity-100" : "opacity-30 lg:hover:opacity-100"}`}
                            >
                                <div className="flex gap-4 md:gap-8 items-start">
                                    <span className="font-mono text-[10px] md:text-xs text-secondary mt-1">{program.id}</span>
                                    <div className="space-y-2 md:space-y-4">
                                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-display tracking-tighter lg:group-hover:translate-x-4 transition-transform duration-500">
                                            {program.title}
                                        </h3>
                                        <p className={`max-w-xs font-body text-[10px] md:text-xs text-white/50 transition-all duration-700 overflow-hidden ${active === idx ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                                            {program.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden sm:flex relative overflow-hidden w-10 h-10 md:w-12 md:h-12 items-center justify-center border border-white/10 rounded-full group-hover:bg-secondary group-hover:border-secondary transition-all">
                                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-primary transition-all group-hover:rotate-45" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[500px] lg:h-auto lg:sticky lg:top-40 self-start">
                    <div className="relative w-full aspect-[4/5] lg:aspect-auto h-full lg:h-[70vh] overflow-hidden rounded-sm ring-1 ring-white/10 bg-primary shadow-2xl">
                        {programs.map((program, idx) => (
                            <img
                                key={idx}
                                src={program.image}
                                alt={program.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-expo-out scale-110 ${active === idx ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-125 rotate-3"}`}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/60 via-transparent to-white/5 pointer-events-none"></div>

                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                            <span className="font-display text-7xl md:text-9xl text-white/10 select-none">{programs[active].id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
