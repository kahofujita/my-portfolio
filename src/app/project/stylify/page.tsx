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
          <h1 className={styles.projectDatePlace}>2023.01〜2023.04 | カナダ</h1>
        </div>
        <div className={styles.projectOverview}>
          美容サロン向けモバイルアプリ
          <br />
          <br />
          【プロジェクト概要】
          <br />
          ・美容サロンと一般消費者向けの2サイドモバイルアプリの開発
          <br />
          ・予約管理システムの構築
          <br />
          ・クーポンやお得情報の配信
          <br />
          ・美容サロン向けのビジネスパフォーマンスデータの提供
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
                  <span className="text-bold">①ログイン機能の実装</span>
                  <br />
                  <br />
                  ・Google APIを取得し、プロジェクトに統合
                  <br />
                  ・Google OAuthを使用してGoogleアカウントでのログイン機能を導入
                  <br />
                  ・ユーザーデータの追加、更新、削除を行うサーバーサイドのエンドポイントを実装
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
                    ②JWT認証の導入によるセキュリティ強化
                  </span>
                  <br />
                  <br />
                  ・Node.jsとExpress.jsを使用して、すべてのエンドポイントへのアクセスを認証済みユーザーに制限するミドルウェアの追加
                  <br />
                  ・JWTトークンを利用してアプリがユーザーの認証情報を確認
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
                    ③ビジネスパフォーマンススクリーンの実装
                  </span>
                  <br />
                  <br />
                  ・売上高や評判、スタイリスト別の売上高など、サロンのビジネス情報をデータベースに追加
                  <br />
                  ・リアルタイムのデータをデータベースから取得し、フロントエンドに表示
                  <br />
                  ・日別、週別、月別、年別の売上高を取得するためのMySQLクエリを追加
                  <br />
                  ・日別、週別、月別、年別のフィルターをUI上で提供し、売上高やスタイリストのランキングを表示
                  <br />
                  ・React
                  Nativeライブラリを使用して、ビジネスパフォーマンスのデータをグラフや図で視覚化
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div></div>
              <div>
                <p>
                  <span className="text-bold">④検索機能の実装</span>
                  <br />
                  <br />
                  ・消費者向けアプリではサロン名やサービス名、スタイリスト名の検索を追加
                  <br />
                  ・サロン向けアプリでは顧客名やサービス名、スタイリスト名の検索を追加
                  <br />
                  ・バックエンドでSearchクエリを作成し、検索を可能にする
                  <br />
                  ・検索されたフィルターに基づいてデータベースから情報を取得し、UIに表示
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div></div>
              <div>
                <p>
                  <span className="text-bold">⑤コンポーネントの作成</span>
                  <br />
                  <br />
                  ・フォントコンポーネント：ヘディングやボディに適したフォントを提供
                  <br />
                  ・カードコンポーネント：予約した顧客情報を表示するためのカード
                  <br />
                  ・タブコンポーネント：日別、週別、月別、年別のフィルターを提供
                  <br />
                  ・モーダルコンポーネント：予約完了時などに表示されるモーダル
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
