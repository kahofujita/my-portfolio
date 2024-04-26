import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import styles from "../app/contact.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <InputComponent label="氏名/会社名" type="text" />
      <InputComponent label="Email" type="text" />
      <div className={styles.textarea}>
        <label>メッセージ</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <div>
        <ButtonComponent
          title="Send"
          onClick={() => {
            console.log("sent!");
          }}
        />
      </div>
    </form>
  );
};

export default Form;
