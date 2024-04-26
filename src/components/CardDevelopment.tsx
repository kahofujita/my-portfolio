/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";

interface CardDevelopmentInterface {
  source: string;
  alt: string;
  id: string;
  title: string;
  date: string;
}

const CardDevelopment = ({
  source,
  alt,
  id,
  title,
  date,
}: CardDevelopmentInterface) => {
  const router = useRouter();

  return (
    <div
      className={styles.cardDevelopment}
      onClick={() => {
        router.push(`/project/${id}`);
      }}
    >
      <div className={styles.cardDevelopmentImage}>
        <img src={source} alt={alt} />
      </div>
      <div className={styles.cardDevelopmentText}>
        <h2 className={styles.cardDevelopmentTitle}>{title}</h2>
        <div className={styles.cardDevelopmentDate}>{date}</div>
      </div>
    </div>
  );
};

export default CardDevelopment;
