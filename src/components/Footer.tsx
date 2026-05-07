import { NavLink } from 'react-router-dom';
import { Cpu, Github, Instagram, Linkedin, Twitter, Mail, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-app-card border-t border-app-border py-20 px-6 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-carbon opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-white rounded-md racing-clip">
              <img src="/assets/images/esjec_logo.png" alt="eSJEC Racing" className="w-16 h-16 object-contain" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-app-text uppercase italic">eSJEC Racing</span>
          </div>
          <p className="text-app-text-muted text-sm leading-relaxed font-bold">
            Redefining student automotive engineering at St Joseph Engineering College. We design for speed, safety, and the podium.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Linkedin, url: "https://in.linkedin.com/company/team-esjec-racing", label: "LinkedIn" },
              { Icon: Instagram, url: "https://www.instagram.com/team_esjec_racing/", label: "Instagram" },
              { Icon: Twitter, url: "https://x.com/TEAMeSJECRACING?s=08", label: "Twitter / X" },
              { Icon: Facebook, url: "https://www.facebook.com/teamesjecracing/", label: "Facebook" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                className="relative group p-3 bg-app-bg border border-app-border rounded-sm hover:bg-brand-red hover:text-white transition-all hover:-translate-y-1"
              >
                <social.Icon size={18} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:-top-12 pointer-events-none whitespace-nowrap racing-clip border-b-2 border-brand-red">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[10px] font-black text-app-text uppercase tracking-[0.3em] mb-8">Pits</h4>
          <ul className="space-y-4">
            {['About', 'Events', 'Projects', 'Team'].map(link => (
              <li key={link}>
                <NavLink to={`/${link.toLowerCase()}`} className="text-app-text-muted hover:text-brand-red transition-all text-[10px] font-black uppercase tracking-widest block group italic">
                  <span className="inline-block w-0 group-hover:w-3 h-[1px] bg-brand-red mr-0 group-hover:mr-2 transition-all" />
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[10px] font-black text-app-text uppercase tracking-[0.3em] mb-8">Engineering</h4>
          <ul className="space-y-4">
            {['Contact', 'Privacy', 'Sponsors', 'Telemetry'].map(link => (
              <li key={link}>
                <NavLink to={link === 'Contact' ? '/contact' : '#'} className="text-app-text-muted hover:text-brand-red transition-all text-[10px] font-black uppercase tracking-widest block group italic">
                  <span className="inline-block w-0 group-hover:w-3 h-[1px] bg-brand-red mr-0 group-hover:mr-2 transition-all" />
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[10px] font-black text-app-text uppercase tracking-[0.3em] mb-8">Logistics</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-3 text-app-text-muted text-[10px] font-black uppercase tracking-widest leading-loose">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span>SJEC, Vamanjoor, Mangalore, KA, IN - 575028</span>
            </li>
            <li className="flex items-center gap-3 text-app-text-muted text-[10px] font-black uppercase tracking-widest">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span>teamesjecracing@sjec.ac.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-app-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-app-text-muted text-[9px] font-black uppercase tracking-widest">
          © {new Date().getFullYear()} eSJEC Racing. Developed by <span className="text-brand-red">Team eSJEC Racing</span>.
        </p>
        <p className="text-app-text-muted text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
          FORGED AT <span className="text-brand-red italic">SJEC</span>
        </p>
      </div>
    </footer>
  );
}
