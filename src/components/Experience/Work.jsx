import Uballers from "./Uballers";
import DordogneLibre from "./DordogneLibre";
import RepPyrenees from "./RepubliquePyrenees";
import Dauphine from "./Dauphine";
import Strategies from "./Strategies";

function Work(){
    return(
        <section className="sectionContainer">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Expériences professionnelles</h3>
            </article>
            <div className="projectsContainer">
                <Uballers />
                <DordogneLibre />
                <RepPyrenees />
                <Dauphine />
                <Strategies />
            </div>
        </section>
    )
};

export default Work;