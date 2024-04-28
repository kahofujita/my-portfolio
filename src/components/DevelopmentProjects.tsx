import styles from "../app/page.module.css";
import CardDevelopment from "./CardDevelopment";

const DevelopmentProjects = () => {
  return (
    <div className={styles.developmentProjects}>
      <div className={styles.developmentProjectsWrapper}>
        <div>
          <h1>Development Projects（開発プロジェクト）</h1>
        </div>
        <div>
          <CardDevelopment
            source="/remedi.png"
            alt="Remedi App"
            id="remedi"
            title="Remedi"
            date="2024年2月〜現在"
          />
          <CardDevelopment
            source="/indianwok.png"
            alt="Indian Wok Website"
            id="indianwok"
            title="Indian Wok"
            date="2023年1月〜8月"
          />
          <CardDevelopment
            source="/stylify.png"
            alt="Stylify App"
            id="stylify"
            title="Stylify"
            date="2023年1月〜4月"
          />
          <CardDevelopment
            source="/globalplayer.png"
            alt="Global Player App"
            id="globalplayer"
            title="Global Player"
            date="2022年9月〜12月"
          />
          <CardDevelopment
            source="/mygreen.png"
            alt="My Green App"
            id="mygreen"
            title="My Green"
            date="2022年4月〜8月"
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProjects;
