function Uballers(){
    return(
        <article className="project">
            <h5 className="projectTitle">Uballers <span><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.5s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.75s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 1s infinite`}}/></span></h5>
            <h6 className="projectDate">télétravail, depuis mars 2021</h6>
            <p>Pour lancer ma carrière de développeur web, j'ai la chance de pouvoir participer à ce projet ambitieux : <a href="https://uballers.com/" title="Site de Uballers">Uballers</a></p>
            <p>Étant passionné de basket, l'univers de l'entreprise est évidemment un vrai plus pour moi.</p>
            <div className="technoContainer">
                <p className="techno">React</p>
                <p className="techno">React Native</p>
            </div>
        </article>
    )
};

export default Uballers;