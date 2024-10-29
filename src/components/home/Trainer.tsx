import styles from "./Trainer.module.scss";

function Trainer() {
  return (
    <div className={styles.trainer}>
      <section className={`container ${styles.trainer_align}`}>
        <img src="/public/componente_trainer.png" alt="Atividades" />

        <article>
          <h2>Serviços de Qualidade</h2>
          <h1>Personais Trainers Qualificados</h1>
          <p>
            Nossos treinadores são especialistas e estão prontos para ajudar você a maximizar seus
            resultados com orientação personalizada.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Trainer;
