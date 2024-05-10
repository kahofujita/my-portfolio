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
          <h1 className={styles.projectTitle}>Remedi App</h1>
          <h1 className={styles.projectDatePlace}>
            Feb 2024 - Present | Chile
          </h1>
        </div>
        <div className={styles.projectOverview}>
          <span className="text-subtitle-italic">
            Pharmaceutical Service Web Application
          </span>
          <br />
          <br />
          Project Overview:
          <br />
          ・Remedi, a three-sided web application targeting three types of
          users: Remedi, pharmacies, and patients.
          <br />
          ・A service where pharmacies and patients needing medication can place
          orders on the platform.
          <br />
          ・Recording and management of pharmacy sales and the number of sales
          for each medication from the Remedi administration panel.
          <br />
          ・Integration with WhatsApp, enabling reception from outside the
          platform.
          <br />
          <br />
          URL:
          <br />
          <a
            href="https://remedi-next.vercel.app/"
            className="style-unset"
            target="_blank"
          >
            https://remedi-next.vercel.app/
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
                <img src="/images/remedi1.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    1. User Account Settings Page
                  </span>
                  <br />
                  <br />
                  ・Added /ajustes (settings route).
                  <br />
                  ・Implemented functionality for users to edit profile
                  information set during registration.
                  <br />
                  ・Added functionality to retrieve account settings information
                  from the database and automatically display it in the input
                  fields of the settings page.
                  <br />
                  ・Added required properties to the input fields (Input
                  component).
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/remedi2.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    2. Pharmacy Response Page to Prescription Order Requests
                    Sent by Patients
                  </span>
                  <br />
                  <br />
                  ・Added /responder-presquesto (response route to order
                  requests).
                  <br />
                  ・Read the order request ID from the route.
                  <br />
                  ・Display order details.
                  <br />
                  ・Display a reply form for pharmacies and implement input
                  functionality.
                  <br />
                  ・Update the database with the reply to the order request.
                  <br />
                  ・Enable patients to view the reply content.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/remedi3.png" alt="" />
                <img src="/images/remedi4.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">
                    3. Pharmacy Business Validation Feature
                  </span>
                  <br />
                  <br />
                  ・Added an active status property to the database and session
                  for all users.
                  <br />
                  ・When Remedi and patients complete account setup, the active
                  status becomes true, allowing app usage.
                  <br />
                  ・When a pharmacy completes account setup, Remedi verifies the
                  profile information, sends an account activation link to the
                  pharmacy via email upon successful validation.
                  <br />
                  ・Clicking the activation link received by the pharmacy
                  activates the account, setting the active status to true and
                  allowing app usage to commence.
                  <br />
                  ・Added ActiveToken table to the database.
                  <br />
                  ・ActiveToken becomes invalid after one use and expires after
                  one week.
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div></div>
              <div>
                <p>
                  <span className="text-bold">
                    4. Feature Enabling Patients to Send Prescription Order
                    Requests via WhatsApp API Integration
                  </span>
                  <br />
                  <br />
                  ・Set up WhatsApp Business Account settings through Meta
                  Cloud.
                  <br />
                  ・Obtained WhatsApp Flow API from Meta Cloud.
                  <br />
                  ・Added interactive messaging functionality using WhatsApp
                  Flow API.
                  <br />
                  ・Added patient&apos;s order requests to the database and sent to
                  pharmacies.
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
                src={"/icons/prisma.png"}
                alt="Prisma"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/posgresql.png"}
                alt="PosgreSQL"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/whatsapp.png"}
                alt="WhatsApp API"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/meta.png"}
                alt="Meta Cloud"
                width={70}
                height={70}
                className="iconImage"
              />
              <Image
                src={"/icons/google.png"}
                alt="Google OAuth"
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
