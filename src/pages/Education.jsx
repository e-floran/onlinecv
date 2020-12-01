import WebDev from "../components/education/WebDev";
import Journalism from "../components/education/Journalism";
import "../style/education.css";
function Education(){
    return(
        <div className="pageContainer">
            <p className="pageIntro">Après une formation universitaire initiale en économie, puis en journalisme, j'apprends aujourd'hui un nouveau domaine de compétences à l'aide d'une formation en développement web.</p>
            <WebDev />
            <Journalism />
        </div>
    )
};

export default Education;