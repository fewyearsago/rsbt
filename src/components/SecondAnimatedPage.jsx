import { motion } from 'framer-motion';
import React from 'react';
const animations = {
  initial: { opacity: 0, x: -1000 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -1000 },
};

const SecondAnimatedPage = ({ children }) => {
  return (
    <motion.div
      animate="animate"
      className="secondPage"
      exit="exit"
      transition={{ duration: 0.75 }}
      initial="initial"
      variants={animations}>
      {children}
    </motion.div>
  );
};

export default SecondAnimatedPage;
