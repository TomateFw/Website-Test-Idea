import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles["heroseclayout"]}>
      <div className={styles["heroseccontainer"]}>
        <div className={styles["herosectext"]}>
          <h1>Développeur et Designer Indépendant</h1>
          <h2>
            De l'idée au produit final, je conçois des expériences utilisateurs
            uniques. Créativité, performance et expérience utilisateur au cœur
            de chaque projet
          </h2>
        </div>

        <div className={styles["herosectagly"]}>
          <div className={styles["herosectag"]}>
            <div className={styles["circle"]}></div>
            <h1>Disponible pour vos projets</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
