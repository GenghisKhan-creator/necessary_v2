import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsap";

const Contact = () => {
    const revealRef = useGsapReveal({ y: 60, stagger: 0.15 });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <section id="contact" className="py-40 bg-primary text-white overflow-hidden relative border-t border-white/5">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary opacity-5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 lg:items-start" ref={revealRef}>
                    <div className="lg:w-1/2 space-y-20">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-12 bg-secondary"></div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-secondary">Inquiry</span>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-display leading-[0.85] tracking-tighter text-white uppercase break-words">
                                START THE <br />
                                <span className="text-white/30 italic">CONVERSATION.</span>
                            </h2>
                        </div>

                        <div className="space-y-12">
                            {[
                                { label: "Location", val: "WA, UPPER WEST REGION, GHANA" },
                                { label: "Electronic", val: "COMMUNITY@NECESSARYAID.ORG" },
                                { label: "Direct Line", val: "+233 501 234 567" }
                            ].map((item, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/40 mb-2 transition-colors group-hover:text-secondary">{item.label}</p>
                                    <p className="text-xl md:text-2xl font-display tracking-wide group-hover:translate-x-4 transition-transform duration-500 uppercase">{item.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        {isSubmitted ? (
                            <div className="bg-primary-dark p-12 md:p-24 ring-1 ring-white/5 flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-700">
                                <CheckCircle2 className="w-20 h-20 text-secondary" />
                                <h3 className="text-3xl md:text-5xl font-display tracking-tight uppercase">Manifesto Received.</h3>
                                <p className="font-body text-white/40 leading-relaxed uppercase tracking-widest text-xs max-w-xs">
                                    Your voice has been recorded. Our regional architects will connect with you within 48 operational hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="font-mono text-[10px] text-secondary tracking-widest border-b border-secondary/30 pb-1 hover:border-secondary transition-all"
                                >
                                    SEND ANOTHER MESSAGE
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12 bg-primary-dark p-12 md:p-16 ring-1 ring-white/5 relative group overflow-hidden">
                                {/* Decorative line animate reveal */}
                                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 group-hover:bg-secondary/20 transition-colors duration-1000"></div>

                                <div className="relative z-10 space-y-12">
                                    {[
                                        { id: "name", label: "Identifier", type: "text", placeholder: "Full Name" },
                                        { id: "email", label: "Verification", type: "email", placeholder: "Email Address" }
                                    ].map((item) => (
                                        <div key={item.id} className="space-y-4 group/input">
                                            <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-secondary transition-colors">{item.label}</label>
                                            <input
                                                required
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-secondary outline-none transition-all font-display text-xl placeholder:text-white/5 uppercase"
                                            />
                                        </div>
                                    ))}

                                    <div className="space-y-4 group/input">
                                        <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-secondary transition-colors">Expression</label>
                                        <textarea
                                            required
                                            rows="4"
                                            placeholder="Your Message..."
                                            className="w-full bg-transparent border-b border-white/10 py-4 focus:border-secondary outline-none transition-all font-display text-xl placeholder:text-white/5 resize-none uppercase"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-6 bg-secondary text-primary font-display tracking-[0.2em] font-bold hover:bg-white transition-all flex justify-between px-8 items-center group/btn relative overflow-hidden"
                                    >
                                        <span className="relative z-10">{loading ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
                                        {!loading && <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform relative z-10" />}
                                        {/* Wipe effect */}
                                        <div className="absolute inset-0 bg-white translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
