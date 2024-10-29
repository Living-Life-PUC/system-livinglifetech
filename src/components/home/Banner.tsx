import styles  from "./Banner.module.scss"

function Banner() {
  return (
    <div className={styles.banner}>
        <h1>Encontre sua <br /> motivação e <br /><span>viva a vida!</span></h1>
    </div>
  );
}

export default Banner;
