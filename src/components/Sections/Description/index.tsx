import { Button } from "../../Base";
import styles from "./Description.module.css"

const Description = () => {
  return (
    <section className={styles.descr}>
      <div className={styles.descrBox}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default Description;
