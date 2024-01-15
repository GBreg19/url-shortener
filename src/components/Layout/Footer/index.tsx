import styles from "./Footer.module.css";
import logo from "@assets/logo.svg";
import facebook from "@assets/icon-facebook.svg";
import twitter from "@assets/icon-twitter.svg";
import pinterest from "@assets/icon-pinterest.svg";
import instagram from "@assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul aria-label="Features" className={styles.features}>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul aria-label="Resources" className={styles.resources}>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul aria-label="Company" className={styles.company}>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className={styles.socials}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
