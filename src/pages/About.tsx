import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Cpu, Zap, Award, History, Users } from 'lucide-react';
import { teamData, aboutData } from '../data/clubData';

export default function About() {
  const mentors = teamData.filter(member => member.role.includes('Advisors') || member.role.includes('Mentors'));

  return (
    <div className="pb-20">
      {/* Header with Carbon Background */}
      <section className="pt-32 pb-20 px-6 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
        <div className="max-w-7xl mx-auto space-y-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-sm text-brand-red text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Since 2019
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-app-text uppercase italic leading-tight"
          >
            Engineering <span className="text-brand-red">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-app-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-bold"
          >
            {aboutData.club} eSJEC Racing is a high-performance technical ecosystem where innovative engineering meets the heat of the racetrack.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32 pt-20">

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-glass aerodynamic-card space-y-6"
          >
            <div className="w-14 h-14 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center justify-center">
              <Target className="text-brand-red" size={28} />
            </div>
            <h2 className="text-4xl font-black text-app-text uppercase italic tracking-tighter">Our Mission</h2>
            <p className="text-app-text-muted leading-relaxed font-medium">
              {aboutData.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-glass aerodynamic-card space-y-6"
          >
            <div className="w-14 h-14 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center justify-center">
              <History className="text-brand-red" size={28} />
            </div>
            <h2 className="text-4xl font-black text-app-text uppercase italic tracking-tighter">Our History</h2>
            <p className="text-app-text-muted leading-relaxed font-medium">
              {aboutData.history}
            </p>
          </motion.div>
        </section>

        {/* Membership */}
        <section className="p-10 bg-app-card border border-app-border rounded-3xl flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center shrink-0">
            <Users className="text-brand-red" size={40} />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-black text-app-text uppercase italic tracking-tighter">Multi-Disciplinary Team</h2>
            <p className="text-app-text-muted font-bold">
              {aboutData.membership}
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em]">Core Verticals</h2>
            <h3 className="text-4xl md:text-6xl font-black text-app-text tracking-tighter uppercase italic">The Engineering Grid</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ATV Design', icon: Cpu, desc: 'Mastering off-road dynamics and roll-cage safety.' },
              { title: 'Electric Tech', icon: Zap, desc: 'Developing power delivery systems and advanced battery units.' },
              { title: 'Project Management', icon: ShieldCheck, desc: 'Coordinating complex engineering workflows and timelines.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-glass border border-app-border aerodynamic-card hover:border-brand-red/40 transition-all space-y-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-red/5 border border-brand-red/10 rounded-sm italic font-black text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black text-app-text uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-app-text-muted text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Mentors */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold text-app-text tracking-tight">Our Advisors</h2>
            <div className="h-[1px] flex-grow mx-8 bg-app-border hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="p-6 rounded-[2rem] bg-glass border border-app-border flex gap-6 items-center">
                <div className="shrink-0">
                  <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-app-text leading-tight">{mentor.name}</h4>
                  <p className="text-brand-red text-xs font-bold uppercase tracking-wider">{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="rounded-[3rem] bg-brand-red p-1 overflow-hidden">
          <div className="bg-app-bg p-12 md:p-20 rounded-[3.9rem] flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-app-text tracking-tight">Beyond the Track</h2>
              <p className="text-app-text-muted text-lg leading-relaxed">
                We believe in the power of community. eSJEC Racing is a place where late-night workshop sessions, design failures, and podium finishes forge lifelong friendships.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-brand-red" />
                  <span className="text-app-text-muted font-medium">Racing Heritage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={20} className="text-brand-silver" />
                  <span className="text-app-text-muted font-medium">Design Innovation</span>
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" className="rounded-2xl aspect-square object-cover" alt="Club activity 1" />
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400" className="rounded-2xl translate-y-8 aspect-square object-cover" alt="Club activity 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
