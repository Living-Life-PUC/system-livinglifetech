import styles from "./Community.module.scss"

function Community() {
  return (
    <section className={`${styles.community}`}>
      <article>
        <h2>Serviços de Qualidade</h2>
        <h1>Personais Trainers Qualificados</h1>
        <p>
          Nossos treinadores são especialistas e estão prontos para ajudar você a maximizar seus
          resultados com orientação personalizada.
        </p>
      </article>
    </section>
  );
}

export default Community;
