import styles from "./About.module.scss";
import { motion } from 'framer-motion';

function About() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.about}>
      <section className={`container ${styles.about_align}`}>
        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }} // Duração da animação
        >
          <h2>Living Life</h2>
          <h1>Sobre</h1>
          <p>
            Living Life Fitness Tech é uma plataforma inovadora de socialização, atividades físicas e
            gamificação que conecta pessoas interessadas no estilo de vida saudável e profissionais
            da educação física, proporcionando uma experiência fitness personalizada, segura e
            engajadora.
          </p>
        </motion.article>

        <motion.img
          src="/public/componente_about.png"
          alt="Atividades"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }} // Duração da animação
        />
      </section>
    </div>
  );
}

export default About;
