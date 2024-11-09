function Polyconseil() {
  return (
    <article className="project">
      <h5 className="projectTitle">
        Polyconseil{" "}
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
      <h6 className="projectDate">télétravail (Paris), depuis 2022</h6>
      <p>
        Cette expérience en ESN parisienne me permet de travailler de manière
        agile dans des équipes de grandes tailles avec des développeuses,
        développeurs et product managers :{" "}
        <a href="https://www.polyconseil.fr/" title="Site de Polyconseil">
          Polyconseil
        </a>
      </p>
      <p>
        Être entourés de collaboratrices et de collaborateurs de profils et de
        niveaux d'expérience variés permet à chacun d'apporter quelque chose aux
        autres et ainsi d'apprendre chaque jour.
      </p>
      <div className="technoContainer">
        <p className="techno">React</p>
        <p className="techno">TypeScript</p>
        <p className="techno">Node.js</p>
        <p className="techno">GraphQL</p>
        <p className="techno">TypeORM</p>
        <p className="techno">PostgreSQL</p>
      </div>
    </article>
  );
}

export default Polyconseil;
