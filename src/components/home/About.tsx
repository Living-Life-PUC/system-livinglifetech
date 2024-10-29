import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <section className={`container ${styles.about_align}`}>
        <article>
          <h2>Living Life</h2>
          <h1>Sobre</h1>
          <p>
            Living Life Fitness Tech é plataforma inovadora de socialização, atividades físicas e
            gameficação que conecta pessoas interessadas no estilo de vida saudável e profissionais
            da educação física, proporcionando uma experiência fitness personalizada, segura e
            engajadora.
          </p>
        </article>

        <img src="/public/componente_about.png" alt="Atividades" />
      </section>
    </div>
  );
}

export default About;
