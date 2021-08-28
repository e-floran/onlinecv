function MDDynamics() {
  return (
    <article className="project">
      <h5 className="projectTitle">
        MD Dynamics{" "}
        <span>
          <span
            className="miniPulsar"
            style={{ animation: `pulsed 2s linear 0.5s infinite` }}
          />
          <span
            className="miniPulsar"
            style={{ animation: `pulsed 2s linear 0.75s infinite` }}
          />
          <span
            className="miniPulsar"
            style={{ animation: `pulsed 2s linear 1s infinite` }}
          />
        </span>
      </h5>
      <h6 className="projectDate">télétravail, depuis juin 2021</h6>
      <p>
        Ma première expérience en tant que développeur fullstack me plonge dans
        l'univers du développement et de l'exploitation des applications métiers
        distribuées, au service des entreprises :{" "}
        <a href="https://www.mddynamics.fr/" title="Site de MD DYnamics">
          MD Dynamics
        </a>
      </p>
      <p>
        Entrer dans un secteur d'avenir comme celui-ci est toujours enrichissant
        intellectuellement et l'exigence du BtoB colle parfaitement avec mon
        attachement au travail bien fait, jusque dans les moindres détails.
      </p>
      <div className="technoContainer">
        <p className="techno">React</p>
      </div>
    </article>
  );
}

export default MDDynamics;
