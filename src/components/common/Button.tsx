// Importações
import styles from "./Button.module.scss";

// Tipos
interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  const handleScroll = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={styles.button} onClick={handleScroll}>
      {text}
    </button>
  );
}

export default Button;
