import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-app-bg/80 backdrop-blur-lg border-b border-app-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-brand-red/10 rounded-lg group-hover:bg-brand-red/20 transition-colors">
            <Cpu className="w-6 h-6 text-brand-red" />
          </div>
          <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-brand-silver">
            eSJEC RACING
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-red relative py-1',
                    isActive ? 'text-brand-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red' : 'text-app-text-muted'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-app-border pl-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-app-card hover:bg-brand-red/10 text-app-text-muted hover:text-brand-red border border-app-border transition-all active:scale-90"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <NavLink
              to="/contact"
              className="px-6 py-2 bg-brand-red text-white racing-clip text-[10px] font-black uppercase tracking-widest hover:brightness-110 shadow-lg shadow-brand-red/20 transition-all active:scale-95 sheen-effect speed-glow flame-trail engine-rev"
            >
              Join Grid
            </NavLink>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-app-card text-app-text-muted"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-app-text-muted hover:text-app-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-app-card bg-carbon border-b border-app-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 relative z-10">
              <div className="absolute inset-0 bg-app-card/60 backdrop-blur-md -z-10" />
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-lg font-medium py-2',
                      isActive ? 'text-brand-red' : 'text-app-text-muted'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="w-full py-3 bg-brand-red text-center text-white rounded-xl font-bold mt-2"
              >
                Join Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
