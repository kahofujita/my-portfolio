/* eslint-disable @next/next/no-img-element */
"use client";

import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Liner from "@/components/Liner";
import Image from "next/image";
import styles from "../../project.module.css";
import { useRouter } from "next/navigation";

const ProjectPage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Divider />
      <div className="arrowLeft">
        <Image
          src="/svg/arrow-left.svg"
          alt="Go Back"
          width={40}
          height={40}
          onClick={() => {
            router.back();
          }}
        />
      </div>
      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <h1 className={styles.projectTitle}>Global Player</h1>
          <h1 className={styles.projectDatePlace}>
            Sep 2022 - Dec 2022 | Canada
          </h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle-italic">
            Web Application for Scouting Professional Players for the e-Sports
            Game &quot;League of Legends&quot;
          </span>
          <br />
          <br />
          Project Overview:
          <br />
          ・Provision of information such as performance data and reviews for
          professional players.
          <br />
          ・Implementation of a feature to compare the performance of two
          professional players.
          <br />
          ・Integration with RIOT API enabling real-time data retrieval.
          <br />
          <br />
          URL:
          <br />
          <a
            href="https://www.globalplayer.ca/"
            className="style-unset"
            target="_blank"
          >
            https://www.globalplayer.ca/
          </a>
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectDetailsHeader}>
            <h1>
              My <span className="accent-color">Responsibilities</span>
            </h1>
            <Liner />
          </div>
          <div className={styles.projectDetailsBody}>
            <div className={styles.projectDetailsBodySectionForStylify}>
              <div>
                <img
                  src="/images/globalplayer1.png"
                  alt=""
                  className={styles.globalplayerImage1}
                />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. Development of League of Legends Player Ranking Page
                  </span>
                  <br />
                  <br />
                  ・Obtained and integrated RIOT API into the project.
                  <br />
                  ・Stored data of the top 300 players obtained from RIOT API
                  into MongoDB.
                  <br />
                  ・Used Axios library to retrieve data of 300 players and
                  display it on the UI.
                  <br />
                  ・Visually represented player data such as name, icon, win
                  rate, and skills using charts and pie graphs.
                  <br />
                  ・Displayed top 3 players on ranking podium and 4th place and
                  below in tabular form.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySectionForStylify}>
              <div>
                <img
                  src="/images/globalplayer2.png"
                  alt=""
                  className={styles.globalplayerImage3}
                />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    2. Player Performance Comparison Feature
                  </span>
                  <br />
                  <br />
                  ・Implemented the functionality to select two players that
                  scouts want to compare.
                  <br />
                  ・Displayed all data of the selected two players on the UI.
                  <br />
                  ・Visualized data using pie charts and line graphs.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySectionForStylify}>
              <div>
                <img src="/images/globalplayer3.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    3. Implementation of Refined UI Design
                  </span>
                  <br />
                  <br />
                  ・Created components such as cards, tables, sidebars, pie
                  graphs, and line graphs.
                  <br />
                  ・Pursued pixel-perfect styling.
                  <br />
                  ・Added a hamburger menu.
                  <br />
                  ・Tested on different devices and confirmed responsive design.
                  <br />
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySectionForStylify}>
              <div></div>
              <div>
                <p>
                  <span className="text-bold">4. Project Management</span>
                  <br />
                  <br />
                  ・Introduced Agile development methodology, monitored progress
                  in each sprint, and managed deadlines.
                  <br />
                  ・Created agendas and facilitated weekly meetings.
                  <br />
                  ・Identified and improved blockers during stand-up meetings.
                  <br />
                  ・Assigned tasks and tracked progress using Trello.
                  <br />
                  ・Ensured clear and effective communication between teams via
                  Slack and face-to-face meetings.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h1>Tech Stack</h1>
          </div>
          <div className={styles.techStackBody}>
            <div className="iconsContainer">
              <Image
                src={"/icons/react.png"}
                alt="React"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/typescript.png"}
                alt="Typescript"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/nodejs.png"}
                alt="Node JS"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/express.png"}
                alt="Express JS"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/mongodb.png"}
                alt="MongoDB"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/sass.png"}
                alt="Sass"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/docker.png"}
                alt="Docker"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/redis.png"}
                alt="Redis"
                width={70}
                height={70}
                className="iconImage"
              />
            </div>
          </div>
        </div>
        <div className={styles.gitHub}>
          <div className={styles.githubHeader}>
            <h1>
              <span className="accent-color">GitHub</span> Repository
            </h1>
          </div>
          <div className={styles.githubBody}>
            <div className="iconsContainer">
              <a href="https://github.com/zyzmoz/global-player" target="_blank">
                <Image
                  src={"/icons/github.png"}
                  alt="GitHub"
                  width={70}
                  height={70}
                  className="iconImage"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <Footer />
    </>
  );
};

export default ProjectPage;
