import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const t = e.target;
      setIsHovering(
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.tagName === 'INPUT' || t.tagName === 'TEXTAREA'
      );
    };
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Electric Core — Yellow */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-yellow-400 rounded-full z-20 shadow-[0_0_15px_#facc15]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="absolute inset-0 bg-white rounded-full scale-50" />
      </motion.div>

      {/* Electric Glow Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-yellow-400/20 blur-[10px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          opacity: { repeat: Infinity, duration: 0.1, ease: "linear" },
          scale: { type: "spring", stiffness: 400, damping: 10 }
        }}
      />

      {/* Rotating Spark Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-yellow-300/30"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 80 : 50,
          height: isHovering ? 80 : 50,
        }}
        animate={{
          rotate: 360,
          opacity: isClicking ? 1 : 0.4,
          boxShadow: isClicking 
            ? "0 0 25px rgba(250, 204, 21, 0.9)" 
            : "0 0 10px rgba(250, 204, 21, 0.2)"
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 1.5, ease: "linear" },
          opacity: { repeat: Infinity, duration: 0.05, ease: "linear" }
        }}
      >
        {/* Rapid Lightning Sparks */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-[1.5px] h-4 bg-white"
            style={{ rotate: angle, originY: '200%', translateX: '-50%' }}
            animate={{
              opacity: [0, 1, 0, 1, 0],
              scaleY: [1, 2, 0.5, 1.5, 1],
              y: [-10, -25, -15, -30, -10]
            }}
            transition={{
              repeat: Infinity,
              duration: 0.2,
              delay: i * 0.05,
              ease: "steps(4)"
            }}
          />
        ))}
      </motion.div>

      {/* Click Impact Pulse */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-12 h-12 border-2 border-white rounded-full blur-[1px] z-10"
            style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
