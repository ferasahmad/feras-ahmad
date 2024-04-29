import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  duration?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  duration,
}) => {
  return (
    <motion.div
      style={{ zIndex: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration ? duration : 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
