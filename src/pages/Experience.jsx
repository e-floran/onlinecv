import Projects from "../components/Experience/Projects";
import Work from "../components/Experience/Work";
import Contact from "../components/Contact";
import "../style/experience.css";
function Experience() {
  return (
    <div className="pageContainer expPage">
      <p className="pageIntro">
        Je compte plusieurs expériences professionnelles réussies, que ce soit
        en tant que développeur ou, avant ça, en tant que journaliste.
      </p>
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default Experience;
