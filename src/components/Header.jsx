import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const navLinks = [
    { name: "HOME", href: "/", image: "/images/youth_empowerment.jpg", sub: "The Genesis" },
    { name: "ABOUT", href: "/about", image: "/images/mission_culture.jpg", sub: "The Roots" },
    { name: "LEADERS", href: "/leaders", image: "/images/leader_dir.jpg", sub: "The Architects" },
    { name: "PROGRAMS", href: "/programs", image: "/images/girl_edu.jpg", sub: "The Modalities" },
    { name: "STORIES", href: "/stories", image: "/images/story_innovation.jpg", sub: "The Human Element" },
    { name: "TIMELINE", href: "/timeline", image: "/images/timeline_founding.jpg", sub: "The Evolution" },
    { name: "DASHBOARD", href: "/dashboard", image: "/images/dashboard_visual.jpg", sub: "The Analytics" },
    { name: "NEWS", href: "/news", image: "/images/news_award.jpg", sub: "The Dispatches" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeImg, setActiveImg] = useState(navLinks[0].image);
    const [activeSub, setActiveSub] = useState(navLinks[0].sub);
    const menuRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            const tl = gsap.timeline();
            tl.fromTo(".menu-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power2.out" }
            );
            tl.fromTo(".menu-sidebar",
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const handleHover = (image, sub) => {
        setActiveImg(image);
        setActiveSub(sub);
    };

    return (
        <>
            {/* Main Header */}
            <div className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 z-[90] flex justify-between items-center pointer-events-none">
                <Link to="/" className="flex items-center gap-4 pointer-events-auto group">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full ring-1 ring-white/10 group-hover:ring-secondary transition-all">
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex flex-col hidden sm:flex">
                        <span className="text-xs md:text-sm font-display tracking-[0.1em] text-white font-bold leading-none mb-1">NECESSARY AID ALLIANCE</span>
                        <span className="text-[7px] md:text-[8px] font-mono tracking-[0.3em] text-secondary/70 uppercase">Sovereignty through service</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-6 pointer-events-auto">
                    <Link
                        to="/donate"
                        className="bg-secondary text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-mono text-[9px] md:text-[10px] tracking-widest font-bold shadow-xl hover:bg-white hover:text-primary transition-all duration-300"
                    >
                        DONATE
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="group flex flex-col items-end gap-1.5 p-2 transition-transform hover:scale-110 active:scale-90"
                    >
                        <div className="w-8 h-[2px] bg-white group-hover:bg-secondary transition-colors"></div>
                        <div className="w-6 h-[2px] bg-white group-hover:bg-secondary transition-colors"></div>
                    </button>
                </div>
            </div>

            {/* Global Menu Overlay */}
            <div
                ref={menuRef}
                className={`fixed inset-0 z-[100] bg-[#051c22] transition-all duration-700 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            >
                <div className="absolute inset-0 flex flex-col lg:flex-row h-full">

                    {/* Left: Navigation Links */}
                    <div className="w-full lg:w-[60%] h-full p-8 md:p-20 flex flex-col justify-between relative overflow-hidden">
                        <div className="flex justify-between items-center mb-12">
                            <span className="font-mono text-[9px] tracking-[0.4em] text-white/30 uppercase">Menu</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-secondary hover:border-secondary transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] custom-scrollbar pr-4">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onMouseEnter={() => handleHover(link.image, link.sub)}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`menu-link group text-4xl sm:text-5xl md:text-7xl font-display leading-tight flex items-baseline gap-4 transition-all ${pathname === link.href ? "text-secondary" : "text-white/20 hover:text-white"}`}
                                >
                                    <span className="text-[10px] font-mono text-secondary/30 group-hover:text-secondary transition-colors">0{i + 1}</span>
                                    <span className="tracking-tight uppercase">{link.name}</span>
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-8 pt-8 border-t border-white/5 flex gap-8 justify-between">
                            <div className="flex gap-6">
                                {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
                                    <Icon key={idx} className="w-4 h-4 text-white/30 hover:text-secondary cursor-pointer transition-colors" />
                                ))}
                            </div>
                            <p className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase hidden sm:block">Upper West Region, Ghana</p>
                        </div>
                    </div>

                    {/* Right: Preview & Visuals */}
                    <div className="hidden lg:flex w-[40%] h-full bg-black/20 relative overflow-hidden menu-sidebar border-l border-white/5">
                        <div className="absolute inset-0">
                            {navLinks.map((link) => (
                                <img
                                    key={link.name}
                                    src={link.image}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeImg === link.image ? "opacity-20" : "opacity-0"}`}
                                    alt="Preview"
                                />
                            ))}
                        </div>

                        <div className="relative z-10 self-end p-20 w-full">
                            <div className="space-y-4">
                                <div className="h-[1px] w-12 bg-secondary"></div>
                                <span className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase block">{activeSub}</span>
                                <h3 className="text-4xl font-display text-white italic tracking-tighter opacity-10 uppercase">Archive</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
