import Input from "./Input";
import styles from "./Form.module.scss"

function Form() {
    return ( 
        <form action="" className={styles.form}>
            <Input placeholder="Nome completo"/>
            <Input placeholder="Username"/>
            <Input placeholder="E-mail"/>

            <button className={styles.button}>Cadastrar</button>
        </form>
     );
}

export default Form;