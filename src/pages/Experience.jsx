import Projects from "../components/Experience/Projects";
import Work from "../components/Experience/Work";
import Contact from "../components/Contact";
import "../style/experience.css";
function Experience(){
    return(
        <div className="pageContainer">
            <p className="pageIntro">En attendant ma première expérience professionnelle en tant que développeur web, j'ai réalisé plusieurs projets, dans le cadre de ma formation ou en parallèle.</p>
            <Projects />
            <Work />
            <Contact />
        </div>
    )
};

export default Experience;