import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsap";

const testimonials = [
    {
        quote: "BEYOND EDUCATION, THIS ALLIANCE GAVE ME A SENSE OF SOVEREIGNTY. I AM NOT JUST A RECIPIENT; I AM A LEADER.",
        author: "KWAME A.",
        role: "YOUTH AMBASSADOR",
    },
    {
        quote: "SAFE SPACES FOR GIRLS ARE NOT A LUXURY; THEY ARE THE FOUNDATION OF OUR ENTIRE REGION'S PROGRESS.",
        author: "AMINATA S.",
        role: "ADVOCACY HUB LEAD",
    },
    {
        quote: "I LEARNED THAT MY VOICE HAS THE POWER TO CHANGE POLICY. WE ARE WRITING OUR OWN HISTORY NOW.",
        author: "FATIMA B.",
        role: "COMMUNITY LIAISON",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const revealRef = useGsapReveal({ y: 50 });

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="stories" className="py-20 md:py-40 bg-[#051c22] text-white overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={revealRef}>
                <div className="flex flex-col items-center text-center">
                    <Quote className="w-8 h-8 md:w-16 md:h-16 text-secondary mb-8 md:mb-12 opacity-50" />

                    <div className="relative w-full overflow-hidden min-h-[300px] flex items-center justify-center">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${idx === current ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90 pointer-events-none"}`}
                            >
                                <blockquote className="text-2xl sm:text-3xl md:text-5xl font-display leading-[1.1] tracking-tighter max-w-4xl mb-8 md:mb-12">
                                    "{t.quote}"
                                </blockquote>
                                <div className="space-y-2">
                                    <p className="font-mono text-xs md:text-sm text-secondary tracking-[0.3em] font-bold">{t.author}</p>
                                    <p className="font-mono text-[8px] md:text-[10px] text-white/40 tracking-[0.4em]">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-8 md:gap-12 mt-12 md:mt-20">
                        <button onClick={prev} className="hover:text-secondary transition-colors group">
                            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-2 transition-transform" />
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <div key={i} className={`h-1 transition-all duration-500 ${i === current ? "w-8 bg-secondary" : "w-4 bg-white/10"}`}></div>
                            ))}
                        </div>
                        <button onClick={next} className="hover:text-secondary transition-colors group">
                            <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
                <div className="grid grid-cols-6 h-full gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="border-r border-white/10 h-full"></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
