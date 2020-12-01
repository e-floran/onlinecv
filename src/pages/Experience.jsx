import Projects from "../components/Experience/Projects";
import "../style/experience.css";
function Experience(){
    return(
        <div className="pageContainer">
            <p className="pageIntro">En attendant ma première expérience professionnelle en tant que développeur web, j'ai réalisé plusieurs projets, dans le cadre de ma formation ou en parrallèle.</p>
            <Projects />
        </div>
    )
};

export default Experience;