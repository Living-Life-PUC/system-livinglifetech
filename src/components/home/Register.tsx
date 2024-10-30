import Form from "./components/Form";
import styles from "./Register.module.scss";

function Register() {
  return (
    <div className={styles.register}>
      <section className={`container ${styles.register_align}`}>
        <article>
          <h2>Permaneça na Comunidade</h2>
          <h1>Cadastre-se Gratuitamente</h1>
          <p>
            Inicie agora mesmo sua jornada transformadora em direção a uma vida mais ativa, saudável
            e repleta de bem-estar. Redescubra seu potencial e alcance uma nova versão de si mesmo!
          </p>
        </article>

        <Form/>
      </section>
    </div>
  );
}

export default Register;
