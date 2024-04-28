/* eslint-disable @next/next/no-img-element */
import styles from "../app/page.module.css";
import ButtonComponent from "./ButtonComponent";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div>
          <img src="/kahofujita.jpeg" alt="Kaho Fujita" />
        </div>
        <div>
          <h1 className={styles.aboutHeading}>
            <span className="font-italic">Kaho Fujita</span>
            <br />
            Full Stack Engineer &
            <br />
            Web Designer
            <br />
            based in Japan and Canada.
          </h1>
          <a href="#design">
            <ButtonComponent title="作品を見る" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
