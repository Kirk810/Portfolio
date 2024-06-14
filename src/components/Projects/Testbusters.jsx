import useFullscreen from "../../hooks/FullScreen";

const Testbusters = () => {
  const setFullscreen = useFullscreen();

  const handleVideoClick = (event) => {
    setFullscreen(event.target);
  };
  return (
    <div className="testbusters">
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
      <div className="video">
        <video
          muted
          autoPlay
          loop
          src="https://res.cloudinary.com/dvdoak5et/video/upload/v1717758777/Portfolio/Videotb_ahmd1g.webm"
          type="video/mp4"
          onClick={handleVideoClick}
        ></video>
        <div className="techno">
          <h3>Technologies</h3>
          <div className="techno-test">
            <div>
              <h4>Front</h4>
              <ul>
                <li>ReactJS</li>
                <li>Vite</li>
                <li>Eslint prettier</li>
                <li>Styled components</li>
              </ul>
            </div>
            <div>
              <h4>Back</h4>
              <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Dotenv</li>
                <li>Cors</li>
                <li>Multer</li>
                <li>Bcrypt</li>
                <li>JSON web token</li>
                <li>Nodemailer</li>
                <li>Cloudinary</li>
                <li>Pupeeter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="github">
        <li>
          <a
            className="front"
            target="_blank"
            href="https://github.com/Guadixx/TestBusters_Front/tree/main/TestBusters"
          >
            <span>Github front</span>
          </a>
        </li>
        <li>
          <a
            className="back"
            target="_blank"
            href="https://github.com/Guadixx/TestBusters_BACK"
          >
            <span>Github back</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Testbusters;
