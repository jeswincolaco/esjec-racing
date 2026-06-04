import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Image as ImageIcon, Search } from 'lucide-react';
import { galleryData } from '../data/clubData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGallery = galleryData.filter(item => {
    const itemData = item as any;
    const query = searchQuery.toLowerCase();
    const matchesSearch = query === '' || 
      item.caption.toLowerCase().includes(query) ||
      (itemData.tags && itemData.tags.some((tag: string) => tag.toLowerCase().includes(query))) ||
      (itemData.category && itemData.category.toLowerCase().includes(query));
    
    return matchesSearch;
  });

  return (
    <div className="pb-20">
      {/* Header with Carbon Background */}
      <section className="pt-32 pb-20 px-6 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-app-bg" />
        <div className="max-w-7xl mx-auto space-y-6 max-w-2xl relative z-10">
          <div className="inline-flex px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-sm text-brand-red text-[10px] font-black uppercase tracking-[0.3em]">
            Visual Telemetry
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-app-text uppercase italic leading-tight">The Paddock</h1>
          <p className="text-app-text-muted text-lg font-bold">
            Capturing every high-octane moment. From late-night tuning to victory podiums.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-20 space-y-12">
        
        {/* Controls Section */}
        <div className="bg-app-card/30 p-8 rounded-sm border border-app-border backdrop-blur-sm flex justify-center">
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-app-text-muted group-focus-within:text-brand-red transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by caption, tags, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-app-bg border border-app-border text-app-text rounded-sm focus:outline-none focus:border-brand-red transition-all text-xs font-black uppercase tracking-widest"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {filteredGallery.length > 0 ? (
              filteredGallery.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelectedImage(item.url)}
                className="group relative aspect-square rounded-sm overflow-hidden cursor-pointer border border-app-border aerodynamic-card bg-app-card/20"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-red/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <ZoomIn className="text-white w-10 h-10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <p className="text-white text-xs font-black uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.caption}
                  </p>
                  {(item as any).tags && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      {(item as any).tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-0.5 bg-white/20 text-[8px] font-black uppercase tracking-wider text-white border border-white/30 rounded-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key="no-gallery-results"
              className="col-span-full py-32 text-center space-y-4"
            >
              <div className="inline-flex p-4 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red mb-4">
                <ImageIcon size={32} />
              </div>
              <h3 className="text-2xl font-black text-app-text uppercase italic tracking-tighter">Negative Signal</h3>
              <p className="text-app-text-muted">No visual telemetry matches your current search parameters.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 px-8 py-3 bg-app-card border border-app-border text-app-text text-[10px] font-black uppercase tracking-widest hover:bg-brand-red hover:text-white hover:border-brand-red transition-all racing-clip"
              >
                Reset Sensors
              </button>
            </motion.div>
          )}
          </AnimatePresence>
        </section>

        {/* More Images Button */}
        <div className="flex justify-center pt-12">
          <button className="flex items-center gap-2 px-10 py-5 bg-app-card border border-app-border racing-clip text-app-text font-black uppercase tracking-tighter text-xs hover:bg-app-text/5 transition-all">
            <ImageIcon size={18} /> Load Telemetry
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-app-bg/95 backdrop-blur-xl flex items-center justify-center p-6 sm:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 p-3 bg-app-card border border-app-border rounded-full text-app-text hover:bg-brand-red hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain shadow-brand-red/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
