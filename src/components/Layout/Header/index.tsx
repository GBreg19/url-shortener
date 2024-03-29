import { useState } from "react";
import styles from "./Header.module.css";
import logo from "@assets/logo.svg";
import { Button } from "../../Base";

const Header = () => {
  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <nav className={`${styles.nav}  ${toggleBurger ? styles.visible : ""}`}>
        <ul className={styles.navBar}>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li className={styles.login}>
            <a>Login</a>
          </li>
          <li className={styles.signupLi}>
            <Button className={styles.signup}>
              Sign up
            </Button>
          </li>
        </ul>
      </nav>
      <div
        className={styles.iconMenu}
        onClick={() => setToggleBurger(!toggleBurger)}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>menu</title>
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
