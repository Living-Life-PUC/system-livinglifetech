// Estilização
import styles from "./Input.module.scss";

// Tipos
interface InputTypes {
  placeholder: string;
  name: string;
  type?: string; // Optional type prop for flexibility (e.g., password, email)
}

function Input({ placeholder, name, type = "text" }: InputTypes) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name} // Add the name prop here
      placeholder={placeholder}
    />
  );
}

export default Input;