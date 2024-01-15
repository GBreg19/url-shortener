import styles from "./Statistics.module.css";
import recognition from "@assets/icon-brand-recognition.svg";
import detail from "@assets/icon-detailed-records.svg";
import fully from "@assets/icon-fully-customizable.svg";
import { Button } from "../../Base";

const Statistics = () => {
  return (
    <>
      <section className={styles.statistics}>
        <div className={styles.serviceTitle}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={styles.serviceBoxes}>
          <div>
            <div>
              <img src={recognition} alt="brand recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div>
            <div>
              <img src={detail} alt="detailed records" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div>
            <div>
              <img src={fully} alt="fully customizable" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.descrEnd}>
        <h2>Boost your links today</h2>
        <Button>Get Started</Button>
      </section>
    </>
  );
};

export default Statistics;
