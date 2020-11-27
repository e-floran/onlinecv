import Langages from "../components/skills/Langages";
import Frameworks from "../components/skills/Frameworks";
import Tools from "../components/skills/Tools";
import SoftSkills from "../components/skills/SoftSkills";
import OtherSkills from "../components/skills/OtherSkills";
import Contact from "../components/Contact";
import "../style/skills.css";
function Skills(){
    return(
        <div className="skillsContainer">
            <Langages />
            <Frameworks />
            <SoftSkills />
            <Tools />
            <OtherSkills />
            <Contact />
        </div>
    )
};

export default Skills;