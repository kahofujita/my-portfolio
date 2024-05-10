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
          <h1 className={styles.projectTitle}>Indian Wok Restaurant Website</h1>
          <h1 className={styles.projectDatePlace}>
            Jan 2023 - Aug 2023 | Canada
          </h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle-italic">
            Indian and Chinese Fusion Restaurant Website
          </span>
          <br />
          <br />
          Project Overview:
          <br />
          ・Website development for the restaurant with implementation of
          ordering functionality.
          <br />
          ・Restaurant owner can edit and update the site using a CMS.
          <br />
          <br />
          URL:
          <br />
          <a
            href="https://www.indianwok.ca/"
            className="style-unset"
            target="_blank"
          >
            https://www.indianwok.ca/
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
                <img src="/images/indianwok1.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. Backend Development Using User-Friendly CMS
                  </span>
                  <br />
                  <br />
                  ・WordPress adopted as the backend for the website.
                  <br />
                  ・Content such as menus and photos can be edited, deleted, and
                  updated from the WordPress admin panel.
                  <br />
                  ・Utilized WordPress GraphQL plugin to build a GraphQL
                  database.
                  <br />
                  ・Integrated the database with the frontend to display
                  real-time data on the site.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/indianwok2.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    2. Implementation of Menu Categorization
                  </span>
                  <br />
                  <br />
                  ・Created 14 categories within WordPress and classified the
                  menu into each category.
                  <br />
                  ・Implemented navigation for each category on the frontend.
                  <br />
                  ・Retrieved and displayed accurate backend data categorized by
                  each category from the frontend.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/indianwok3.png" alt="" />
                <img src="/images/indianwok4.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    3. Implementation of Cart Functionality
                  </span>
                  <br />
                  <br />
                  ・Utilized React useContext hook to save items added to the
                  cart by users.
                  <br />
                  ・Data transfer is facilitated even when navigating to other
                  pages using the useContext hook.
                  <br />
                  ・When items are added to the cart, the quantity is displayed
                  on the cart icon in the top left.
                  <br />
                  ・Users can view and edit items added to the cart as well as
                  the quantity on the cart page.
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
                src={"/icons/nextjs.png"}
                alt="Next JS"
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
                src={"/icons/tailwind.png"}
                alt="Tailwind CSS"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/graphql.png"}
                alt="GraphQL"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/wordpress.png"}
                alt="WordPress"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/vercel.png"}
                alt="Vercel"
                width={70}
                height={70}
                className="iconImage"
              />
            </div>
          </div>
        </div>
        {/* <div className={styles.gitHub}>
          <div className={styles.githubHeader}>
            <h1>
              <span className="accent-color">GitHub</span> Repository
            </h1>
          </div>
          <div className={styles.githubBody}>
            <div className="iconsContainer">
              <a href="/">
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
        </div> */}
      </div>
      <Divider />
      <Footer />
    </>
  );
};

export default ProjectPage;
