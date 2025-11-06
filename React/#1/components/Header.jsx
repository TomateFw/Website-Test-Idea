import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["page-header"]}>
      <div className={styles["logo"]}>
        <span>Company Name</span>
      </div>
      <div className={styles["nav-bar"]}>
        <a href="#about" className={styles["underline-button"]}>
          About
        </a>
        <a href="#services" className={styles["underline-button"]}>
          Services
        </a>
        <a href="#contact" className={styles["underline-button"]}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
