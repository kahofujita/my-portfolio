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
          <h1 className={styles.projectTitle}>Stylify</h1>
          <h1 className={styles.projectDatePlace}>
            Jan 2023 - Apr 2023 | Canada
          </h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle-italic">
            Mobile App for Beauty Salons
          </span>
          <br />
          <br />
          Project Overview:
          <br />
          ・Development of a two-sided mobile app for beauty salons and general
          consumers.
          <br />
          ・Implementation of a reservation management system.
          <br />
          ・Distribution of coupons and special offers.
          <br />
          ・Provision of business performance data for beauty salons.
          <br />
          <br />
          【URL】
          <br />
          <a
            href="https://stylify-ca.netlify.app/"
            className="style-unset"
            target="_blank"
          >
            https://stylify-ca.netlify.app/
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
                <img src="/images/stylify1.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. Implementation of Login Functionality
                  </span>
                  <br />
                  <br />
                  ・Obtained Google API and integrated it into the project.
                  <br />
                  ・Introduced login functionality with Google accounts using
                  Google OAuth.
                  <br />
                  ・Implemented server-side endpoints for adding, updating, and
                  deleting user data.
                </p>
                <br />
                <br />
                <p>
                  <span className="text-bold">
                    2. Strengthening Security with JWT Authentication
                  </span>
                  <br />
                  <br />
                  ・Used Node.js and Express.js to add middleware that restricts
                  access to all endpoints to authenticated users.
                  <br />
                  ・Utilized JWT tokens to verify user authentication
                  information in the app.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySectionForStylify}>
              <div>
                <img src="/images/stylify2.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    3. Implementation of Business Performance Screen
                  </span>
                  <br />
                  <br />
                  ・Added salon business information such as revenue,
                  reputation, and revenue by stylist to the database.
                  <br />
                  ・Retrieved real-time data from the database and displayed it
                  on the frontend.
                  <br />
                  ・Added MySQL queries to retrieve daily, weekly, monthly, and
                  yearly revenue.
                  <br />
                  ・Provided daily, weekly, monthly, and yearly filters on the
                  UI to display revenue and stylist rankings.
                  <br />
                  ・Visualized business performance data using graphs and charts
                  with the React Native library.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySectionForStylify}>
              <div>
                <img src="/images/stylify3.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    4. Implementation of Search Functionality
                  </span>
                  <br />
                  <br />
                  ・Added search functionality for salon names, service names,
                  and stylist names in the consumer side.
                  <br />
                  ・Added search functionality for customer names, service
                  names, and stylist names in the salon side.
                  <br />
                  ・Created search queries on the backend to enable searching.
                  <br />
                  ・Retrieved information from the database based on the
                  searched filters and displayed it on the UI.
                </p>
                <br />
                <br />
                <p>
                  <span className="text-bold">5. Creation of Components</span>
                  <br />
                  <br />
                  ・Font Component: Provides suitable fonts for headings and
                  body text.
                  <br />
                  ・Card Component: Displays information for booked customers.
                  <br />
                  ・Tab Component: Provides filters for daily, weekly, monthly,
                  and yearly data.
                  <br />
                  ・Modal Component: Displayed for actions such as booking
                  completion.
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
                src={"/icons/reactnative.png"}
                alt="React Native"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/expo.png"}
                alt="Expo"
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
                src={"/icons/mysql.png"}
                alt="MySQL"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/prisma.png"}
                alt="Prisma"
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
              <a
                href="https://github.com/team-heisenberg/stylify"
                target="_blank"
              >
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
