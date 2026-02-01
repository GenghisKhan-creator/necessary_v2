import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => (prev < 100 ? prev + 1 : 100));
        }, 15);

        const tl = gsap.timeline();

        tl.to(".preloader-text", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        });

        if (counter === 100) {
            clearInterval(interval);
            tl.to(".preloader-counter", {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: "power2.in"
            })
                .to(".preloader-text", {
                    y: -100,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: "power4.in"
                })
                .to(".preloader-container", {
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    duration: 1.2,
                    ease: "expo.inOut"
                });
        }

        return () => clearInterval(interval);
    }, [counter]);

    return (
        <div className="preloader-container fixed inset-0 z-[1000] bg-[#051c22] flex flex-col items-center justify-center overflow-hidden">
            <div className="relative overflow-hidden mb-8">
                <div className="flex flex-col items-center gap-2">
                    <span className="preloader-text opacity-0 translate-y-10 font-mono text-[8px] tracking-[0.8em] text-secondary uppercase">Sovereignty</span>
                    <span className="preloader-text opacity-0 translate-y-10 font-mono text-[8px] tracking-[0.8em] text-white/40 uppercase">Authenticity</span>
                    <span className="preloader-text opacity-0 translate-y-10 font-mono text-[8px] tracking-[0.8em] text-white/20 uppercase">Radical Aid</span>
                </div>
            </div>

            <div className="preloader-counter absolute bottom-20 font-display text-4xl text-white tracking-tighter italic">
                {counter}%
            </div>

            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/5"></div>
        </div>
    );
};

export default Preloader;
