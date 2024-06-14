import FFproject from "../../components/Projects/FFproject";
import Testbusters from "../../components/Projects/Testbusters";

const Project = () => {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="projects">
        <ul>
          <FFproject />
        </ul>
        <ul>
          <Testbusters />
        </ul>
      </div>
    </section>
  );
};

export default Project;
