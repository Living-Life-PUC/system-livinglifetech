import styles from "./Banner.module.scss";
import { motion } from 'framer-motion';

function Banner() {
  const fadeIn = {
    hidden: { opacity: 0, y: -20 }, // Inicia invisível e levemente acima
    visible: { opacity: 1, y: 0 },   // Fica visível e na posição original
  };

  return (
    <div className={styles.banner}>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }} // Duração da animação
      >
        Encontre sua motivação e <span>viva a vida!</span>
      </motion.h1>
    </div>
  );
}

export default Banner;
