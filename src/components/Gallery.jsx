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
        <section id="gallery" className="py-20 md:py-40 px-6 md:px-12 bg-[#051c22] text-white relative overflow-hidden">
            {/* Structural Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-8 md:w-12 bg-secondary"></div>
                            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-secondary">The Archive</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-display leading-[0.85] tracking-tighter uppercase break-words">
                            DOCUMENTING <br />
                            <span className="text-white/30 italic">TRUTH</span>.
                        </h2>
                    </div>
                    <div className="text-left md:text-right space-y-4">
                        <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/40 max-w-[200px] leading-relaxed md:ml-auto">
                            A VISUAL CHRONICLE OF SUSTAINABLE ACTION ACROSS THE UPPER WEST REGION / 2020-2024
                        </p>
                        <div className="h-[1px] w-12 md:w-24 bg-white/10 md:ml-auto"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12" ref={revealRef}>
                    {/* Featured Image */}
                    <div
                        onClick={() => setSelectedImg(images[0])}
                        className="md:col-span-8 group relative aspect-square sm:aspect-video overflow-hidden ring-1 ring-white/5 bg-primary-dark cursor-pointer"
                    >
                        <img
                            src={images[0].src}
                            className="w-full h-full object-cover grayscale brightness-75 lg:group-hover:grayscale-0 lg:group-hover:brightness-100 transition-all duration-[1s] ease-out"
                            alt="Archive Image"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-100 lg:group-hover:opacity-0 transition-opacity duration-700"></div>

                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/80 backdrop-blur-md">
                                <Maximize2 className="w-5 h-5 text-primary" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-col items-start gap-2 md:gap-4 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-700">
                            <span className="font-mono text-[8px] md:text-[10px] text-secondary bg-black/50 px-2 md:px-3 py-1 backdrop-blur-md tracking-widest">{images[0].category}</span>
                            <h3 className="text-3xl md:text-6xl font-display tracking-tight text-white drop-shadow-2xl">{images[0].title}</h3>
                        </div>
                    </div>

                    {/* Secondary Images */}
                    <div className="md:col-span-4 flex flex-col gap-8 md:gap-12">
                        {images.slice(1).map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImg(img)}
                                className="group relative aspect-square sm:aspect-video md:aspect-auto md:flex-1 overflow-hidden ring-1 ring-white/5 bg-primary-dark cursor-pointer"
                            >
                                <img
                                    src={img.src}
                                    className="w-full h-full object-cover grayscale brightness-75 lg:group-hover:grayscale-0 lg:group-hover:brightness-100 lg:group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                                    alt="Archive Image Small"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-100 lg:group-hover:opacity-0 transition-opacity duration-700"></div>
                                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-3 md:gap-4 lg:group-hover:translate-x-2 transition-transform duration-500">
                                    <span className="font-mono text-[7px] md:text-[8px] text-white/50 tracking-[0.2em]">{img.category}</span>
                                    <h4 className="text-lg md:text-xl font-display tracking-tight text-white uppercase">{img.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 md:mt-32 flex flex-col items-center gap-6 md:gap-8 text-center">
                    <div className="h-20 md:h-32 w-[1px] bg-gradient-to-b from-white/20 to-transparent"></div>
                    <button className="group relative px-8 md:px-12 py-4 md:py-6 overflow-hidden border border-white/10 hover:border-secondary transition-colors">
                        <span className="relative z-10 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-white/60 group-hover:text-primary transition-colors">View Full Collection</span>
                        <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                    <p className="font-mono text-[7px] text-white/10 tracking-[1em] uppercase">Archive_Ref: NAA_2026_COL</p>
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
