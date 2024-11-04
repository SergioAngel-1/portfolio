import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400 transform origin-left z-\[9999\]"
      style={{ scaleX }}
    />
  );
};
