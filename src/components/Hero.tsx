import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function GlowingGlobe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg width="400" height="400" viewBox="0 0 400 400" className="w-64 h-64 md:w-80 md:h-80">
        <defs>
          <radialGradient id="globeGradient" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="1" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.6" />
          </radialGradient>
          <filter id="globeGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
          @keyframes rotateGlobe {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .globe-sphere {
            animation: rotateGlobe 20s linear infinite;
            transform-origin: 200px 200px;
          }
          @keyframes nodeGlow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .globe-node {
            animation: nodeGlow 3s ease-in-out infinite;
          }
        `}</style>

        <g className="globe-sphere">
          <circle cx="200" cy="200" r="120" fill="url(#globeGradient)" opacity="0.3" filter="url(#globeGlow)" />

          <circle cx="200" cy="200" r="120" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.2" />
          <circle cx="200" cy="200" r="115" fill="none" stroke="#ff00ff" strokeWidth="1" opacity="0.15" />

          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x = 200 + 100 * Math.cos(rad);
            const y = 200 + 100 * Math.sin(rad);
            return (
              <g key={i}>
                <line x1="200" y1="200" x2={x} y2={y} stroke="#00f0ff" strokeWidth="1" opacity="0.3" />
                <circle cx={x} cy={y} r="3" fill="#00f0ff" filter="url(#nodeGlow)" className="globe-node" style={{ animationDelay: `${i * 0.25}s` }} />
              </g>
            );
          })}

          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8 + 45;
            const rad = (angle * Math.PI) / 180;
            const x = 200 + 85 * Math.cos(rad);
            const y = 200 + 85 * Math.sin(rad);
            return (
              <circle key={`inner-${i}`} cx={x} cy={y} r="2" fill="#ff00ff" opacity="0.4" className="globe-node" style={{ animationDelay: `${i * 0.3 + 1.5}s` }} />
            );
          })}
        </g>

        <circle cx="200" cy="200" r="125" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.3" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.5))' }} />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#ff00ff" strokeWidth="0.5" opacity="0.2" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

function FloatingCube({ position, delay, size = 'md' }: { position: string; delay: number; size?: string }) {
  const sizeClass = size === 'lg' ? 'w-24 h-24' : size === 'sm' ? 'w-12 h-12' : 'w-16 h-16';

  return (
    <div
      className={`absolute ${sizeClass} ${position} pointer-events-none`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id={`cubeGrad-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
          <filter id={`cubeShadow-${delay}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        <g filter={`url(#cubeShadow-${delay})`}>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke={`url(#cubeGrad-${delay})`} strokeWidth="2" opacity="0.8" />
          <line x1="20" y1="20" x2="40" y2="40" stroke="#00f0ff" strokeWidth="1" opacity="0.5" />
          <line x1="80" y1="20" x2="60" y2="40" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
          <line x1="80" y1="80" x2="60" y2="60" stroke="#00f0ff" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="80" x2="40" y2="60" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />

          <circle cx="50" cy="50" r="15" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.3" />
          <circle cx="30" cy="30" r="3" fill="#ff00ff" opacity="0.6" />
          <circle cx="70" cy="70" r="3" fill="#00f0ff" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function StreakBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes streak-left {
          0% { transform: translateX(-100%) rotate(-45deg); }
          100% { transform: translateX(100%) rotate(-45deg); }
        }
        @keyframes streak-right {
          0% { transform: translateX(100%) rotate(45deg); }
          100% { transform: translateX(-100%) rotate(45deg); }
        }
        .streak {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00f0ff, transparent);
          opacity: 0.3;
          filter: blur(1px);
        }
        .streak-left { animation: streak-left 8s linear infinite; }
        .streak-right { animation: streak-right 8s linear infinite; }
      `}</style>

      {[...Array(6)].map((_, i) => (
        <div
          key={`left-${i}`}
          className="streak streak-left"
          style={{
            top: `${20 + i * 15}%`,
            width: '200%',
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}

      {[...Array(6)].map((_, i) => (
        <div
          key={`right-${i}`}
          className="streak streak-right"
          style={{
            top: `${60 + i * 12}%`,
            width: '200%',
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}

function StarsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00f0ff;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }
        .scanline {
          position: absolute;
          width: 100%;
          height: 1px;
          background: repeating-linear-gradient(
            90deg,
            rgba(0, 240, 255, 0.03) 0px,
            rgba(0, 240, 255, 0.03) 2px,
            transparent 2px,
            transparent 4px
          );
          animation: scanMove 8s linear infinite;
        }
        @keyframes scanMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>

      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {[...Array(20)].map((_, i) => (
        <div key={`scan-${i}`} className="scanline" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
    </div>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .hero-content {
          position: relative;
          z-20;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <StarsBackground />

      <StreakBackground />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <FloatingCube position="top-10 left-5 md:left-20" delay={0} size="sm" />
      <FloatingCube position="top-32 right-8 md:right-32" delay={1.5} size="md" />
      <FloatingCube position="bottom-20 left-10 md:left-40" delay={3} size="sm" />
      <FloatingCube position="bottom-32 right-5 md:right-20" delay={2} size="md" />

      <GlowingGlobe />

      <div className="hero-content max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
          <span className="text-white">Transforming Ideas Into</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Powerful Software
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Alvric Technologies builds modern, scalable, and high-performance digital products for businesses and startups that dare to innovate.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            to="/contact"
            className="group relative px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Book a Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <button className="px-8 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/50 transition-all">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
