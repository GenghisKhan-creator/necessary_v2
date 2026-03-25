import React from "react";
import { ArrowUpRight } from "lucide-react";

const programs = [
    {
        title: "Education & Literacy",
        desc: "Building foundations for the future through radical literacy and community-led learning centers.",
        image: "/images/girl_edu.jpg",
    },
    {
        title: "Youth Empowerment",
        desc: "Equipping the next generation with digital skills and vocational training to lead transformation.",
        image: "/images/youth_empowerment.jpg",
    },
    {
        title: "Crisis Intervention",
        desc: "Standing as a shield against GBV and providing rapid support for families in transition.",
        image: "/images/gbv.jpg",
    },
];

const Programs = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-block border border-primary/10 px-4 py-1.5 rounded-full mb-6">
                            <span className="text-[10px] font-display font-bold text-primary/60 uppercase tracking-widest">What We Do</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-primary leading-[1.1] tracking-tight uppercase">
                            Empowerment Through <br /> Sustainable Action.
                        </h2>
                    </div>
                    <p className="max-w-xs text-primary/40 font-body text-sm leading-relaxed mb-2">
                        We focus on three core pillars that create lasting change in the Upper West Region.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
                                <img 
                                    src={program.image} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    alt={program.title} 
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-700"></div>
                                <div className="absolute top-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                                    <ArrowUpRight className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-medium text-primary uppercase mb-3 px-2 group-hover:text-secondary transition-colors">
                                {program.title}
                            </h3>
                            <p className="text-primary/60 font-body text-sm leading-relaxed px-2">
                                {program.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;

