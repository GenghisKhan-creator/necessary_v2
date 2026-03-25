import React from "react";
import { ArrowRight } from "lucide-react";

const programs = [
    {
        title: "Education – Read To Lead",
        tag: "KNOWLEDGE",
        desc: "At NAA-Ghana, we understand education is the most powerful weapon which you can use to change the world.",
        image: "/images/girl_edu.jpg"
    },
    {
        title: "Gender Equality",
        tag: "EQUITY",
        desc: "Gender equality is a human fight not a female fight. This is why we work to attack cultural norms at the local level.",
        image: "/images/gbv.jpg"
    },
    {
        title: "Girl Child Empowerment",
        tag: "EMPOWER",
        desc: "We ensure that teenage girls are empowered to make a strategic life choice that affects them.",
        image: "/images/youth_empowerment.jpg"
    },
    {
        title: "Skills Training",
        tag: "SKILLS",
        desc: "We stimulate entrepreneurial training for women to acquire skills in a variety of practical trades to create a livelihood.",
        image: "/images/enterprise.jpg"
    },
    {
        title: "Vulnerable Groups Support Scheme",
        tag: "SUPPORT",
        desc: "Our organizations canvass support financially and logistically wise to distribute among those in need.",
        image: "/images/community.png"
    }
];

const ProgramsDetailed = () => {
    return (
        <div className="bg-primary text-white min-h-screen pt-48 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase">What We Do</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-display font-medium leading-[0.85] tracking-tighter uppercase break-words">
                        Our <br />
                        <span className="text-secondary italic">Programs.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-24 md:gap-40">
                    {programs.map((p, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                            <div className="lg:w-1/2 rounded-[3rem] overflow-hidden group border-[12px] border-white/5 shadow-2x">
                                <img src={p.image} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt={p.title} />
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <span className="font-mono text-[10px] tracking-[0.4em] text-secondary">{p.tag}</span>
                                <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight uppercase leading-tight">{p.title}</h2>
                                <p className="text-white/60 font-body text-base md:text-lg leading-relaxed tracking-wide max-w-xl">{p.desc}</p>
                                <button className="group flex items-center bg-secondary text-primary px-6 py-3 rounded-full font-body text-[13px] font-bold transition-all hover:bg-white shadow-xl">
                                    Read more
                                    <div className="ml-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                        <ArrowRight className="w-4 h-4 text-secondary" />
                                    </div>
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

