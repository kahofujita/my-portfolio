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
          <h1 className={styles.projectTitle}>Website Design for a Tea Shop</h1>
          <h1 className={styles.projectDatePlace}>Created in April 2024</h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle">Inspiration:</span>
          <br />
          <br />
          When visiting a tea shop, I was deeply impressed by the diverse aromas
          and flavors of tea leaves gathered from various regions, the tranquil
          atmosphere of the interior space, and the dedication to tea utensils.
          <br />
          To capture this inspiration, I created a web design for a fictional
          tea cafe called &quot;Koicha&quot;.
          {/* <br />
          <br />
          <br />
          【URL】
          <br />
          <a
            href="https://www.indianwok.ca/"
            className="style-unset"
            target="_blank"
          >
            https://www.indianwok.ca/
          </a> */}
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
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/koicha1.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. Deep Green Evokes Tea Imagery
                  </span>
                  <br />
                  <br />
                  In Uji City, Kyoto Prefecture, one of Japanese representative
                  tea-producing regions, green color represents the imagery of
                  tea across store branding, city signs, school uniforms, and
                  even train hand straps. Inspired by this ambiance, the website
                  for &quot;Koicha&quot; employs deep green to exude an aura of
                  sophistication and tranquility.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    2. Harmonious Blend of Three Colors
                  </span>
                  <br />
                  <br />
                  Creating an atmosphere of maturity with deep green (#3D3A1B),
                  adding suppleness and contrast with skin color (#EAE2D7), and
                  accentuating with yellow (#E8D939) avoids monotony, achieving
                  an eye-catching and appealing color combination.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    3. Photo Selection to Determine Ambiance
                  </span>
                  <br />
                  <br />
                  When selecting photos from free image sites like Unsplash,
                  it is crucial to ensure they align with the aforementioned
                  three colors and fit the website concept. Photo selection
                  significantly influences web design quality, necessitating
                  choosing images that align with the website vibe.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    4. Illustrations Using Simple Lines and Circles
                  </span>
                  <br />
                  <br />
                  Incorporating small illustrations utilizes the website white
                  space and guides toward an attractive design. Given the
                  emphasis on wabi-sabi and simplicity in Koicha&apos;s website,
                  simple illustrations of lines and circles are integrated.
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    5. Fonts Aligning with Koicha&apos;s Brand Image
                  </span>
                  <br />
                  <br />
                  Using &quot;Klee One&quot; for Japanese text and &quot;Garamond&quot; for English,
                  Klee One offers a soft yet clear and user-friendly impression,
                  while Garamond, akin to many luxury brands, exudes a slight
                  sense of sophistication. These fonts enhance the luxurious
                  feel of Koicha&apos;s website, blending wabi-sabi and softness into
                  its image.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h1>
              <span className="accent-color">Design</span> Tools / Inspirations
            </h1>
          </div>
          <div className={styles.techStackBody}>
            <div className="iconsContainer">
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
