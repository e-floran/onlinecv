import Skill from "./Skill";

function Frameworks() {
  const myFrameworks = [
    {
      name: "React",
      level: 8,
    },
    {
      name: "React Native",
      level: 5,
    },
    {
      name: "Next.js",
      level: 5,
    },
    {
      name: "Vue.js",
      level: 5,
    },
    {
      name: "Node.js",
      level: 3,
    },
    {
      name: "Express",
      level: 5,
    },
    {
      name: "PostgreSQL",
      level: 5,
    },
    {
      name: "MySQL",
      level: 5,
    },
    {
      name: "GraphQL",
      level: 5,
    },
    {
      name: "TypeORM",
      level: 5,
    },
    {
      name: "Bootstrap",
      level: 4,
    },
  ];
  const frameworks = [];
  for (let i = 0; i < myFrameworks.length; i++) {
    frameworks.push(
      <Skill
        key={myFrameworks[i].name}
        name={myFrameworks[i].name}
        level={myFrameworks[i].level}
      />
    );
  }
  return (
    <section className="skillset">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar"></div>
        </div>
        <h3>Frameworks et librairies</h3>
      </article>
      {frameworks}
    </section>
  );
}

export default Frameworks;
