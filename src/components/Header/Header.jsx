import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="Header-name">
          <h3>Adrian Soto Maeso</h3>
        </div>
        <nav className="Header-clic">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
