import React from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { Heart, BookOpen, Users, ExternalLink } from "lucide-react";

const categories = [
    {
        title: "HEALTH",
        percentage: "65%",
        stats: "17 Thousand People Reached",
        description: "Medical outreach and restoration of primary healthcare in remote villages.",
        icon: Heart,
        color: "bg-[#0d5969]",
        textColor: "text-white",
        image: "/images/gbv.jpg"
    },
    {
        title: "EDUCATION",
        percentage: "85%",
        stats: "2.5k Girls Sponsored",
        description: "Breaking barriers to literacy through radical scholarship programs.",
        icon: BookOpen,
        color: "bg-[#34d399]",
        textColor: "text-primary",
        image: "/images/girl_edu.jpg"
    },
    {
        title: "LEADERSHIP",
        percentage: "100%",
        stats: "5000+ Youth Involved",
        description: "Architecting the future through community-led sovereignty projects.",
        icon: Users,
        color: "bg-premium-cream",
        textColor: "text-primary",
        image: "/images/youth_empowerment.jpg"
    }
];

const ValueCards = () => {
    const reveal = useGsapReveal({ y: 50, stagger: 0.2 });

    return (
        <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-accent-green"></div>
                            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-primary/40 font-bold">Our Verticals</span>
                        </div>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-display leading-[0.85] tracking-tighter uppercase text-primary">
                            Great futures built <br />
                            with <span className="text-secondary italic">small acts.</span>
                        </h2>
                    </div>
                    <p className="font-body text-primary/50 text-xs md:text-sm tracking-widest uppercase mb-4">
                        Scroll to explore impact / 2024
                    </p>
                </div>

                <div ref={reveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {categories.map((cat, idx) => (
                        <div 
                            key={idx}
                            className={`group relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:-translate-y-4 ${cat.color} ${cat.textColor}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={cat.image} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
                                    alt={cat.title}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md`}>
                                        <cat.icon className="w-8 h-8" />
                                    </div>
                                    <span className="font-display text-4xl opacity-50">{cat.percentage}</span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-display mb-2">{cat.title}</h3>
                                        <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">{cat.stats}</p>
                                    </div>
                                    <p className="font-body text-sm leading-relaxed opacity-60">
                                        {cat.description}
                                    </p>
                                    
                                    <button className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase group/btn">
                                        Learn more 
                                        <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-primary transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueCards;
