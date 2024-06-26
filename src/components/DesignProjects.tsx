import styles from "../app/page.module.css";
import CardDesign from "./CardDesign";
import Liner from "./Liner";

const DesignProjects = () => {
  return (
    <div className={styles.designProjects}>
      <div className={styles.designProjectsWrapper}>
        <div>
          <h1>Design Projects</h1>
          <Liner />
        </div>
        <div>
          <CardDesign
            source="/koicha.png"
            alt="Koicha Website Design"
            id="koicha"
            title="Koicha"
            date="April 2024"
          />
          <CardDesign
            source="/booklyst.png"
            alt="Booklyst Website"
            id="booklyst"
            title="Booklyst"
            date="June 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
