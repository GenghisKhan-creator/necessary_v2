import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SplitText = ({ children, className = "", delay = 0 }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const chars = el.innerText.split("");
        el.innerHTML = chars
            .map((char) => `<span class="inline-block translate-y-[110%] opacity-0 char-inner">${char === " " ? "&nbsp;" : char}</span>`)
            .join("");

        const ctx = gsap.context(() => {
            gsap.to(el.querySelectorAll(".char-inner"), {
                y: 0,
                opacity: 1,
                stagger: 0.02,
                delay,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        }, el);

        return () => ctx.revert();
    }, [children, delay]);

    return (
        <div ref={textRef} className={`overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export default SplitText;
