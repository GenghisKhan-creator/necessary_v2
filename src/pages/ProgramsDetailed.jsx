import React from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { ArrowRight } from "lucide-react";

const programs = [
    {
        title: "LITERACY ACTION",
        tag: "EDUCATION",
        desc: "Reducing illiteracy through mobile classrooms and community-led reading programs.",
        image: "/images/girl_edu.jpg"
    },
    {
        title: "ENTERPRISE HUB",
        tag: "SKILLS",
        desc: "Empowering youth with vocational training and seed funding for small businesses.",
        image: "/images/youth_empowerment.jpg"
    },
    {
        title: "SAFETY NETS",
        tag: "GBV ACTION",
        desc: "Protecting women and children from violence through legal aid and safe havens.",
        image: "/images/gbv.jpg"
    }
];

const ProgramsDetailed = () => {
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    return (
        <div className="bg-primary-dark text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-xs tracking-[0.5em] text-secondary uppercase">The Work</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                        OUR <br />
                        <span className="text-white italic opacity-20">PROGRAMS.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-32" ref={revealRef}>
                    {programs.map((p, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                            <div className="lg:w-1/2 aspect-[16/9] overflow-hidden group ring-1 ring-white/5">
                                <img src={p.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt={p.title} />
                            </div>
                            <div className="lg:w-1/2 space-y-10">
                                <span className="font-mono text-[10px] tracking-[0.4em] text-secondary">{p.tag}</span>
                                <h2 className="text-4xl md:text-6xl font-display tracking-tighter">{p.title}</h2>
                                <p className="text-white/40 font-body text-base leading-relaxed tracking-wide">{p.desc}</p>
                                <button className="flex items-center gap-4 text-xs font-mono tracking-widest text-white border-b border-white/20 pb-2 hover:border-secondary transition-colors">
                                    EXPLORE PROGRAM <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsDetailed;
