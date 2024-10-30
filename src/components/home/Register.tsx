import Form from "./components/Form";
import styles from "./Register.module.scss";
import { motion } from 'framer-motion';

function Register() {
  // Variantes de animação
  const registerVariants = {
    hidden: { opacity: 0, rotate: -5 }, // Inicia invisível e levemente rotacionado
    visible: { opacity: 1, rotate: 0 },   // Fica visível e na posição original
  };

  return (
    <div className={styles.register} id="register">
      <motion.section
        className={`container ${styles.register_align}`}
        initial="hidden"
        whileInView="visible"
        variants={registerVariants}
        transition={{ duration: 0.5 }}
      >
        <article>
          <h2>Permaneça na Comunidade</h2>
          <h1>Cadastre-se Gratuitamente</h1>
          <p>
            Inicie agora mesmo sua jornada transformadora em direção a uma vida mais ativa, saudável
            e repleta de bem-estar. Redescubra seu potencial e alcance uma nova versão de si mesmo!
          </p>
        </article>

        <Form />
      </motion.section>
    </div>
  );
}

export default Register;
