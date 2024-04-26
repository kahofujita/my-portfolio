import Nav from "./Nav";
import styles from "../app/page.module.css";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="logo">
        <a href="/">KAHO FUJITA</a>
      </div>
      <HamburgerMenu />
      <Nav />
    </div>
  );
};

export default Header;
