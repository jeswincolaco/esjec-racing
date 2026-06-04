import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'motion/react';

interface HeroScrollAnimationProps {
  scrollProgress: MotionValue<number>;
}

export default function HeroScrollAnimation({ scrollProgress }: HeroScrollAnimationProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 240;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload images if desktop
  useEffect(() => {
    if (!isDesktop) return;

    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loaded++;
      setLoadedCount(loaded);
      if (loaded === totalFrames) {
        setIsLoading(false);
      }
    };

    const handleImageError = (e: any) => {
      console.warn('Failed to load frame:', e);
      // Still count as loaded to avoid getting stuck in loader UI
      loaded++;
      setLoadedCount(loaded);
      if (loaded === totalFrames) {
        setIsLoading(false);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g. 001, 045, 240)
      const frameStr = String(i).padStart(3, '0');
      img.src = `/assets/images/hero-frames/ezgif-frame-${frameStr}.jpg`;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      // Clean up loaders on unmount
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [isDesktop]);

  // Initial draw and draw on progress change
  const drawFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate frame index (0 to 239)
    const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(progress * totalFrames)));
    const img = imagesRef.current[frameIndex];

    if (img && img.complete && img.naturalWidth !== 0) {
      // Set canvas internal dimensions to match the source image once
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  // Draw the first frame when loading finishes
  useEffect(() => {
    if (!isLoading) {
      drawFrame(0);
    }
  }, [isLoading]);

  // Listen to scroll progress changes
  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    if (!isLoading) {
      drawFrame(latest);
    }
  });

  if (!isDesktop) return null;

  // Loading percentages and dashboard indicators
  const progressPercent = Math.min(100, Math.round((loadedCount / totalFrames) * 100));
  const rpm = Math.round((loadedCount / totalFrames) * 8000);

  // Status message based on loading percentage
  let statusMessage = 'STAGE 1: IGNITION ON...';
  if (progressPercent > 85) {
    statusMessage = 'STAGE 5: REV STATS SYNCING...';
  } else if (progressPercent > 65) {
    statusMessage = 'STAGE 4: PRE-HEATING TIRES...';
  } else if (progressPercent > 40) {
    statusMessage = 'STAGE 3: CALIBRATING TELEMETRY...';
  } else if (progressPercent > 15) {
    statusMessage = 'STAGE 2: BOOTING ECU...';
  }
  if (progressPercent === 100) {
    statusMessage = 'LAUNCH CONTROL ACTIVE!';
  }

  // Dashboard circular progress parameters
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  // LED Shift lights (9 lights)
  const leds = Array.from({ length: 9 }).map((_, idx) => {
    const threshold = (idx + 1) * 10;
    const isLit = progressPercent >= threshold;
    let color = 'bg-red-500/10 shadow-none';
    if (isLit) {
      if (idx < 3) color = 'bg-emerald-500 shadow-[0_0_10px_#10b981]';
      else if (idx < 6) color = 'bg-amber-500 shadow-[0_0_10px_#f59e0b]';
      else color = 'bg-red-600 shadow-[0_0_12px_#dc2626] animate-pulse';
    }
    return { color };
  });

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-glass border border-app-border rounded-3xl overflow-hidden shadow-2xl">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center space-y-6 p-8 w-full select-none">
          {/* Shift lights */}
          <div className="flex items-center gap-2 mb-2">
            {leds.map((led, index) => (
              <div
                key={index}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${led.color}`}
              />
            ))}
          </div>

          {/* Tachometer SVG */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-app-border fill-transparent"
                strokeWidth="6"
              />
              {/* Active progress circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-brand-red fill-transparent transition-all duration-100 ease-out"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black italic tracking-tighter text-app-text leading-none">
                {rpm}
              </span>
              <span className="text-[8px] font-black tracking-widest text-brand-red uppercase mt-1">
                RPM / Progress
              </span>
            </div>
          </div>

          {/* Status text */}
          <div className="text-center space-y-1">
            <p className="text-[10px] font-black text-brand-red uppercase tracking-widest animate-pulse">
              {statusMessage}
            </p>
            <p className="text-xs font-black text-app-text-muted">
              SYSTEM INITIALIZING... {progressPercent}%
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full p-4 relative group">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain rounded-2xl transition-transform duration-500"
          />
          {/* Sleek Overlay styling */}
          <div className="absolute top-6 left-6 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-[8px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
            Interactive Telemetry
          </div>
          <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 border border-white/10 rounded-full text-white/60 text-[8px] font-black uppercase tracking-widest backdrop-blur-md">
            Scroll to scrub
          </div>
        </div>
      )}
    </div>
  );
}
