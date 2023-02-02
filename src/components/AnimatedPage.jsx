import { motion } from 'framer-motion';
import React from 'react';
const animations = {
  initial: { opacity: 0, y: -1000 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -1000 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
      initial="initial"
      variants={animations}>
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
