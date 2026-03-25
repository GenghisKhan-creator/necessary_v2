import React from "react";
import Contact from "../components/Contact";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="bg-primary min-h-screen">
            <div className="pt-48 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-secondary/50"></div>
                            <span className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase">Get in Touch</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-display font-medium leading-[0.8] tracking-tighter uppercase mb-12">
                            Connect <br />
                            <span className="text-secondary italic">With Us.</span>
                        </h1>
                        <p className="font-body text-xl text-white/40 max-w-2xl leading-relaxed">
                            Have questions about our programs or want to partner with us? Reach out and our team will get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                        {[
                            { icon: Phone, label: "Call Us", val: "+233 24 501 0288", sub: "Mon-Fri, 9am - 5pm" },
                            { icon: Mail, label: "Email Us", val: "info@necessaryaid.org", sub: "General Inquiries" },
                            { icon: MapPin, label: "Visit Us", val: "Wa, Upper West", sub: "Ghana, West Africa" },
                            { icon: Globe, label: "Socials", val: "@necessaryaid", sub: "Follow our impact" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                                <item.icon className="w-8 h-8 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                                <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">{item.label}</p>
                                <p className="text-xl font-display font-medium text-white mb-2 uppercase break-words">{item.val}</p>
                                <p className="text-sm font-body text-white/40">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reuse the Contact Component with form */}
            <Contact />
            
            {/* Map Placeholder */}
            <div className="pb-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="aspect-[21/9] w-full bg-white/5 rounded-[4rem] border border-white/5 overflow-hidden relative group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-6">
                                <MapPin className="w-16 h-16 text-secondary mx-auto animate-bounce" />
                                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter">Wa, Upper West Region</h3>
                                <p className="text-white/40 font-body uppercase tracking-[0.2em] text-xs">Headquarters • Ghana</p>
                            </div>
                        </div>
                        {/* Overlay pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
