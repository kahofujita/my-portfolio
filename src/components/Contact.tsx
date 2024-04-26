import styles from "../app/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetailsWrapper}>
            <h1>Contact</h1>
            <div className={styles.emailPhoneWrapper}>
              <a href="mailto:kahofujita1@gmail.com" target="_blank" className="hover-accent">kahofujita1@gmail.com</a>
              <a href="tel:+19068297764" className="hover-accent">090-6829-7764</a>
            </div>
            <div>お問い合わせはこちらから。</div>
        </div>
      </div>
      <div className={styles.contactForm}>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
