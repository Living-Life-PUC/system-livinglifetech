import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import CardResources from "./components/CardResources";
import styles from "./Resources.module.scss";
import { motion } from "framer-motion";

function Resources() {
  // Variantes de animação
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Inicia invisível e levemente abaixo
    visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
  };

  return (
    <section className={`${styles.resources} container`} id="resources">
      <article>
        <h2>Suporte e Ferramentas</h2>
        <h1>Recursos Oferecidos</h1>
      </article>

      <div className={styles.resources_row}>
        {/* Animações para cada CardResources */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <CardResources
            icon={faDumbbell}
            title="Relatórios de Desempenho"
            description="Acompanhe seu desenvolvimento através de relatórios detalhados."
            style="card--performance"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.1 }} // Um pequeno atraso para a animação
        >
          <CardResources
            icon={faDumbbell}
            title="Conexão com personal trainers"
            description="Encontre profissionais certificados para guiar seus treinos e acompanhar seu progresso."
            style="card--trainer"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }} // Um atraso maior para o último card
        >
          <CardResources
            icon={faDumbbell}
            title="Comunidade engajada"
            description="Participe de desafios, compartilhe resultados e encontre suporte de outros usuários."
            style="card--comunity"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Resources;
