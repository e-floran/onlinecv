
function WebDev(){

    return(
        <section className="sectionContainer">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Développement</h3>
            </article>
            <article className="course inProgress">
                <h5 className="courseTitle"><span className="courseDot"/>Développeur web, <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=remote-francais">Wild code school</a>, campus remote, en cours<span><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.5s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.75s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 1s infinite`}}/></span></h5>
            </article>
        </section>
    )
};

export default WebDev;