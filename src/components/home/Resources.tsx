import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import CardResources from "./components/CardResources";
import styles from "./Resources.module.scss";

function Resourses() {
  return (
    <section className={`${styles.resources} container`}>
      <article>
        <h2>Suporte e Ferramentas</h2>
        <h1>Recursos Oferecidos</h1>
      </article>

      <div className={styles.resources_row}>
        <CardResources
          icon={faDumbbell}
          title="Relatórios de Desempenho"
          description="Acompanhe seu desenvolvimento através de relatórios detalhados."
          style="card--performance"
        />
        <CardResources
          icon={faDumbbell}
          title="Conexão com personais trainers"
          description="Encontre profissionais certificados para guiar seus treinos e acompanhar seu progresso."
          style="card--trainer"
        />
        <CardResources
          icon={faDumbbell}
          title="Comunidade engajada"
          description="Participe de desafios, compartilhe resultados e encontre suporte de outros usuários."
          style="card--comunity"
        />
      </div>
    </section>
  );
}

export default Resourses;
