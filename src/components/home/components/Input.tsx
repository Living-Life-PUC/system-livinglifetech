// Estilização
import styles from "./Input.module.scss"

// Tipos
interface InputTypes {
  placeholder: string;
}

function Input({ placeholder }: InputTypes) {
  return <input className={styles.input} type="text" placeholder={placeholder} />;
}

export default Input;
