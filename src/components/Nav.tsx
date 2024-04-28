import styles from "../app/page.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <a href="#about" className="hoverTextAccent">
            About
          </a>
        </li>
        <li>
          <a href="#design" className="hoverTextAccent">
            Design
          </a>
        </li>
        <li>
          <a href="#development" className="hoverTextAccent">
            Development
          </a>
        </li>
        <li>
          <a href="#skills" className="hoverTextAccent">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hoverTextAccent">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
