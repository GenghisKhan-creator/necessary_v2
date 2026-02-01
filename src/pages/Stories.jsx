import React, { useState } from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { ArrowRight, Play, X } from "lucide-react";

const stories = [
    {
        id: "01",
        title: "THE SUN OF LAWRA",
        name: "Abigail N.",
        location: "Lawra District",
        category: "INNOVATION",
        image: "/images/story_innovation.jpg",
        excerpt: "How a 19-year-old girl is bringing sustainable energy to her community through NAA's youth enterprise hub.",
        fullContent: "Abigail was one of the first students to join our Technical Skills initiative in Lawra. Coming from a family of traditional farmers, she saw the potential of solar energy to transform irrigation. Today, she leads a team of four other youth, installing small-scale solar grids that have increased local crop yields by 40%."
    },
    {
        id: "02",
        title: "THE WISDOM OF WA",
        name: "Baba Salifu",
        location: "Wa Municipal",
        category: "LITERACY",
        image: "/images/story_elder.jpg",
        excerpt: "An elder's journey from illiteracy to becoming a vocal advocate for girl child education in the Upper West Region.",
        fullContent: "Baba Salifu never had the chance to attend school. For 60 years, he believed education was for 'others'. After participating in NAA's adult literacy action, he not only learned to read but became the primary advocate for sending every girl in his compound to school. 'My eyes were closed for 60 years,' he says. 'Now I am wide awake.'"
    },
    {
        id: "03",
        title: "SOLIDARITY SHIELD",
        name: "Community Circle",
        location: "Sissala West",
        category: "GBV ACTION",
        image: "/images/gbv.jpg",
        excerpt: "A collective of women standing together to end the cycle of violence through economic independence.",
        fullContent: "In Sissala West, the cycle of Gender Based Violence was often tied to economic dependence. NAA helped form a 'Solidarity Shield' collective—a combined savings group and safe house. By gaining financial independence, these women have halved the reported cases of domestic violence in their district within 24 months."
    }
];

const Stories = () => {
    const [selectedStory, setSelectedStory] = useState(null);
    const revealRef = useGsapReveal({ y: 50, stagger: 0.1 });

    return (
        <div className="bg-primary text-white min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-secondary/50"></div>
                        <span className="font-mono text-xs tracking-[0.5em] text-secondary uppercase">The Human Element</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                        STORIES OF <br />
                        <span className="text-white italic opacity-20">SOVEREIGNTY.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" ref={revealRef}>
                    {stories.map((story, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedStory(story)}
                            className="group relative cursor-pointer overflow-hidden border border-white/5 bg-primary-dark rounded-sm transition-all hover:border-secondary/30"
                        >
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <img
                                    src={story.image}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    alt={story.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                                <div className="absolute top-6 left-6 flex items-center gap-3">
                                    <span className="font-mono text-[8px] text-secondary bg-black/50 px-2 py-1 backdrop-blur-md tracking-widest">{story.category}</span>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="font-mono text-[10px] text-white/40 block mb-2">{story.location}</span>
                                    <h3 className="text-2xl md:text-3xl font-display leading-tight uppercase tracking-tight mb-4 group-hover:text-secondary transition-colors">
                                        {story.title}
                                    </h3>
                                    <button className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-white/60 group-hover:text-white transition-all uppercase">
                                        READ STORY <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Story Modal */}
            {selectedStory && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
                    <div
                        className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
                        onClick={() => setSelectedStory(null)}
                    ></div>

                    <div className="relative w-full max-w-5xl bg-primary-dark border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row h-full max-h-[85vh] shadow-2xl">
                        <button
                            onClick={() => setSelectedStory(null)}
                            className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                            <img src={selectedStory.image} className="w-full h-full object-cover grayscale brightness-90" alt="Full Story Image" />
                        </div>

                        <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="font-mono text-xs text-secondary tracking-widest uppercase">{selectedStory.category}</span>
                                <div className="h-[1px] w-8 bg-secondary/30"></div>
                                <span className="font-mono text-[10px] text-white/30 uppercase">{selectedStory.location}</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display leading-none tracking-tighter mb-4 uppercase break-words">{selectedStory.title}</h2>
                            <p className="text-xl md:text-2xl font-display text-white italic mb-12 opacity-60 font-bold">"{selectedStory.name}"</p>

                            <div className="space-y-6 max-w-lg">
                                <p className="font-body text-base md:text-lg text-white/70 leading-relaxed tracking-wide">
                                    {selectedStory.fullContent}
                                </p>
                                <div className="pt-8 border-t border-white/5">
                                    <button className="flex items-center gap-4 py-4 px-8 border border-white/10 rounded-full font-mono text-[10px] tracking-widest hover:border-secondary hover:text-secondary transition-all uppercase">
                                        <Play className="w-4 h-4 fill-current" /> WATCH VIDEO INTERVIEW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stories;
