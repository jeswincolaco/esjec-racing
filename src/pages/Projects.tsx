import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, ExternalLink, Github, Layers, Search } from 'lucide-react';
import { projectsData } from '../data/clubData';

export default function Projects() {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active'>('All');
  const [tagFilter, setTagFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = ['All', ...new Set(projectsData.flatMap(p => p.technologies))];

  const filteredProjects = projectsData.filter(project => {
    const matchesStatus = statusFilter === 'All' ? true : project.status === statusFilter;
    const matchesTag = tagFilter === 'All' ? true : project.technologies.includes(tagFilter);
    
    const query = searchQuery.toLowerCase();
    const matchesSearch = query === '' || 
      project.title.toLowerCase().includes(query) || 
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query));

    return matchesStatus && matchesTag && matchesSearch;
  });

  return (
    <div className="pb-20">
      {/* Header with Carbon Background */}
      <section className="pt-32 pb-20 px-6 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
        <div className="max-w-7xl mx-auto space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex px-3 py-1 bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">
            The Grid
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-app-text uppercase italic leading-tight">The Workshop</h1>
          <p className="text-app-text-muted text-lg md:text-xl leading-relaxed font-bold">
            From high-performance ATVs to precision Go-Karts, our teams represent the pinnacle of student automotive engineering at SJEC.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-16 pt-20">
        
        <div className="space-y-12">
          {/* Global Search */}
          <div className="max-w-2xl mx-auto w-full group relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-app-text-muted group-focus-within:text-brand-red transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search specifications, blueprints, or systems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-app-card/30 border border-app-border text-app-text rounded-sm focus:outline-none focus:border-brand-red transition-all text-xs font-black uppercase tracking-[0.2em] backdrop-blur-sm"
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-brand-red scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-500 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-app-border/50">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted italic">Team State</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Active'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status as any)}
                  className={`px-6 py-2 racing-clip text-[10px] font-black uppercase tracking-widest transition-all engine-rev ${
                    statusFilter === status 
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' 
                    : 'bg-app-card border border-app-border text-app-text-muted hover:text-app-text'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted italic">Technical Telemetry</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setTagFilter(tag)}
                  className={`px-4 py-1.5 rounded-sm border text-[10px] font-black uppercase tracking-widest transition-all ${
                    tagFilter === tag
                    ? 'border-brand-silver bg-brand-silver/10 text-brand-silver'
                    : 'border-app-border bg-app-card/50 text-app-text-muted hover:border-brand-silver/50 hover:text-app-text'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
        <div className="space-y-32">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <motion.section
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                >
                  <div className="flex-1 w-full relative group">
                    <div className="absolute -inset-4 bg-brand-red/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative rounded-sm overflow-hidden aspect-video border border-app-border shadow-2xl aerodynamic-card">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                      <span className="flex items-center gap-2 text-brand-red text-[10px] font-black uppercase tracking-[0.2em]">
                        <Layers size={14} /> {project.status}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-black text-app-text tracking-tighter uppercase italic">{project.title}</h2>
                      <p className="text-app-text-muted text-lg leading-relaxed font-medium">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[10px] font-black text-app-text flex items-center gap-2 uppercase tracking-widest">
                        <Code2 size={16} className="text-brand-silver" /> System Specs
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-app-card border border-app-border rounded-sm text-[10px] text-app-text-muted font-black uppercase tracking-widest">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="flex items-center gap-2 px-8 py-4 bg-brand-red text-white racing-clip font-black text-xs uppercase tracking-tighter hover:brightness-110 shadow-lg shadow-brand-red/20 transition-all active:scale-95 sheen-effect speed-glow flame-trail engine-rev">
                        Case Study <ExternalLink size={16} />
                      </button>
                      <button className="flex items-center gap-2 px-8 py-4 bg-app-card border border-app-border text-app-text racing-clip font-black text-xs uppercase tracking-tighter hover:bg-app-text/5 transition-all sheen-effect engine-rev">
                        Blueprints <Github size={16} />
                      </button>
                    </div>
                  </div>
                </motion.section>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key="no-results"
                className="py-20 text-center space-y-4"
              >
                <div className="inline-flex p-4 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red mb-4">
                  <Layers size={32} />
                </div>
                <h3 className="text-2xl font-black text-app-text uppercase italic tracking-tighter">No prototypes found</h3>
                <p className="text-app-text-muted">Adjust your filters or search parameters to see more engineering telemetry.</p>
                <button 
                  onClick={() => { setStatusFilter('All'); setTagFilter('All'); setSearchQuery(''); }}
                  className="mt-6 px-8 py-3 bg-app-card border border-app-border text-app-text text-[10px] font-black uppercase tracking-widest hover:bg-brand-red hover:text-white hover:border-brand-red transition-all racing-clip"
                >
                  Reset All Sensors
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contribute Banner */}
        <section className="py-20 mt-20">
          <div className="bg-glass border border-app-border rounded-[3rem] p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold text-app-text tracking-tight">Have a project idea?</h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              We're always looking for ambitious projects to support. If you have an idea that can redefine robotics, we have the resources to help you build it.
            </p>
            <button className="px-10 py-4 bg-brand-silver text-white rounded-full font-bold hover:bg-brand-silver/90 transition-all shadow-xl shadow-brand-silver/20">
              Propose Project
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
