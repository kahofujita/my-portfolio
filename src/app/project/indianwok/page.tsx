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
          <h1 className={styles.projectTitle}>
            Indian Wokレストランのウェブサイト
          </h1>
          <h1 className={styles.projectDatePlace}>2023.01〜2023.08 | カナダ</h1>
        </div>
        <div className={styles.projectOverview}>
          カナダに立地するインド料理と中華料理のフュージョンレストランのウェブサイト
          <br />
          <br />
          【プロジェクト概要】
          <br />
          ・レストランのウェブサイト開発で、注文機能の実装
          <br />
          ・レストランオーナーがCMSを用いてサイトの編集と更新が可能
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
          </a>
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectDetailsHeader}>
            <h1>
              My <span className="accent-color">Responsibilities</span>
              （担当した業務）
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
                    ①ユーザーフレンドリーなCMSを使用したバックエンド開発
                  </span>
                  <br />
                  <br />
                  ・ウェブサイトのバックエンドとしてWordPressを採用
                  <br />
                  ・WordPress管理画面から、メニューや写真などウェブサイトのコンテンツを編集、削除、更新可能
                  <br />
                  ・WordPressのGraphQLプラグインを利用して、GraphQLデータベースを構築
                  <br />
                  ・データベースとフロントエンドを連携し、リアルタイムデータをサイトに表示
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/indianwok2.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">②メニューのカテゴリー化実装</span>
                  <br />
                  <br />
                  ・WordPress内で14種類のカテゴリーを作成し、メニューを各カテゴリーに分類
                  <br />
                  ・各カテゴリーのナビゲーションをフロントエンドに実装
                  <br />
                  ・フロントエンドからカテゴリー別にバックエンドの正確なデータを取得して表示
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
                  <span className="text-bold">③カート機能の実装</span>
                  <br />
                  <br />
                  ・ReactのuseContextフックを活用して、ユーザーがカートに追加したアイテムを保存
                  <br />
                  ・useContextフックを使用することで、他のページへ移動してもデータの受け渡しが可能
                  <br />
                  ・カートにアイテムが追加されると、左上のカートアイコンに数量を表示
                  <br />
                  ・カートページにて追加したアイテムや数量を確認、編集が可能
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h1>Tech Stack（使用した技術）</h1>
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
