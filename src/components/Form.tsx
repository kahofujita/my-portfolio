import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import styles from "../app/contact.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <InputComponent label="Name / Company Name" type="text" />
      <InputComponent label="Email" type="text" />
      <div className={styles.textarea}>
        <label>Message</label>
        <textarea name="message" id="message" />
      </div>
      <div>
        <ButtonComponent
          title="Send"
          onClick={() => {
            console.log("message sent!");
          }}
        />
      </div>
    </form>
  );
};

export default Form;
