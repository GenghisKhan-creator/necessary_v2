import React from "react";
import { ArrowUp, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-primary text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-white/10 pb-20 mb-12">
                    <div className="max-w-sm space-y-8">
                        <Link to="/" className="flex items-center gap-3">
                             <img src="/logo.jpg" className="w-10 h-10 rounded-full border border-white/10" alt="Logo" />
                             <span className="text-xl font-display font-bold tracking-tight uppercase">Necessary Aid</span>
                        </Link>
                        <p className="text-white/40 font-body text-sm leading-relaxed">
                            A youth-led catalyst for sustainable transformation in the Upper West Region of Ghana. Building brighter paths together.
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Links</h4>
                            <ul className="space-y-4 text-sm font-medium text-white/60">
                                <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                                <li><Link to="/programs" className="hover:text-white transition-colors">What We Do</Link></li>
                                <li><Link to="/stories" className="hover:text-white transition-colors">Testimonials</Link></li>
                                <li><Link to="/news" className="hover:text-white transition-colors">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-secondary">Contact</h4>
                            <ul className="space-y-4 text-sm font-medium text-white/60">
                                <li>Wa, Upper West</li>
                                <li>Ghana, West Africa</li>
                                <li>info@necessaryaid.org</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
                        © 2026 NECESSARY AID ALLIANCE. ALL RIGHTS RESERVED.
                    </p>
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-2 group text-white/40 hover:text-white transition-colors"
                    >
                        <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Back to top</span>
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

