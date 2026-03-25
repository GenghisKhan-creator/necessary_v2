import React, { useState } from "react";
import { ArrowRight, Menu, X, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { name: "Our Story", href: "/about" },
    { name: "What We Do", href: "/programs" },
    { name: "Testimonials", href: "/stories" },
    { name: "FAQs", href: "/news" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <header className="fixed top-6 left-0 w-full z-[100]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md rounded-full mx-6 md:mx-auto flex justify-between items-center shadow-sm border border-black/5">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/logo.jpg" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm border border-black/5" alt="Logo" />
                    <span className="text-lg font-display text-primary font-bold tracking-tight uppercase">NECESSARY AID</span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href}
                            className={`font-body text-[13px] font-bold transition-all hover:text-secondary ${pathname === link.href ? "text-primary" : "text-primary/60"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Donate Now Button */}
                <div className="flex items-center gap-6">
                    <Link
                        to="/donate"
                        className="group flex items-center bg-secondary hover:bg-secondary/90 text-primary px-1.5 py-1.5 pl-5 rounded-full font-body text-[13px] font-bold transition-all duration-300 shadow-sm"
                    >
                        Donate Now
                        <div className="ml-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowRight className="w-4 h-4 text-secondary" />
                        </div>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-primary"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-24 left-6 right-6 bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl overflow-hidden ${isMenuOpen ? "h-64 border border-black/5 p-6" : "h-0"}`}
            >
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-body text-lg font-bold text-primary hover:text-secondary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;


