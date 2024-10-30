import styles from "./Trainer.module.scss";
import { motion } from "framer-motion";

function Trainer() {
  // Variantes de animação
  const trainerVariants = {
    hidden: { opacity: 0, y: 20 }, // Inicia invisível e levemente abaixo
    visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
  };

  return (
    <div className={styles.trainer}>
      <section className={`container ${styles.trainer_align}`} id="trainer">
        <motion.img
          src="/public/componente_trainer.png"
          alt="Atividades"
          initial="hidden"
          whileInView="visible"
          variants={trainerVariants}
          transition={{ duration: 0.5 }}
        />

        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={trainerVariants}
          transition={{ duration: 0.5, delay: 0.1 }} // Um pequeno atraso para o artigo
        >
          <h2>Serviços de Qualidade</h2>
          <h1>Personais Trainers Qualificados</h1>
          <p>
            Nossos treinadores são especialistas e estão prontos para ajudar você a maximizar seus
            resultados com orientação personalizada.
          </p>
        </motion.article>
      </section>
    </div>
  );
}

export default Trainer;
