import React from "react";
import { ArrowUpRight } from "lucide-react";

const programs = [
    {
        title: "Education – Read To Lead",
        desc: "At NAA-Ghana, we understand education is the most powerful weapon which you can use to change the world.",
        image: "/images/girl_edu.jpg",
    },
    {
        title: "Gender Equality",
        desc: "Gender equality is a human fight not a female fight. This is why we work to attack cultural norms at the local level.",
        image: "/images/gbv.jpg",
    },
    {
        title: "Girl Child Empowerment",
        desc: "We ensure that teenage girls are empowered to make a strategic life choice that affects them.",
        image: "/images/youth_empowerment.jpg",
    },
    {
        title: "Skills Training",
        desc: "We stimulate entrepreneurial training for women to acquire skills in a variety of practical trades to create a livelihood.",
        image: "/images/enterprise.jpg",
    },
    {
        title: "Vulnerable Support",
        desc: "Our organizations canvass support financially and logistically wise to distribute among those in need.",
        image: "/images/community.png",
    },
];

const Programs = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-accent-sage/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-block border border-primary/10 px-4 py-1.5 rounded-full mb-6 bg-white/50">
                            <span className="text-[10px] font-display font-bold text-primary/60 uppercase tracking-widest">What We Do</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-primary leading-[1.1] tracking-tight uppercase italic underline decoration-secondary/30 underline-offset-8">
                            Empowerment Through <br /> Sustainable Action.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative border-[8px] border-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                <img 
                                    src={program.image} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" 
                                    alt={program.title} 
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-700"></div>
                                <div className="absolute top-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg border border-primary/5">
                                    <ArrowUpRight className="w-5 h-5 text-primary" strokeWidth={3} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-primary uppercase mb-4 px-4 group-hover:text-secondary transition-colors leading-none tracking-tighter">
                                {program.title}
                            </h3>
                            <p className="text-primary/60 font-body text-sm leading-relaxed px-4 line-clamp-3">
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

