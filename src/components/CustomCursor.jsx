import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [cursorContent, setCursorContent] = useState("");

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const onMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;

            gsap.to(cursor, {
                x,
                y,
                duration: 0.1,
                ease: "power2.out"
            });

            gsap.to(follower, {
                x,
                y,
                duration: 0.5,
                ease: "power3.out"
            });
        };

        const onMouseEnterLink = (e) => {
            const flavor = e.target.getAttribute("data-cursor");
            setCursorContent(flavor || "VIEW");

            gsap.to(follower, {
                scale: 4,
                backgroundColor: "rgba(255, 87, 34, 0.9)",
                duration: 0.3
            });
            gsap.to(cursor, { scale: 0, duration: 0.2 });
        };

        const onMouseLeaveLink = () => {
            setCursorContent("");
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                duration: 0.3
            });
            gsap.to(cursor, { scale: 1, duration: 0.2 });
        };

        window.addEventListener("mousemove", onMouseMove);

        const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnterLink);
            el.addEventListener("mouseleave", onMouseLeaveLink);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnterLink);
                el.removeEventListener("mouseleave", onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
            ></div>
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hidden md:block"
            >
                <span className="text-[3px] font-mono font-bold text-primary uppercase tracking-tighter">
                    {cursorContent}
                </span>
            </div>
        </>
    );
};

export default CustomCursor;
