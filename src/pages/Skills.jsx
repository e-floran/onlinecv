import Langages from "../components/skills/Langages";
import Frameworks from "../components/skills/Frameworks";
import Tools from "../components/skills/Tools";
import "../style/skills.css";
function Skills(){
    return(
        <div className="skillsContainer">
            <Langages />
            <Frameworks />
            <Tools />
        </div>
    )
};

export default Skills;