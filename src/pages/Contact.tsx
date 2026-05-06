import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="pb-20">
      {/* Header with Carbon Background */}
      <section className="pt-32 pb-20 px-6 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
        <div className="max-w-7xl mx-auto space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-sm text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">
            Get in Touch
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-app-text uppercase italic leading-tight">The GRID <span className="text-brand-red">Contact</span></h1>
          <p className="text-app-text-muted text-lg leading-relaxed font-bold">
            Have a question about scouting? Want to sponsor the team? Or just want to talk torque? Drop a message in the pits.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-glass border border-app-border aerodynamic-card group hover:border-brand-red/40 transition-all">
                <div className="p-3 bg-brand-red/10 rounded-sm text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-app-text-muted text-[10px] font-black uppercase tracking-[0.2em]">Transmission</h4>
                  <p className="text-app-text font-black text-lg italic tracking-tighter">teamesjecracing@sjec.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-glass border border-app-border group hover:border-brand-silver/40 transition-all border-l-4 border-l-brand-silver">
                <div className="p-3 bg-brand-silver/10 rounded-sm text-brand-silver group-hover:bg-brand-silver group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-app-text-muted text-[10px] font-black uppercase tracking-[0.2em]">Hotline</h4>
                  <p className="text-app-text font-black text-lg italic tracking-tighter">+91-9480066978</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-glass border border-app-border aerodynamic-card group hover:border-brand-red/40 transition-all">
                <div className="p-3 bg-brand-red/10 rounded-sm text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-app-text-muted text-[10px] font-black uppercase tracking-[0.2em]">Paddock</h4>
                  <p className="text-app-text font-black text-lg italic tracking-tighter uppercase leading-tight">Vamanjoor, Mangalore, India - 575028</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-app-text font-black uppercase tracking-[0.3em] text-[10px]">Telemetry Stream</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, url: "https://www.instagram.com/team_esjec_racing/", label: "Instagram" },
                  { Icon: Twitter, url: "https://x.com/TEAMeSJECRACING?s=08", label: "Twitter / X" },
                  { Icon: Linkedin, url: "https://in.linkedin.com/company/team-esjec-racing", label: "LinkedIn" },
                  { Icon: Github, url: "#", label: "GitHub" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="relative group p-4 bg-app-card border border-app-border rounded-sm text-app-text-muted hover:bg-brand-red hover:text-white transition-all active:scale-95"
                  >
                    <social.Icon size={20} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:-top-12 pointer-events-none whitespace-nowrap racing-clip border-b-2 border-brand-red">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/5 blur-3xl -z-10" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-12 bg-app-card border border-app-border shadow-2xl space-y-8 aerodynamic-card"
            >
              <h3 className="text-4xl font-black text-app-text tracking-tighter uppercase italic">Submit Specs</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-app-text-muted uppercase tracking-[0.2em] px-1">Engineer Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-app-bg border border-app-border rounded-sm text-app-text font-bold focus:outline-none focus:border-brand-red focus:bg-app-card transition-all placeholder:text-app-text-muted/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-app-text-muted uppercase tracking-[0.2em] px-1">Comms Protocol</label>
                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-app-bg border border-app-border rounded-sm text-app-text font-bold focus:outline-none focus:border-brand-red focus:bg-app-card transition-all placeholder:text-app-text-muted/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-app-text-muted uppercase tracking-[0.2em] px-1">Transmission Subject</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-app-bg border border-app-border rounded-sm text-app-text font-bold focus:outline-none focus:border-brand-red focus:bg-app-card transition-all placeholder:text-app-text-muted/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-app-text-muted uppercase tracking-[0.2em] px-1">Telemetry Payload</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-app-bg border border-app-border rounded-sm text-app-text font-bold focus:outline-none focus:border-brand-red focus:bg-app-card transition-all resize-none placeholder:text-app-text-muted/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-5 racing-clip font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] sheen-effect speed-glow flame-trail engine-rev ${
                    isSubmitted 
                    ? 'bg-green-600 text-white' 
                    : 'bg-brand-red text-white hover:brightness-110 shadow-lg shadow-brand-red/20'
                  }`}
                >
                  {isSubmitted ? 'Data Transmitted' : 'Initiate Sequence'} <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
