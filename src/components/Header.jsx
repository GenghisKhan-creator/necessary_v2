import React, { useState } from "react";
import { ArrowRight, Menu, X, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/" },
    { 
        name: "About us", 
        href: "/about",
        subItems: [
            { name: "Team", href: "/leaders" }
        ]
    },
    { name: "What we do", href: "/programs" },
    { name: "Projects", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contacts", href: "/contact" },
    { name: "Blog", href: "/news" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedLink, setExpandedLink] = useState(null);
    const { pathname } = useLocation();

    const toggleSubMenu = (name) => {
        setExpandedLink(expandedLink === name ? null : name);
    };

    return (
        <header className="fixed top-6 left-0 w-full z-[100]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md rounded-full mx-6 md:mx-auto flex justify-between items-center shadow-sm border border-black/5">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
                    <img src="/logo.jpg" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm border border-black/5" alt="Logo" />
                    <span className="text-lg font-display text-primary font-bold tracking-tight uppercase hidden sm:block">NECESSARY AID</span>
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/item py-2">
                            <Link 
                                to={link.href}
                                className={`font-body text-[12px] font-bold transition-all hover:text-secondary ${pathname === link.href ? "text-primary" : "text-primary/60"}`}
                            >
                                {link.name}
                            </Link>

                            {/* Dropdown for sub-items */}
                            {link.subItems && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                                    <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xl p-2 min-w-[140px]">
                                        {link.subItems.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                to={sub.href}
                                                className="block px-4 py-2.5 rounded-xl font-body text-[11px] font-bold text-primary/60 hover:text-primary hover:bg-neutral-bg transition-all"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Donate Now Button (Hidden on Mobile) */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/donate"
                        className="hidden lg:flex items-center bg-secondary hover:bg-secondary/90 text-primary px-1.5 py-1.5 pl-5 rounded-full font-body text-[13px] font-bold transition-all duration-300 shadow-sm"
                    >
                        Donate Now
                        <div className="ml-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowRight className="w-4 h-4 text-secondary" />
                        </div>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-primary bg-primary/5 rounded-full"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-24 left-6 right-6 bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl border border-black/5 ${isMenuOpen ? "max-h-[85vh] p-8 overflow-y-auto opacity-100" : "max-h-0 p-0 opacity-0 overflow-hidden border-none"}`}
            >
                <nav className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <Link 
                                    to={link.href}
                                    onClick={() => !link.subItems && setIsMenuOpen(false)}
                                    className="font-body text-base font-bold text-primary hover:text-secondary transition-colors"
                                >
                                    {link.name}
                                </Link>
                                {link.subItems && (
                                    <button 
                                        onClick={() => toggleSubMenu(link.name)}
                                        className={`p-2 transition-transform duration-300 ${expandedLink === link.name ? "rotate-180 text-secondary" : "text-primary/20"}`}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Sub-items (Accordion) */}
                            {link.subItems && (
                                <div className={`overflow-hidden transition-all duration-300 ${expandedLink === link.name ? "max-h-20 mt-4 pl-4 border-l-2 border-primary/5" : "max-h-0"}`}>
                                    {link.subItems.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            to={sub.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block font-body text-sm font-bold text-primary/40 hover:text-secondary py-2"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="pt-4 mt-2 border-t border-black/5 flex justify-center">
                        <Link 
                            to="/donate"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-secondary hover:bg-secondary/90 text-primary px-2 py-2 pl-8 rounded-full font-body text-sm font-bold flex items-center justify-between w-full shadow-lg"
                        >
                            Donate Now
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-secondary" />
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};



export default Header;


