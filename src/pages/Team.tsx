import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { teamData } from '../data/clubData';

export default function Team() {
  return (
    <div className="pb-20">
      {/* Header with Carbon Background */}
      <section className="pt-32 pb-20 px-6 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
        <div className="max-w-7xl mx-auto text-center space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-sm text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">
            The Crew
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-app-text uppercase italic leading-tight">The PIT Crew</h1>
          <p className="text-app-text-muted text-lg font-bold">
            A diverse collective of engineers, designers, and mechanics working in sync to dominate the national racing circuit.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-20 pt-20">

        {/* Roles Filter (Static for now) */}
        <div className="flex flex-wrap justify-center gap-4">
          {['All Systems', 'Chassis', 'Powertrain', 'Electronics', 'Operations'].map((filter, i) => (
            <button
              key={filter}
              className={`px-8 py-3 racing-clip text-[10px] font-black uppercase tracking-widest transition-all ${
                i === 0 ? 'bg-brand-red text-white' : 'bg-app-card text-app-text-muted border border-app-border hover:bg-app-text/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamData.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col member-card-glow p-4 rounded-xl hover:bg-glass"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-app-border mb-6 aerodynamic-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-brand-red/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {(member as any).socials?.linkedin && (
                    <a 
                      href={(member as any).socials.linkedin} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-brand-red text-white transition-all scale-75 group-hover:scale-100 duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {(member as any).socials?.github && (
                    <a 
                      href={(member as any).socials.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-brand-red text-white transition-all scale-75 group-hover:scale-100 duration-300 delay-75"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {!(member as any).socials && (
                    <span className="text-white text-[10px] font-black uppercase tracking-widest bg-black/40 px-3 py-1 racing-clip">
                      Links coming soon
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-app-text group-hover:text-brand-red transition-all uppercase italic tracking-tighter">
                  {member.name}
                </h3>
                <p className="text-brand-red text-[10px] font-black uppercase tracking-[0.2em]">
                  {member.role}
                </p>
                <div className="w-8 h-1 bg-brand-silver/30 group-hover:w-full group-hover:bg-brand-red transition-all duration-500 mt-2" />
                <p className="text-app-text-muted text-xs mt-3 line-clamp-2 font-medium">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Recruitment Banner */}
        <section className="bg-glass border border-app-border rounded-[3rem] p-12 mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold text-app-text">We're always growing.</h2>
          <p className="text-app-text-muted max-w-xl mx-auto">
            Applications for the next cohort open in September. Join us to build something impactful.
          </p>
          <button className="px-8 py-3 bg-brand-red text-white racing-clip text-[10px] font-black uppercase tracking-widest hover:brightness-110 sheen-effect speed-glow flame-trail engine-rev">
            Join the Waiting List
          </button>
        </section>
      </div>
    </div>
  );
}
