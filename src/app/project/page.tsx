import Liner from "@/components/Liner";
import styles from "../project.module.css";

const ProjectPage = () => {


  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <div className={styles.projectTitle}></div>
        <div className={styles.projectDatePlace}></div>
      </div>
      <div className={styles.projectOverview}></div>
      <div className={styles.projectDetails}>
        <div className={styles.projectDetailsHeader}>
          <h1>My Responsibilities（担当した業務）</h1>
          <Liner />
        </div>
        <div className={styles.projectDetailsBody}></div>
      </div>
    </div>
  );
};

export default ProjectPage;
