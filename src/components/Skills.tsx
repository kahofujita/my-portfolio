import Image from "next/image";
import styles from "../app/skills.module.css";
import Liner from "./Liner";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsTitle}>
        <h1>Skills</h1>
        <Liner />
      </div>
      <div className={styles.skillsDetails}>
        <div className={styles.skillsDetailsWrapper}>
          <div>
            <h2>
              <span className="accent-color">Frontend</span> Development
            </h2>
            <div className={styles.iconsContainer}>
              <Image
                src={"/icons/javascript.png"}
                alt="Javascript"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/typescript.png"}
                alt="Typescript"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/react.png"}
                alt="React"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/nextjs.png"}
                alt="Next JS"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/reactnative.png"}
                alt="React Native"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/expo.png"}
                alt="Expo"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/tailwind.png"}
                alt="Tailwind CSS"
                width={70}
                height={70}
                className={styles.iconImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.skillsDetailsWrapper}>
          <div>
            <h2>
              <span className="accent-color">Backend</span> Development /{" "}
              <span className="accent-color">Database</span>
            </h2>
            <div className={styles.iconsContainer}>
              <Image
                src={"/icons/nodejs.png"}
                alt="Node JS"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/express.png"}
                alt="Express"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/mongodb.png"}
                alt="MongoDB"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/mysql.png"}
                alt="MySQL"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/prisma.png"}
                alt="Prisma"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/graphql.png"}
                alt="GraphQL"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/firebase.png"}
                alt="Firebase"
                width={70}
                height={70}
                className={styles.iconImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.skillsDetailsWrapper}>
          <div>
            <h2>
              <span className="accent-color">Design</span> / Other tools
            </h2>
            <div className={styles.iconsContainer}>
              <Image
                src={"/icons/wordpress.png"}
                alt="WordPress"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/figma.png"}
                alt="Figma"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/illustrator.png"}
                alt="Illustrator"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/jira.png"}
                alt="Jira"
                width={70}
                height={70}
                className={styles.iconImage}
              />
              <Image
                src={"/icons/trello.png"}
                alt="Trello"
                width={70}
                height={70}
                className={styles.iconImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
