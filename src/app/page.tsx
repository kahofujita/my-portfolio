"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import DesignProjects from "@/components/DesignProjects";
import DevelopmentProjects from "@/components/DevelopmentProjects";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    // <main className={styles.main}>
    <>
      <Header />
      <Divider />
      <main>
        <div id="about">
          <About />
        </div>
        <Divider />
        <div id="design">
          <DesignProjects />
        </div>
        <Divider />
        <div id="development">
          <DevelopmentProjects />
        </div>
        <Divider />
        <div id="skills">
          <Skills />
        </div>
        <Divider />
        <div id="contact">
          <Contact />
        </div>
        <Divider />
        <Footer />
      </main>
    </>
  );
}
