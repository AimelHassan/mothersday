import { motion } from 'motion/react';

const petals = Array.from({ length: 15 });

export default function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`, 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            top: '110%', 
            left: `${(Math.random() * 100) + (Math.random() * 20 - 10)}%`,
            opacity: [0, 1, 1, 0],
            rotate: 360
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute text-primary/20"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {i % 2 === 0 ? 'local_florist' : 'favorite'}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
