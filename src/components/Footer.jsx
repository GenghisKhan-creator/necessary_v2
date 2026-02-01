import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigation = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "PROGRAMS", href: "/programs" },
        { name: "STORIES", href: "/#stories" },
    ];

    const impactAreas = [
        { name: "EDUCATION", href: "/programs" },
        { name: "GBV ACTION", href: "/programs" },
        { name: "YOUTH JOBS", href: "/programs" },
        { name: "ADVOCACY", href: "/programs" },
    ];

    return (
        <footer className="bg-primary text-white pt-20 md:pt-40 pb-12 overflow-hidden border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-16 md:mb-32">
                    <div className="w-full lg:w-1/3 space-y-8 md:space-y-12">
                        <div className="flex items-center gap-4 md:gap-6">
                            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 md:w-20 md:h-20 rounded-full grayscale" />
                            <div className="flex flex-col">
                                <span className="text-lg md:text-2xl font-display tracking-[0.1em] font-bold uppercase">Necessary Aid</span>
                                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-secondary uppercase">Alliance NGO</span>
                            </div>
                        </div>
                        <p className="font-body text-white/40 leading-relaxed text-xs md:text-sm tracking-wide max-w-md">
                            A YOUTH-LED CATALYST FOR SUSTAINABLE TRANSFORMATION IN THE UPPER WEST REGION OF GHANA. WE ARE THE ARCHITECTS OF OUR OWN FUTURE.
                        </p>
                        <div className="flex gap-6 md:gap-8">
                            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/30 hover:text-secondary transition-colors">
                                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
                        <div className="space-y-6 md:space-y-8">
                            <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/20">Navigation</p>
                            <ul className="space-y-3 md:space-y-4">
                                {navigation.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-[10px] md:text-sm font-display tracking-widest hover:text-secondary transition-colors uppercase">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6 md:space-y-8">
                            <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/20">Impact Areas</p>
                            <ul className="space-y-3 md:space-y-4">
                                {impactAreas.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-[10px] md:text-sm font-display tracking-widest hover:text-secondary transition-colors uppercase">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1 flex items-end justify-start md:justify-end mt-8 md:mt-0">
                            <button
                                onClick={scrollToTop}
                                className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/5 flex items-center justify-center group hover:border-secondary transition-all"
                            >
                                <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white/30 group-hover:text-secondary group-hover:-translate-y-2 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="font-mono text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-white/20">© 2026 NECESSARY AID ALLIANCE / PROJECT: UPPER WEST GHANA</p>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse"></div>
                        <p className="font-mono text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-white/20">Operational Status: Positive</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full opacity-[0.01] pointer-events-none select-none hidden md:block">
                <span className="text-[25vw] font-display leading-[0.7] tracking-tighter">NECESSARY</span>
            </div>
        </footer>
    );
};

export default Footer;
