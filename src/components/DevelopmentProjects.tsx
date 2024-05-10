import styles from "../app/page.module.css";
import CardDevelopment from "./CardDevelopment";

const DevelopmentProjects = () => {
  return (
    <div className={styles.developmentProjects}>
      <div className={styles.developmentProjectsWrapper}>
        <div>
          <h1>Development Projects</h1>
        </div>
        <div>
          <CardDevelopment
            source="/remedi.png"
            alt="Remedi App"
            id="remedi"
            title="Remedi"
            date="2024.02 - Current"
          />
          <CardDevelopment
            source="/indianwok.png"
            alt="Indian Wok Website"
            id="indianwok"
            title="Indian Wok"
            date="2023.01 - 2023.08"
          />
          <CardDevelopment
            source="/stylify.png"
            alt="Stylify App"
            id="stylify"
            title="Stylify"
            date="2023.01 - 2023.04"
          />
          <CardDevelopment
            source="/globalplayer.png"
            alt="Global Player App"
            id="globalplayer"
            title="Global Player"
            date="2022.09 - 2022.12"
          />
          <CardDevelopment
            source="/mygreen.png"
            alt="My Green App"
            id="mygreen"
            title="My Green"
            date="2022.04 - 2022.08"
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProjects;
