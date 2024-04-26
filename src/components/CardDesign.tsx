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
      <img src={source} alt={title} />
      <div className="hoverBg">
        <h1>{title}</h1>
        <br />
        {date}
      </div>
    </div>
  );
};

export default CardDesign;
