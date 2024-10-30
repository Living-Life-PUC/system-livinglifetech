import styles from "./Community.module.scss";
import { motion } from "framer-motion";

function Community() {
  // Variantes de animação
  const communityVariants = {
    hidden: { opacity: 0, y: 20 }, // Inicia invisível e levemente abaixo
    visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
  };

  return (
    <section className={`${styles.community}`} id="community">
      <motion.article
        initial="hidden"
        whileInView="visible"
        variants={communityVariants}
        transition={{ duration: 0.5 }}
      >
        <h2>Serviços de Qualidade</h2>
        <h1>Comunidade Engajada</h1>
        <p>Participe de desafios, compartilhe resultados e encontre suporte de outros usuários.</p>
      </motion.article>
    </section>
  );
}

export default Community;
