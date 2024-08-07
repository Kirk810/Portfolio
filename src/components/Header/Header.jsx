import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="avatar">
        <img
          src="https://res.cloudinary.com/dvdoak5et/image/upload/v1720721235/Portfolio/IMG20230704094406_fbvmx0.jpg"
          alt="Me"
        />
      </div>
      <div className="header-name">
        <h3>Adrián Soto Maeso</h3>
      </div>
      <nav className="header-clic">
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
      <div className="link">
        <a target="_blank" href="https://www.linkedin.com/in/adriansotomaeso/">
          <img
            src="https://res.cloudinary.com/dvdoak5et/image/upload/v1718648641/Portfolio/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0ibWVyY2Fkby1tYXRjaCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0_bh4zia.svg"
            alt="Linkedin"
          />
        </a>
        <a target="_blank" href="https://github.com/Kirk810?tab=repositories">
          <img
            src="https://res.cloudinary.com/dvdoak5et/image/upload/v1718648651/Portfolio/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBkYXRhLXZpZXctY29tcG9uZW50PSJ0cnVlIiBjbGFzcz0i_llrekl.svg"
            alt="Github"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
