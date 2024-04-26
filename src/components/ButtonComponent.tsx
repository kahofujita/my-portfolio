import styles from "../app/page.module.css";

interface ButtonComponentInterface {
  title: string;
  onClick?: (event: any) => void;
}

const ButtonComponent = ({ title, onClick }: ButtonComponentInterface) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
};

export default ButtonComponent;
