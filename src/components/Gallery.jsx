import React, { useState } from "react";
import { useGsapReveal } from "../hooks/useGsap";
import { X, Maximize2 } from "lucide-react";

const images = [
    { src: "/images/youth_empowerment.jpg", title: "EMPOWERMENT", category: "01" },
    { src: "/images/girl_edu.jpg", title: "LITERACY", category: "02" },
    { src: "/images/gbv.jpg", title: "SOLIDARITY", category: "03" },
    { src: "/images/mission_culture.jpg", title: "COMMUNITY", category: "04" },
];

const Gallery = () => {
    const revealRef = useGsapReveal({ y: 60, stagger: 0.15 });
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="gallery" className="py-24 md:py-48 px-6 md:px-12 bg-white text-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-accent-green"></div>
                            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-primary/40 font-bold">The Visual Archive</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display leading-[0.85] tracking-tighter uppercase text-primary">
                            DOCUMENTING <br />
                            <span className="text-secondary italic">REAL IMPACT</span>.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]" ref={revealRef}>
                    {/* Main Featured Image (Left) */}
                    <div
                        onClick={() => setSelectedImg(images[0])}
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[3rem] bg-premium-cream cursor-pointer shadow-xl border border-primary/5"
                    >
                        <img
                            src={images[0].src}
                            className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                            alt="Archive Image"
                        />
                        <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 bg-accent-green p-6 md:p-8 rounded-[2rem] transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 shadow-2xl">
                             <h3 className="text-xl md:text-2xl font-display tracking-tight text-white mb-2">Be part of a growing community.</h3>
                             <p className="font-mono text-[9px] text-white/80 uppercase tracking-widest leading-loose">One meal at a time. One less empty stomach.</p>
                        </div>
                        
                        <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Top Right */}
                    <div
                        onClick={() => setSelectedImg(images[1])}
                        className="md:col-span-2 group relative overflow-hidden rounded-[3rem] bg-premium-cream cursor-pointer shadow-lg border border-primary/5"
                    >
                        <img
                            src={images[1].src}
                            className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-110"
                            alt="Archive Image"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute bottom-10 left-10 flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center">
                                <span className="font-mono text-xs">{images[1].category}</span>
                             </div>
                             <h4 className="text-xl font-display text-white tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-500">{images[1].title}</h4>
                        </div>
                    </div>

                    {/* Bottom Center */}
                    <div
                        onClick={() => setSelectedImg(images[2])}
                        className="group relative overflow-hidden rounded-[3rem] bg-premium-cream cursor-pointer shadow-lg border border-primary/5"
                    >
                        <img
                            src={images[2].src}
                            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            alt="Archive Image"
                        />
                         <div className="absolute inset-0 bg-accent-green/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Bottom Right */}
                    <div
                        onClick={() => setSelectedImg(images[3])}
                        className="group relative overflow-hidden rounded-[3rem] bg-premium-cream cursor-pointer shadow-xl border border-primary/5"
                    >
                        <img
                            src={images[3].src}
                            className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                            alt="Archive Image"
                        />
                         <div className="absolute inset-x-4 bottom-4 bg-accent-green p-6 rounded-[2.5rem] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 shadow-2xl">
                             <p className="font-mono text-[8px] text-white leading-relaxed font-bold uppercase tracking-widest">
                                Together, we can turn surplus into smiles.
                             </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 md:mt-32 flex flex-col items-center gap-8 text-center">
                    <button className="group relative px-12 py-6 overflow-hidden rounded-full border border-primary/10 hover:border-secondary transition-colors bg-premium-cream shadow-lg">
                        <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.5em] text-primary/60 group-hover:text-primary transition-colors font-bold">Explore the full story</span>
                        <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                    <p className="font-mono text-[8px] text-primary/10 tracking-[1em] uppercase">Visual Chronicle / NAA_2026</p>
                </div>
            </div>

            {/* Gallery Lightbox */}
            {selectedImg && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
                    <div
                        className="absolute inset-0 bg-primary/95 backdrop-blur-2xl"
                        onClick={() => setSelectedImg(null)}
                    ></div>

                    <button
                        onClick={() => setSelectedImg(null)}
                        className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white transition-all z-10"
                    >
                        <X className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    <div className="relative w-full max-w-6xl aspect-video overflow-hidden ring-1 ring-white/10 shadow-2xl animate-in zoom-in-95 duration-500">
                        <img
                            src={selectedImg.src}
                            className="w-full h-full object-cover"
                            alt="Enlarged Archive"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="font-mono text-xs text-secondary tracking-widest uppercase mb-2 block">{selectedImg.category}</span>
                            <h3 className="text-3xl md:text-5xl font-display tracking-tight uppercase">{selectedImg.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
