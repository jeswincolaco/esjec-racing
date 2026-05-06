import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { eventsData } from '../data/clubData';

export default function Events() {
  return (
    <div className="pb-20">
      {/* Header with Carbon Background */}
      <section className="pt-32 pb-20 px-6 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex px-3 py-1 bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">
              Racing Calendar
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-app-text uppercase italic leading-tight">The Schedule</h1>
            <p className="text-app-text-muted text-lg max-w-xl font-bold">
              Stay ahead of the pack. Check out past achievements and upcoming technical showcases.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest racing-clip">
              Showcase
            </button>
            <button className="px-6 py-2 bg-app-card border border-app-border text-app-text-muted text-[10px] font-black uppercase tracking-widest racing-clip hover:bg-app-text/5 transition-all">
              History
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-16 pt-20">

        {/* Featured Event */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group rounded-sm overflow-hidden aspect-[21/9] min-h-[400px] border border-app-border aerodynamic-card"
        >
          <img src={eventsData[0].image} alt="Featured event" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-app-bg/90 via-app-bg/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6 max-w-2xl">
              <span className="px-4 py-1 bg-brand-red text-white text-[9px] font-black uppercase tracking-widest racing-clip">Next Checkpoint</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">{eventsData[0].title}</h2>
              <p className="text-chrome-silver font-medium text-lg line-clamp-2 md:line-clamp-none">{eventsData[0].description}</p>
            </div>
            <button className="px-10 py-5 bg-white text-black text-xs font-black uppercase tracking-widest racing-clip hover:bg-brand-red hover:text-white transition-all flex items-center gap-2 shrink-0 shadow-2xl sheen-effect speed-glow flame-trail engine-rev">
              Sync Entry <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.section>

        {/* Events Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-glass border border-app-border aerodynamic-card speedometer-hover overflow-hidden hover:border-brand-red/40 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-brand-red text-[9px] font-black uppercase tracking-widest border border-app-border racing-clip">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-black text-app-text group-hover:text-brand-red transition-all uppercase italic tracking-tighter">
                    {event.title}
                  </h3>
                  <p className="text-app-text-muted text-sm font-medium leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-app-border space-y-3">
                  <div className="flex items-center gap-3 text-app-text-muted text-[10px] font-black uppercase tracking-widest">
                    <Calendar size={14} className="text-brand-red" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-app-text-muted text-[10px] font-black uppercase tracking-widest">
                    <Clock size={14} className="text-brand-red" />
                    10:00 PST
                  </div>
                  <div className="flex items-center gap-3 text-app-text-muted text-[10px] font-black uppercase tracking-widest">
                    <MapPin size={14} className="text-brand-red" />
                    Main Paddock
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
