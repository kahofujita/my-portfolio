import styles from "../app/contact.module.css";

interface InputComponentInterface {
  label: string;
  type: "text" | "number";
}

const InputComponent = ({ label, type }: InputComponentInterface) => {
  return (
    <div className={styles.input}>
      <label htmlFor="">{label}</label>
      <input type={type} />
    </div>
  );
};

export default InputComponent;
