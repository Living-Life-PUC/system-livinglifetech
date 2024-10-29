// Icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Estilização
import styles from "./CardResources.module.scss";

// Tipos
interface CardResourcesTypes {
  icon: any;
  title: string;
  description: string;
  style: string;
}

function CardResources({ icon, title, description, style }: CardResourcesTypes) {
  return (
    <article className={`${styles.card} ${styles[style]}`}>
      <figure>
        <FontAwesomeIcon icon={icon} />
      </figure>

      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
}

export default CardResources;
