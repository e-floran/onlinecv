import WildDisaster from "./WildDisaster";
import Portfolio from "./Portfolio";
import OFF from "./OFF";
import UberArts from "./UberArts";
import Papilles from "./Papilles";

function Projects(){
    return(
        <section className="sectionContainer">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Projets</h3>
            </article>
            <div className="projectsContainer">
                <OFF />
                <Portfolio />
                <WildDisaster />
                <UberArts />
                <Papilles />
            </div>
        </section>
    )
};

export default Projects;