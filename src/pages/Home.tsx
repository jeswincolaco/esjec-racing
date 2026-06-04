import { motion, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Cpu, Zap, Target, Award, History, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, eventsData, achievementsData } from '../data/clubData';
import HeroScrollAnimation from '../components/HeroScrollAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroTrackRef,
    offset: ['start start', 'end end']
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div ref={heroTrackRef} className="relative lg:h-[180vh]">
        <section className="relative min-h-screen lg:h-screen lg:min-h-0 lg:sticky lg:top-0 flex items-center pt-20 lg:pt-0 overflow-hidden bg-carbon">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-silver/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                Pole Position Engineering
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-app-text uppercase italic">
                Redefining the <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-silver">
                  Redline
                </span>
              </h1>
              <p className="text-app-text-muted text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                Join Team eSJEC Racing. We design, calibrate, and dominate with high-performance automotive systems at St Joseph Engineering College.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-brand-red text-white racing-clip text-xs font-black uppercase tracking-tighter hover:brightness-110 shadow-2xl shadow-brand-red/40 transition-all active:scale-95 sheen-effect speed-glow flame-trail engine-rev"
                >
                  Join the Crew
                </Link>
                <Link
                  to="/projects"
                  className="px-10 py-5 bg-app-card border border-app-border text-app-text racing-clip text-xs font-black uppercase tracking-tighter hover:bg-app-text/5 transition-all sheen-effect engine-rev"
                >
                  The Workshop
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block w-full"
            >
              <HeroScrollAnimation scrollProgress={scrollYProgress} />
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-red/30 rounded-tr-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-silver/30 rounded-bl-3xl pointer-events-none" />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Achievements Section */}
      <section className="py-24 px-6 bg-app-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-black text-brand-red uppercase tracking-[0.4em]">Proven Performance</h2>
            <h3 className="text-4xl md:text-6xl font-black text-app-text tracking-tighter uppercase italic text-glow">Championship Hall of Fame</h3>
          </div>
          
          <div className="space-y-16">
            {/* Major Highlights */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🏆</span>
                <h4 className="text-xl font-black text-app-text uppercase tracking-widest italic">Major Highlights</h4>
                <div className="h-[1px] flex-grow bg-brand-red/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievementsData.filter(a => a.isHighlight).map((achievement, i) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-glass border border-brand-red/30 aerodynamic-card group hover:border-brand-red/60 transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Award size={80} className="text-brand-red" />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-brand-red/10 rounded-lg group-hover:bg-brand-red transition-colors">
                        <Award className="w-6 h-6 text-brand-red group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-black text-brand-silver uppercase tracking-widest">{achievement.event}</span>
                    </div>
                    <h4 className="text-4xl font-black text-app-text mb-2 tracking-tighter italic uppercase">{achievement.title}</h4>
                    <p className="text-app-text-muted font-bold text-sm uppercase tracking-widest">{achievement.category}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Year-wise Achievements */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📊</span>
                <h4 className="text-xl font-black text-app-text uppercase tracking-widest italic">Year-wise Achievements</h4>
                <div className="h-[1px] flex-grow bg-app-border" />
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievementsData
                    .filter((a) => !a.isHighlight)
                    .slice(0, showAllAchievements ? undefined : 6)
                    .map((achievement, i) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 3) * 0.1 }}
                        className="p-6 bg-glass border border-app-border aerodynamic-card group hover:border-brand-red/20 transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-app-card rounded-lg group-hover:bg-brand-red/10 transition-colors">
                            <Award className="w-5 h-5 text-brand-silver group-hover:text-brand-red transition-colors" />
                          </div>
                          <span className="text-[10px] font-black text-brand-silver/60 uppercase tracking-widest group-hover:text-brand-silver transition-colors">
                            {achievement.event}
                          </span>
                        </div>
                        <h4 className="text-2xl font-black text-app-text mb-1 tracking-tighter italic uppercase group-hover:text-brand-red transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-app-text-muted font-bold text-[10px] uppercase tracking-widest">
                          {achievement.category}
                        </p>
                      </motion.div>
                    ))}
                </div>

                {/* Gradient overlay when collapsed */}
                {!showAllAchievements && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-app-bg to-transparent pointer-events-none z-10" />
                )}
              </div>

              {/* Show More / Show Less Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setShowAllAchievements(!showAllAchievements)}
                  className="px-8 py-4 bg-app-card border border-app-border text-app-text hover:text-brand-red rounded-full text-xs font-black uppercase tracking-widest hover:border-brand-red/50 transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 sheen-effect"
                >
                  {showAllAchievements ? (
                    <>
                      Disengage Gear: Show Less
                      <span className="text-[10px]">▲</span>
                    </>
                  ) : (
                    <>
                      Engage Gear: Show All
                      <span className="text-[10px]">▼</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-app-bg/50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
              {[
                { label: 'Founded', value: '2019', icon: History },
                { label: 'Teams', value: '3', icon: Cpu },
                { label: 'AIR Ranks', value: '10+', icon: Award },
                { label: 'Students', value: '100+', icon: Users },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 bg-glass border border-app-border aerodynamic-card flex flex-col items-center justify-center text-center group hover:border-brand-red/20 transition-all hover:-translate-y-1"
                >
                  <div className="p-3 bg-app-card rounded-lg mb-4 group-hover:bg-brand-red/10 transition-colors">
                    <stat.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="text-3xl font-black text-app-text mb-1 tracking-tighter uppercase italic">{stat.value}</div>
                  <div className="text-app-text-muted text-[10px] font-black tracking-[0.2em] uppercase">{stat.label}</div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-24 px-6 relative overflow-hidden bg-tread">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em]">Engineering Spotlight</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-app-text uppercase italic">Latest Prototypes</h3>
            </div>
            <Link to="/projects" className="text-brand-red text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
              View All Specs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[450px] rounded-sm overflow-hidden border border-app-border aerodynamic-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-app-bg/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <span className="px-4 py-1 bg-brand-red text-white text-[9px] font-black uppercase tracking-widest racing-clip">
                    {project.status}
                  </span>
                  <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">{project.title}</h4>
                  <p className="text-chrome-silver text-sm line-clamp-2 max-w-sm font-medium">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-red p-[1px] racing-clip">
          <div className="bg-glass p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-carbon opacity-20 pointer-events-none" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-app-text uppercase italic leading-[0.9]">
                Ready to Join <br className="hidden md:block" /> The Grid?
              </h2>
              <p className="text-app-text-muted text-lg max-w-2xl mx-auto font-bold">
                Whether you're into engine tuning, composite materials, or technical telemetry, we have a seat in the cockpit for you.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-12 py-6 bg-brand-red text-white racing-clip text-xs font-black uppercase tracking-widest hover:brightness-110 shadow-2xl shadow-brand-red/40 transition-all active:scale-95 sheen-effect speed-glow flame-trail engine-rev"
                >
                  Apply for the Team
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto px-12 py-6 bg-app-card border border-app-border text-app-text racing-clip text-xs font-black uppercase tracking-widest hover:bg-app-text/5 transition-all sheen-effect engine-rev"
                >
                  Review Rulebook
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
