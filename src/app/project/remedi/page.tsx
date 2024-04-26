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
          <h1 className={styles.projectTitle}>Remediアプリ</h1>
          <h1 className={styles.projectDatePlace}>2024.02〜現在 | チリ</h1>
        </div>
        <div className={styles.projectOverview}>
          薬剤系サービスWebアプリケーション
          <br />
          <br />
          【プロジェクト概要】
          <br />
          ・Remedi、薬局、患者の3タイプのユーザーを対象とした3サイドのWebアプリケーション
          <br />
          ・薬局や薬を必要とする患者がプラットフォーム上で薬の注文をできるサービス
          <br />
          ・Remedi管理画面から薬局の売上や各薬の販売数などを記録および管理
          <br />
          ・WhatsAppとの統合により、プラットフォーム外から受付可能
          <br />
          <br />
          【URL】
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
                    ①ユーザーアカウント設定画面の開発内容
                  </span>
                  <br />
                  <br />
                  ・/ajustes（設定ルート）を追加
                  <br />
                  ・ユーザーが登録時に設定したプロフィール情報を編集できる機能を実装
                  <br />
                  ・DBからアカウント設定情報を取得し、設定画面の入力欄に自動で表示する機能を追加
                  <br />
                  ・入力欄（Inputコンポーネント）に必須項目のプロパティを追加
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
                    ②患者から送信された処方箋の注文リクエストに対する薬局側の返信ページの開発内容
                  </span>
                  <br />
                  <br />
                  ・/responder-presquesto（注文リクエストへの返信ルート）を追加
                  <br />
                  ・ルートから注文リクエストのIDを読み取る
                  <br />
                  ・注文内容を表示
                  <br />
                  ・薬局側からの返信用フォームを表示し、入力機能を実装
                  <br />
                  ・注文リクエストに対する返信をデータベースに更新
                  <br />
                  ・患者側で返信内容を確認できるようにする
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
                    ③薬局のビジネスバリデーション機能の実装内容
                  </span>
                  <br />
                  <br />
                  ・全てのユーザーのデータベース及びセッションに、activeステータスのプロパティを追加
                  <br />
                  ・Remediおよび患者は、アカウント設定を完了すると、active
                  ステータスがtrueになり、アプリの利用が可能
                  <br />
                  ・薬局はアカウント設定が完了すると、Remediがプロフィール情報を確認し、バリデーションが成功したら、アカウントのアクティベートリンクを薬局にメールで送信
                  <br />
                  ・薬局側が受け取ったアクティベートリンクをクリックしてアカウントをアクティベートすると、active
                  ステータスがtrueになり、アプリの使用が開始できる
                  <br />
                  ・データベースにActiveTokenのテーブルを追加
                  <br />
                  ・ActiveTokenは一度使用されると無効になり、期限が1週間で失効する
                </p>
              </div>
            </div>
            <div className={styles.projectDetailsBodySection}>
              <div></div>
              <div>
                <p>
                  <span className="text-bold">
                    ④WhatsApp
                    API統合により、患者がWhatsAppを通じて処方箋の注文リクエストを送信できるようにする機能の開発
                  </span>
                  <br />
                  <br />
                  ・Meta CloudからWhatsAppビジネスアカウントの設定
                  <br />
                  ・Meta CloudでWhatsApp Flow APIの取得
                  <br />
                  ・WhatsApp Flow
                  APIを使用したインタラクティブメッセージ機能の追加
                  <br />
                  ・患者の注文リクエストをデータベースに追加し、薬局側へ送信
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
