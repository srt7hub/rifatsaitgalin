import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const easeOutQuint = [0.22, 1, 0.36, 1];

export default function ClosingSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values to track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics for the mouse movement
  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // --- Depth calculations (Parallax Layers) ---
  // Distant background (moves slightly in the same direction)
  const x1 = useTransform(smoothX, [-1, 1], [-20, 20]);
  const y1 = useTransform(smoothY, [-1, 1], [-20, 20]);
  
  // Midground 1 (moves opposite moderately)
  const x2 = useTransform(smoothX, [-1, 1], [40, -40]);
  const y2 = useTransform(smoothY, [-1, 1], [40, -40]);
  
  // Midground 2 (moves same direction moderately)
  const x3 = useTransform(smoothX, [-1, 1], [-60, 60]);
  const y3 = useTransform(smoothY, [-1, 1], [-60, 60]);

  // Foreground 1 (moves opposite significantly)
  const x4 = useTransform(smoothX, [-1, 1], [90, -90]);
  const y4 = useTransform(smoothY, [-1, 1], [90, -90]);

  // Foreground 2 (moves same direction significantly)
  const x5 = useTransform(smoothX, [-1, 1], [-120, 120]);
  const y5 = useTransform(smoothY, [-1, 1], [-120, 120]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    
    // Normalize coordinates to -1 -> 1 range
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    // Softly return elements to center when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100vh] flex flex-col items-center justify-center bg-[#070707] text-white overflow-hidden py-32 px-6 rounded-t-[2.5rem] mt-[-2.5rem] z-20"
    >
      {/* Subtle Space Background Elements */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-white/[0.02] blur-[100px] md:blur-[140px] rounded-full pointer-events-none"></div>

      {/* --- PARALLAX SHAPES --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center [perspective:1000px]">
        
        {/* Shape 1: Distant subtle glow orb */}
        <motion.div style={{ x: x1, y: y1 }} className="absolute w-[400px] h-[400px] top-[5%] -left-[5%] mix-blend-screen opacity-40">
          <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
             transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
             className="w-full h-full rounded-full bg-[#00A6FB]/20 blur-[80px]"
          />
        </motion.div>

        {/* Shape 2: Large Wireframe Circle (Midground) */}
        <motion.div style={{ x: x2, y: y2 }} className="absolute w-[500px] h-[500px] bottom-[-20%] right-[-10%] opacity-15 hidden md:block">
          <motion.div 
             animate={{ y: [-30, 30, -30], rotate: [0, 90, 0] }} 
             transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
             className="w-full h-full rounded-full border-[1.5px] border-white/40"
             style={{ borderStyle: 'dashed' }}
          />
        </motion.div>

        {/* Shape 3: 3D Frosted Glass Diamond (Midground) */}
        <motion.div style={{ x: x3, y: y3 }} className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] top-[65%] left-[15%] opacity-80 backdrop-blur-xl">
          <motion.div 
             animate={{ y: [-15, 15, -15], rotateX: [15, 35, 15], rotateY: [25, 45, 25], rotateZ: [10, 20, 10] }} 
             transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
             className="w-full h-full rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Shape 4: Glass Pill (Foreground) */}
        <motion.div style={{ x: x4, y: y4 }} className="absolute w-[120px] h-[40px] md:w-[180px] md:h-[60px] top-[25%] right-[10%] opacity-90 backdrop-blur-2xl">
          <motion.div 
             animate={{ y: [15, -15, 15], rotate: [-15, -5, -15] }} 
             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
             className="w-full h-full rounded-[30px] border border-white/15 bg-gradient-to-r from-white/5 to-transparent shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Shape 5: Accent Dot (Foreground) */}
        <motion.div style={{ x: x5, y: y5 }} className="absolute w-[10px] h-[10px] top-[45%] left-[25%] md:left-[35%] opacity-80">
          <motion.div 
             animate={{ y: [-8, 8, -8], scale: [1, 1.5, 1] }} 
             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
             className="w-full h-full rounded-full bg-white shadow-[0_0_20px_white]"
          />
        </motion.div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full pointer-events-none">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.98 }}
             whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
             viewport={{ once: true, margin: "-20%" }}
             transition={{ duration: 1.2, ease: easeOutQuint }}
          >
            <h2 className="text-sm md:text-md uppercase tracking-[0.3em] font-mono text-neutral-500 mb-8 md:mb-12">
              Это только часть моего пути.
            </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.98 }}
             whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
             viewport={{ once: true, margin: "-20%" }}
             transition={{ duration: 1.2, delay: 0.2, ease: easeOutQuint }}
             className="flex flex-col gap-2 md:gap-4"
          >
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-white leading-[1.1]">
              Я продолжаю развиваться,
            </h3>
            <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-white leading-[1.1]">
              <span className="text-neutral-500">создавать</span> и пробовать новое.
            </h3>
          </motion.div>
        </div>

        {/* Buttons (enable pointer events specifically here) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 1, delay: 0.8, ease: easeOutQuint }}
           className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 pointer-events-auto"
        >
           <a 
             href="https://t.me/rifatsaitgalin" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-[#050505] font-semibold rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-95 text-sm md:text-base tracking-wide h-[54px] min-w-[200px]"
           >
             <span className="relative z-10 transition-colors group-hover:text-black">Telegram</span>
             <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
           </a>
           
           <a 
             href="https://www.instagram.com/rif.sr1" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-[1px] border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all active:scale-95 text-sm md:text-base tracking-wide h-[54px] min-w-[200px]"
           >
             Instagram
           </a>
        </motion.div>
      </div>
      
      {/* Footer Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between w-full max-w-[1440px] px-6 lg:px-16 text-neutral-600 text-xs tracking-widest uppercase font-mono pointer-events-none"
      >
        <span>© {new Date().getFullYear()}</span>
        <span>Open to new opportunities</span>
      </motion.div>

    </section>
  );
}
