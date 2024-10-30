// Importações
import styles from "./Navbar.module.scss";
import Button from "./Button";

function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_title}>
        <h4>Living Life</h4>
        <ul>
          <li onClick={() => handleScroll("resources")}>Recursos</li>
          <li onClick={() => handleScroll("trainer")}>Personal</li>
          <li onClick={() => handleScroll("community")}>Comunidade</li>
        </ul>
      </div>

      <Button text="Cadastrar" />
    </nav>
  );
}

export default Navbar;
