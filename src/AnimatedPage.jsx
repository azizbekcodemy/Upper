import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 1, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: -60 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
