// Importações
import styles from './Navbar.module.scss';
import Button from "./Button";

function Navbar() {
    return ( 
        <nav className={styles.navbar}>
            <div className={styles.navbar_title}>
                <h4>Living Life</h4>
                <ul>
                    <li>Recursos</li>
                    <li>Personal</li>
                    <li>Comunidade</li>
                </ul>
            </div>

            <Button text="Cadastrar"/>
        </nav>
     );
}

export default Navbar;