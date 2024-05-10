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
          <h1 className={styles.projectTitle}>Booklyst Website</h1>
          <h1 className={styles.projectDatePlace}>Created in June 2022</h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle">Inspiration:</span>
          <br />
          <br />
          For book lovers, a space where books of various genres and trending
          titles are showcased is an exhilarating place, I believe. Being a book
          enthusiast myself, I devoted effort to creating a website that excites
          fellow book lovers.
          <br />
          ※ This project primarily focuses on design, and Lorem Ipsum... is used
          for content.
          <br />
          <br />
          <br />
          URL:
          <br />
          <a
            href="https://booklyst.netlify.app/"
            className="style-unset"
            target="_blank"
          >
            https://booklyst.netlify.app/
          </a>
        </div>
        <div className={styles.projectDetails}>
          {/* <div className={styles.projectDetailsHeader}>
            <h1>
              My <span className="accent-color">Responsibilities</span>
              （担当した業務）
            </h1>
            <Liner />
          </div> */}
          <div className={styles.projectDetailsBody}>
            <div className={styles.projectDetailsBodySectionForBooklyst}>
              <div>
                <div>
                  <img src="/images/booklyst1.png" alt="" />
                </div>
                <div>
                  <img src="/images/booklyst2.png" alt="" />
                </div>
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. Unique Font for Site Title "Booklover"
                  </span>
                  <br />
                  <br />
                  For the site title "Booklover," I've utilized the unique
                  handwritten-style English font "Splash" to create a
                  sophisticated charm as the site's logo. This font not only
                  conveys the excitement of book lovers but also sets it apart
                  from the other font "Lato," achieving a more memorable design.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    2. Visualizing Book Imagery with Numerous Images
                  </span>
                  <br />
                  <br />
                  Visualization is crucial in any field. In the realm of books,
                  while there's joy in imagining scenes as you read, using
                  images can instantly provide impact. On the Booklyst website,
                  I incorporate numerous images to inspire readers.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    3. Highlighting Quotes from Books
                  </span>
                  <br />
                  <br />
                  While there are many wonderful books worldwide, finding
                  remarkable quotes is also a pleasure. At Booklyst, I feature a
                  section where quotes are picked from books and presented
                  daily.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    4. Animations on the Website
                  </span>
                  <br />
                  <br />
                  Incorporating various animations on the website, such as
                  animations when clicking on book images, when hovering over
                  gallery images, and hover effects on navigation and buttons,
                  adds an interactive and refined UI design to the static
                  design, enhancing user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h1>
              Tech Stack /<span className="accent-color"> Design</span>{" "}
              Inspirations
            </h1>
          </div>
          <div className={styles.techStackBody}>
            <div className="iconsContainer">
              <Image
                src={"/icons/html.png"}
                alt="Html"
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
                src={"/icons/javascript.png"}
                alt="Javascript"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/figma.png"}
                alt="Figma"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/pinterest.png"}
                alt="Pinterest"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/netlify.png"}
                alt="Netlify"
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
              <a href="/https://github.com/kahofujita/booklyst" target="_blank">
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
