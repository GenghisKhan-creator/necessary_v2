import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const slides = [
    {
        title: "YOUTH",
        subtitle: "LEADERS",
        layout: "left",
        image: "/images/youth_empowerment.jpg",
        description: "BEYOND AID. TOWARDS SOVEREIGN GROWTH.",
        meta: "01 / GENERATION_Z"
    },
    {
        title: "GIRL CHILD",
        subtitle: "EDUCATION",
        layout: "right",
        image: "/images/girl_edu.jpg",
        description: "EVERY GIRL A LEADER. EVERY VILLAGE A UNIVERSE.",
        meta: "02 / LITERACY_ACT"
    },
    {
        title: "PROTECT",
        subtitle: "DIGNITY",
        layout: "bottom",
        image: "/images/gbv.jpg",
        description: "RESTORING DIGNITY. AMPLIFYING VOICES OF STRENGTH.",
        meta: "03 / JUSTICE_HUB"
    }
];

const Hero = () => {
    const heroRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const isAnimating = useRef(false);

    const animateSlide = (direction) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    isAnimating.current = false;
                }
            });

            // Outgoing - more dramatic "un-reveal"
            tl.to(".slide-content-item", {
                opacity: 0,
                x: direction === "next" ? -40 : 40,
                filter: "blur(10px)",
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.in"
            });

            tl.to(".bg-image", {
                scale: 1.1,
                opacity: 0.3,
                duration: 0.8,
                ease: "power2.inOut"
            }, "-=0.6");

            // Change State
            tl.add(() => {
                setCurrent(prev => direction === "next"
                    ? (prev + 1) % slides.length
                    : (prev - 1 + slides.length) % slides.length
                );
            });

            // Incoming
            tl.fromTo(".bg-image",
                { scale: 1.3, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: "power4.out" }
            );

            tl.fromTo(".slide-content-item",
                { opacity: 0, x: direction === "next" ? 60 : -60, filter: "blur(10px)" },
                { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.4, ease: "expo.out", stagger: 0.1 },
                "-=1.5"
            );
        }, heroRef);
    };

    const next = () => animateSlide("next");
    const prev = () => animateSlide("prev");

    useEffect(() => {
        const interval = setInterval(next, 10000);
        return () => clearInterval(interval);
    }, [current]);

    const slide = slides[current];

    // Helper for layout positioning
    const getLayoutClasses = (layout) => {
        switch (layout) {
            case 'left': return "items-start text-left ml-4 md:ml-20";
            case 'right': return "items-end text-right mr-4 md:mr-20";
            case 'bottom': return "items-center text-center mt-auto mb-20 md:mb-32";
            default: return "items-center text-center";
        }
    };

    return (
        <section ref={heroRef} className="relative h-screen w-full bg-[#051c22] overflow-hidden flex items-center">
            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={slide.image}
                    alt="Background"
                    className="bg-image w-full h-full object-cover brightness-[0.35] grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-transparent to-black/40"></div>

                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <div className="absolute top-1/4 w-full h-[1px] bg-white"></div>
                    <div className="absolute top-2/3 w-full h-[1px] bg-white"></div>
                    <div className="absolute left-1/3 h-full w-[1px] bg-white"></div>
                    <div className="absolute right-1/4 h-full w-[1px] bg-white"></div>
                </div>
            </div>

            {/* Content Layer with dynamic placement */}
            <div className={`relative z-10 w-full flex flex-col justify-center px-6 lg:px-24 h-full ${getLayoutClasses(slide.layout)}`}>

                {/* Architectural Stamp */}
                <div className="slide-content-item flex items-center gap-4 mb-4">
                    <span className="font-mono text-[8px] md:text-[10px] tracking-[0.6em] text-secondary uppercase whitespace-nowrap">
                        {slide.meta}
                    </span>
                    <div className="h-[1px] w-8 md:w-24 bg-secondary/30"></div>
                </div>

                <h1 className="slide-content-item text-6xl sm:text-8xl lg:text-[10rem] xl:text-[11rem] font-display text-white leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl break-words">
                    {slide.title} <br />
                    <span className="text-secondary italic text-5xl sm:text-8xl lg:text-[10rem] xl:text-[11rem]">{slide.subtitle}</span>
                </h1>

                <p className="slide-content-item font-body text-[10px] md:text-sm text-white/50 tracking-[0.3em] max-w-lg uppercase leading-relaxed mb-12">
                    {slide.description}
                </p>

                <div className="slide-content-item flex flex-wrap gap-4 md:gap-8">
                    <a href="/donate" className="group relative bg-secondary text-primary px-10 py-5 rounded-sm font-mono text-[10px] tracking-[0.3em] font-bold overflow-hidden">
                        <span className="relative z-10">CONTRIBUTE</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </a>
                    <a href="/about" className="group relative border border-white/20 text-white px-10 py-5 rounded-sm font-mono text-[10px] tracking-[0.3em] overflow-hidden">
                        <span className="relative z-10">THE ARCHIVE</span>
                        <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </a>
                </div>
            </div>

            {/* Vertical Marker - Far Right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-10 opacity-30 mini-hidden">
                <span className="font-mono text-[8px] tracking-[1em] text-white uppercase -rotate-90 origin-center whitespace-nowrap">
                    UPPER WEST REGION / GHANA
                </span>
                <div className="h-40 w-[1px] bg-white/20"></div>
            </div>

            {/* UI Layer: Nav Controls (Slightly Offset) */}
            <div className="absolute bottom-12 right-12 z-50 flex items-center gap-8">
                <div className="flex gap-2 h-[2px]">
                    {slides.map((_, i) => (
                        <div key={i} className={`h-full transition-all duration-700 ${i === current ? "w-16 bg-secondary" : "w-4 bg-white/10"}`}></div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <button onClick={prev} className="w-12 h-12 flex items-center justify-center border border-white/5 hover:border-secondary text-white transition-all bg-black/20 backdrop-blur-md">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="w-12 h-12 flex items-center justify-center border border-white/5 hover:border-secondary text-white transition-all bg-black/20 backdrop-blur-md">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Location Coordinate - Left Bottom */}
            <div className="absolute bottom-12 left-12 z-20 hidden md:block">
                <p className="font-mono text-[8px] tracking-[0.5em] text-white/20 uppercase">
                    Coord: 10.0601° N, 2.5099° W
                </p>
            </div>
        </section>
    );
};

export default Hero;
