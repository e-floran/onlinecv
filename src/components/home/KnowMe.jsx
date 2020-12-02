import UseWindowSize from "../UseWindowSize";

function KnowMe(){
    
    const width=UseWindowSize();
      
    return(
        <section className="sectionContainer knowMe">
            <article className="sectionTitle knowTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Mieux me connaître</h3>
            </article>
            <article className="knowDetails">
                <p>J'aime écrire ! Que ce soit du code ou dans un langage pensé pour être lu par un humain. Mais il y a plein d'autres domaines qui me passionnent.</p>
                <p>Ancien journaliste sportif, je suis un mordu de sport(s). Si tous m'intéressent, celui que je suis avec le plus d'assiduité est le basket. Je l'ai d'ailleurs pratiqué, à petit niveau, en universitaire ou en tournois corpo pour représenter mon ancien employeur.</p>
                <p>J'apprécie également me détendre avec des jeux de société ou des jeux vidéo, surtout à plusieurs pour un moment de convivialité.</p>
                <p>Enfin, mon loisir principal au quotidien reste la cuisine, que ce soit pour ma compagne, ma fille ou mes amis. J'aime y mélanger les saveurs d'horizons différents.</p>
            </article>
            <img className="profilePic" src={width>800
                ?"/files/floran_eiclies.png"
                :"/files/floran_eiclies_mobile.png"
            } alt="Floran Eiclies"></img>
        </section>
    )
}
export default KnowMe;