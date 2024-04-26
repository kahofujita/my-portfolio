import styles from '../app/page.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <a href="#about" className="hoverTextAccent">ABOUT</a>
        </li>
        <li>
          <a href="#design" className="hoverTextAccent">DESIGN</a>
        </li>
        <li>
          <a href="#development" className="hoverTextAccent">DEVELOPMENT</a>
        </li>
        <li>
          <a href="#skills" className="hoverTextAccent">SKILLS</a>
        </li>
        <li>
          <a href="#contact" className="hoverTextAccent">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
