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
          <h1 className={styles.projectTitle}>Booklyst　ウェブサイト</h1>
          <h1 className={styles.projectDatePlace}>2022年6月制作</h1>
        </div>
        <div className={styles.projectOverview}>
          【インスピレーション】
          <br />
          <br />
          本好きにとって、さまざまなジャンルの本やトレンドの本が紹介される空間は、非常に心躍る場所だと思います。私自身も本好きであり、本好きにとってワクワクするようなウェブサイトを制作することに尽力しました。
          <br />
          ※このプロジェクトはデザインが主体であり、コンテンツはLorem
          Ipsum...を使用しています。
          <br />
          <br />
          <br />
          【URL】
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
                    ①サイトタイトル「Booklover」にユニークなフォントを使用
                  </span>
                  <br />
                  <br />
                  サイトタイトル「Booklover」には、ユニークな手書き風欧文フォント「Splash」を使用し、サイトのロゴとして洗練された魅力を演出しています。このフォントは、本好きのワクワク感を伝える一方で、他のフォント「Lato」との差別化も図っており、より印象的なデザインを実現しています。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    ②多数の画像を使用して本のイメージをビジュアル化
                  </span>
                  <br />
                  <br />
                  ビジュアル化はどの分野でも重要です。本の世界では、文章を読んで頭の中でイメージを膨らませる楽しさがありますが、画像を使うことで一目でインパクトを与えることができます。Booklystのウェブサイトでは、多数の画像を使用し、ユーザーにインスピレーションを与えます。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">③本からの引用をピックアップ</span>
                  <br />
                  <br />
                  世界中には素晴らしい本がたくさんありますが、素晴らしい引用を見ることも一つの楽しみです。Booklystでは本からの名言をピックアップし、日替わりで紹介するセクションを設けています。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    ④ウェブサイト上のアニメーション
                  </span>
                  <br />
                  <br />
                  本の画像をクリックした際のアニメーションや、ギャラリーの画像にマウスを移動した際のアニメーション、ナビゲーションやボタンのホバーエフェクトなど、ウェブサイト上にさまざまなアニメーションを取り入れ、静的なデザインに加えてユーザーにインタラクティブで洗練されたUIデザインを提供しています。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h1>
              Tech Stack /<span className="accent-color"> Design</span>{" "}
              Inspirations（使用したツール）
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
