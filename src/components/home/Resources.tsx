import CardResources from "./components/CardResources";
import styles from "./Resources.module.scss";

function Resourses() {
  return (
    <section className={styles.resources}>
      <article>
        <h2>Suporte e Ferramentas</h2>
        <h1>Recursos Oferecidos</h1>
      </article>

      <div>
        <CardResources />
      </div>
    </section>
  );
}

export default Resourses;
