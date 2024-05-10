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
          <h1 className={styles.projectTitle}>My Green</h1>
          <h1 className={styles.projectDatePlace}>
            Apr 2022 - Aug 2022 | Canada
          </h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle-italic">
            Web Application for Plant Cultivation Services
          </span>
          <br />
          <br />
          Project Overview:
          <br />
          ・Providing guides on how to grow plants.
          <br />
          ・Management of owned plants including scheduling watering and
          fertilizing.
          <br />
          ・Implementation of plant scanning and plant identification
          functionality.
          <br />
          ・Plant journal and social media platform for plant enthusiasts.
          <br />
          <br />
          URL:
          <br />
          <a
            href="https://mygreen.netlify.app/"
            className="style-unset"
            target="_blank"
          >
            https://mygreen.netlify.app/
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
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/mygreen1.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. Plant Management Functionality for Users
                  </span>
                  <br />
                  <br />
                  ・Added plant data properties to the Firebase user table.
                  <br />
                  ・Introduced functionality to add and remove plants via the
                  frontend.
                  <br />
                  ・Retrieved user plant data from the database and displayed it
                  on the UI.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/mygreen2.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    2. Implementation of Plants Watering and Fertilizing
                    Management Functionality
                  </span>
                  <br />
                  <br />
                  ・Implemented functionality to add watering and fertilizing
                  dates from the calendar.
                  <br />
                  ・Added user-recorded watering and fertilizing dates to the
                  database.
                  <br />
                  ・Provided appropriate information considering the watering
                  and fertilizing frequency of each plant.
                  <br />
                  ・Implemented a reminder feature to display reminders one day
                  before the next watering and fertilizing date.
                  <br />
                  ・Implemented functionality to update the last watering and
                  fertilizing dates.
                  <br />
                  ・Displayed information on the required amount of sunlight and
                  frequency of exposure to sunlight for each plant.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/mygreen3.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    3. Development of Plant Detail Screen
                  </span>
                  <br />
                  <br />
                  ・Saved detailed plant information to the database.
                  <br />
                  ・When users search for a plant, retrieved information from
                  the database and displayed it on the detail screen.
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
                src={"/icons/javascript.png"}
                alt="JavaScript"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/html.png"}
                alt="HTML"
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
                src={"/icons/firebase.png"}
                alt="Firebase"
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
              <a href="https://github.com/kahofujita/MyGreen" target="_blank">
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
