import Button from "./Button";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer_bg}>
      <footer className={`container ${styles.footer}`}>
        <div className={styles.footer_info}>
          <div>
            <h1>Living Life</h1>
            <ul>
              <li>Recursos</li>
              <li>Personal</li>
              <li>Comunidade</li>
            </ul>
          </div>

          <Button text="Cadastrar" />
        </div>

        <div className={styles.copyrigth}>
          <span>@2024 Living Life</span> - Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}

export default Footer;
