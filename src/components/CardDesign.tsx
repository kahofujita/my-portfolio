/* eslint-disable @next/next/no-img-element */
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";

interface CardDesignInterface {
  source: string;
  alt: string;
  id: string;
  title: string;
  date: string;
}

const CardDesign = ({ source, alt, id, title, date }: CardDesignInterface) => {
  const router = useRouter();

  return (
    <div
      className={styles.cardDesign}
      onClick={() => {
        router.push(`/project/${id}`);
      }}
    >
      <div className={styles.cardDesignImage}>
        <img src={source} alt={title} />
      </div>
      <div className={styles.cardDesignHoverEffect}>
        <h1>{title}</h1>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default CardDesign;
