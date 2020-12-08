function OFF(){
    return(
        <article className="project">
            <h5 className="projectTitle">Projet Open food facts <span><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.5s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.75s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 1s infinite`}}/></span></h5>
            <h6 className="projectDate">depuis décembre 2020</h6>
            <p>Pour ce dernier projet au long cours, nous avons la possibilité de traiter avec un vrai client : Open food facts. L'objectif principal est de rendre une application existante plus ludique. J'ai choisi ce projet car il me permet de travailler en Vue.js et ainsi d'ajouter un deuxième framework majeur à mon apprentissage. C'est également mon premier projet avec un back-end.</p>
            <div className="technoContainer">
                <p className="techno">Vue.js</p>
                <p className="techno">Node.js</p>
            </div>
        </article>
    )
};

export default OFF;