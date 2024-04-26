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
            お茶屋さんのウェブサイトデザイン
          </h1>
          <h1 className={styles.projectDatePlace}>2024.04制作</h1>
        </div>
        <div className={styles.projectOverview}>
          【インスピレーション】
          <br />
          <br />
          あるお茶屋さんを訪れた際、他の地域から集められた多様な茶葉の香りや味、落ち着いた雰囲気の店内空間、そして茶器へのこだわりに触れ、それぞれに感銘を受けました。
          <br />
          このインスピレーションを形に残すため、架空のお茶屋さん「恋茶」のウェブデザインを制作しました。
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
                    ①お茶をイメージさせる色は深緑色
                  </span>
                  <br />
                  <br />
                  日本茶の代表的な産地の一つである京都府宇治市では、店舗のブランディングカラーや街中の看板、学校の制服、電車の吊り革まで、緑色が茶のイメージを表現しています。この雰囲気に触発され、恋茶のウェブサイトも深緑色を使用し、高級感と落ち着きのある雰囲気を演出しています。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">②３色の調和したブレンド</span>
                  <br />
                  <br />
                  深緑色（#3D3A1B）で大人の雰囲気を演出しつつ、肌色（#EAE2D7）でしなやかさと深緑色とのコントラストを加え、黄色（#E8D939）でアクセントをつけることで、単調さを避け、人目を引く魅力的なカラーコンビネーションを実現しています。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    ③雰囲気を決定するための写真選定
                  </span>
                  <br />
                  <br />
                  Unsplashなどのフリー画像サイトから写真を選ぶ際には、前述の３色に合致し、ウェブサイトのコンセプトに合うかどうかを確認することが重要です。写真の選定はウェブデザインの質に大きく影響するため、ウェブサイトのイメージに合った写真を選ぶ必要があります。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    ④シンプルな線や丸を用いたイラストレーション
                  </span>
                  <br />
                  <br />
                  小さなイラストを追加することで、ウェブサイトの余白を活用し、魅力的なデザインに導きます。恋茶のウェブサイトは侘び寂びやシンプルさを重視しているため、線や丸のシンプルなイラストを取り入れています。
                  <br />
                  <br />
                  <br />
                  <span className="text-bold">
                    ⑤恋茶のブランドのイメージに合うフォント
                  </span>
                  <br />
                  <br />
                  和文には「クレーOne」、欧文には「Garamond」を使用しています。クレーOneはしっとりとした柔らかい印象を与えながら、明瞭で読みやすく、ユーザーにも親しみやすいフォントです。一方、Garamondは多くの高級ブランドで使用されるような、少し高級感のあるフォントです。これらのフォントは、恋茶のウェブサイトに高級感を演出し、侘びやびと柔らかさを融合させたイメージを作り出しています。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h1>
              <span className="accent-color">Design</span> Tools /
              Inspirations（使用したツール）
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
