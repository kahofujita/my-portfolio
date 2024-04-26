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
          <h1 className={styles.projectDatePlace}>2022.04〜2022.08 | カナダ</h1>
        </div>
        <div className={styles.projectOverview}>
          植物育成サービス系Webアプリケーション
          <br />
          <br />
          【プロジェクト概要】
          <br />
          ・植物の育て方ガイドの提供
          <br />
          ・保有植物の管理と水やり、肥料やりのスケジュール管理
          <br />
          ・植物のスキャンと認証機能の実装
          <br />
          ・植物ジャーナルの記入や植物愛好家向けのSNSサービス
          <br />
          <br />
          【URL】
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
              （担当した業務）
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
                    ①ユーザーが所有する植物を管理する機能の追加
                  </span>
                  <br />
                  <br />
                  ・Firebaseのユーザーテーブルに、植物のデータプロパティを追加
                  <br />
                  ・UIを介して植物の追加と削除を可能にする機能を導入
                  <br />
                  ・データベースからユーザーの植物データを取得し、UIに表示
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
                    ②植物の水やりと肥料管理機能の追加
                  </span>
                  <br />
                  <br />
                  ・カレンダーから水やりや肥料やりの日付を追加可能にする機能を導入
                  <br />
                  ・ユーザーが水やりと肥料やりを行った日をデータベースに追加
                  <br />
                  ・各植物の水やりと肥料やりの頻度を考慮し、適切な情報を提供
                  <br />
                  ・次回の水やりと肥料やりが必要な日の1日前にリマインダーを表示する機能を実装
                  <br />
                  ・最終水やりと肥料やりの日付を更新できる機能を実装
                  <br />
                  ・各植物の必要な日光量と日光に当たる頻度の情報を表示
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div>
                <img src="/images/remedi2.png" alt="" />
              </div>
              <div>
                <p>
                  <span className="text-bold">③植物の詳細画面の追加</span>
                  <br />
                  <br />
                  ・植物の詳細情報をデータベースに保存
                  <br />
                  ・ユーザーが植物を検索すると、データベースから情報を取得し、詳細画面に表示
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
