import useFullscreen from "../../hooks/FullScreen";

const FFproject = () => {
  const setFullscreen = useFullscreen();

  const handleVideoClick = (event) => {
    setFullscreen(event.target);
  };
  return (
    <div className="project">
      <h3>Final Fantasy VII project</h3>
      <p>
        A web application where users can log in using their username, email,
        and password. Once inside the application, users can search all the
        games enemies by name, level, attack, defense, and other criteria, and
        perform the complete CRUD (Create, Read, Update, Delete) process. The
        application is connected to an API that can be modified through the CRUD
        operations.
      </p>
      <div className="video">
        <video
          muted
          autoPlay
          loop
          src="https://res.cloudinary.com/dvdoak5et/video/upload/v1717758765/Portfolio/Final_Fantasy_VII_Project_pnu2ml.mp4"
          type="video/mp4"
          onClick={handleVideoClick}
        ></video>
        <div className="techno">
          <h3>Technologies</h3>
          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>Vite</li>
            <li>Eslint prettier</li>
            <li>Styled components</li>
            <li>Hooks: useContext, useEffect, useState</li>
          </ul>
        </div>
      </div>
      <ul className="github">
        <li>
          <a
            className="linkFF7"
            target="_blank"
            href="https://github.com/Meryroo/FF7-PROJECT/tree/develop"
          >
            <span>Github</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FFproject;
