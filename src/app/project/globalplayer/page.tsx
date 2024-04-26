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
          <h1 className={styles.projectTitle}>Global Player</h1>
          <h1 className={styles.projectDatePlace}>2022.09〜2022.12 | カナダ</h1>
        </div>
        <div className={styles.projectOverview}>
          eスポーツゲーム「リーグ・オブ・レジェンド」のプロ選手スカウトWebアプリケーション
          <br />
          <br />
          【プロジェクト概要】
          <br />
          ・プロ選手のパフォーマンスデータやレビューなどの情報提供
          <br />
          ・プロの2選手の比較機能の実装
          <br />
          ・RIOT APIとの統合により、リアルタイムでのデータ取得が可能
          <br />
          <br />
          【URL】
          <br />
          <a
            href="https://www.globalplayer.ca/"
            className="style-unset"
            target="_blank"
          >
            https://www.globalplayer.ca/
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
                    ①リーグ・オブ・レジェンドのプレイヤーランキングページの開発
                  </span>
                  <br />
                  <br />
                  ・RIOT APIの取得とプロジェクトへの統合
                  <br />
                  ・RIOT APIから取得した上位300プレイヤーのデータをMongoDBに格納
                  <br />
                  ・Axiosライブラリを使用して300プレイヤーのデータを取得し、UIに表示
                  <br />
                  ・プレイヤーの名前、アイコン、勝率、スキルなどのデータを図表や円グラフで視覚的に表示
                  <br />
                  ・上位3プレイヤーはランキング台に、4位以下はテーブル形式で表示
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
                    ②プレイヤーのパフォーマンス比較機能の追加
                  </span>
                  <br />
                  <br />
                  ・スカウトが比較したい2プレイヤーを選択
                  <br />
                  ・選択した2プレイヤーのデータをすべてUIに表示
                  <br />
                  ・円グラフや折れ線グラフを使用してデータを視覚化
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
                  <span className="text-bold">③洗練されたUIデザインの実装</span>
                  <br />
                  <br />
                  ・カード、テーブル、サイドバー、円グラフ、折れ線グラフなどのコンポーネントの制作
                  <br />
                  ・ピクセルパーフェクトなスタイリングの追求
                  <br />
                  ・ハンバーガーメニューの追加
                  <br />
                  ・デバイスごとのテストとレスポンシブデザインの確認
                  <br />
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
                    ④プロジェクトマネージャーとしての役割
                  </span>
                  <br />
                  <br />
                  ・アジャイル開発手法の導入、毎スプリントの進捗確認と締切管理
                  <br />
                  ・週次ミーティングのアジェンダ作成と進行
                  <br />
                  ・スタンドアップミーティングでブロッカーの確認と改善
                  <br />
                  ・Trelloを使用したタスクのアサインと進捗管理
                  <br />
                  ・Slackや対面ミーティングを通じたチーム間の明確かつ効果的なコミュニケーション
                  <br />
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
                src={"/icons/react.png"}
                alt="React"
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
                src={"/icons/mongodb.png"}
                alt="MongoDB"
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
