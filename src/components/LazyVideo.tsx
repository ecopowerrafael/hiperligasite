import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, RefreshCw } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[9/16]" or "aspect-[3/4]"
  label?: string;
}

export function LazyVideo({ 
  src, 
  poster, 
  className = '', 
  aspectRatio = 'aspect-[9/16]',
  label = 'Vídeo Demonstrativo' 
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Pause when scrolling away to save GPU and CPU resources
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log('Video play failed:', err);
          // If native autoplay/play blocked, try muting and playing again
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        });
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  useEffect(() => {
    if (isInView && videoRef.current) {
      // Once visible, attempt standard soft play in muted mode
      videoRef.current.muted = isMuted;
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Normal browser security block for autoplay
          setIsPlaying(false);
        });
    }
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-zinc-950 select-none shadow-inner border border-white/5 ${aspectRatio} ${className}`}
      onClick={handleTogglePlay}
    >
      {/* Visual Ambient Blur Background */}
      <div className="absolute inset-0 bg-radial-gradient from-zinc-900 via-black to-black opacity-90" />

      {isInView ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover cursor-pointer z-10 relative"
          loop
          muted={isMuted}
          playsInline
          preload="none"
          onLoadedData={() => {
            setLoading(false);
            setHasError(false);
          }}
          onError={() => {
            setLoading(false);
            setHasError(true);
          }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center animate-pulse mb-3">
            <RefreshCw className="w-5 h-5 text-white/30 animate-spin" />
          </div>
          <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Carregamento Inteligente</span>
        </div>
      )}

      {/* Loading state spinner inside active viewport */}
      {isInView && loading && !hasError && (
        <div className="absolute inset-0 bg-black/60 z-20 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-3" />
          <span className="text-[10px] text-white/60 font-mono tracking-wider uppercase">Conectando Cloudinary...</span>
        </div>
      )}

      {/* Error State Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-zinc-900/90 z-20 flex flex-col items-center justify-center text-center p-6">
          <span className="text-red-400 font-mono text-xs uppercase font-extrabold mb-2">Erro de Carregamento</span>
          <p className="text-zinc-500 text-[10px] leading-relaxed">
            Não foi possível carregar o vídeo. Toque no botão abaixo para tentar novamente.
          </p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLoading(true);
              setHasError(false);
              if (videoRef.current) {
                videoRef.current.load();
              }
            }}
            className="mt-3 px-3 py-1 bg-white/10 hover:bg-white/15 text-white font-mono text-[9px] rounded uppercase border border-white/10"
          >
            Recarregar
          </button>
        </div>
      )}

      {/* Control Overlays (Only visible when active and not errored) */}
      {isInView && !hasError && (
        <>
          {/* Subtle gradient overlay on bottom and top */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

          {/* Top Label Badge */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase text-white border border-white/10 z-25 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{label}</span>
          </div>

          {/* Bottom Controls Bar */}
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-20">
            {/* Play/Pause Button */}
            <button
              onClick={handleTogglePlay}
              className="w-10 h-10 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg active:scale-90 transition-all border border-primary/30"
              aria-label={isPlaying ? 'Pausar' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={handleToggleMute}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
              aria-label={isMuted ? 'Ativar som' : 'Mudar para mudo'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/80" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
            </button>
          </div>

          {/* Tap Interaction Hint Overlay */}
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[8px] font-sans text-zinc-300 z-20 italic">
            {isPlaying ? 'Toque para pausar' : 'Toque para iniciar'}
          </div>
        </>
      )}
    </div>
  );
}
