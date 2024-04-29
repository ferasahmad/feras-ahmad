import { motion } from "framer-motion";

interface FadeInElementProps {
  children: React.ReactNode;
  duration?: number;
}

const FadeInElement: React.FC<FadeInElementProps> = ({
  children,
  duration,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration ? duration : 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInElement;
