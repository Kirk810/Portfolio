import useFullscreen from "../../hooks/FullScreen";

const Testbusters = () => {
  const setFullscreen = useFullscreen();

  const handleVideoClick = (event) => {
    setFullscreen(event.target);
  };
  return (
    <div className="project">
      <h3>Testbusters</h3>
      <p>
        We present to you our final project for fullstack web development. It is
        a web application designed to create and take any type of test. As long
        as you have an account on the application, you can create tests, rate
        them, see who created them, add comments, react to them, follow other
        users, and view their creations and ratings. There is even a ranking
        where you can see your score and compete to see who achieves the best
        results.
      </p>
      <div className="techno">
        <h3>Technologies:</h3>
        <div>
          <ul>
            <li>
              <b>FRONT: </b>ReactJS, JavaScript, Vite, Eslint Prettier, Styled
              Components
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <b>BACK: </b>NodeJS, Express, Moggose, Dotenv, Cors, Multer,
              Bcrypt, JSON web token, Nodemailer, Cloudinary, Pupeeter
            </li>
          </ul>
        </div>
      </div>
      <div className="video">
        <video
          muted
          autoPlay
          loop
          src="https://res.cloudinary.com/dvdoak5et/video/upload/v1717758777/Portfolio/Videotb_ahmd1g.webm"
          type="video/mp4"
          onClick={handleVideoClick}
        ></video>
      </div>
      <div className="github">
        <li>
          <a
            className="front"
            target="_blank"
            href="https://github.com/Guadixx/TestBusters_Front/tree/main/TestBusters"
          >
            <h3>Front repository</h3>
          </a>
        </li>
        <li>
          <a
            className="back"
            target="_blank"
            href="https://github.com/Guadixx/TestBusters_BACK"
          >
            <h3>Back repository</h3>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Testbusters;
