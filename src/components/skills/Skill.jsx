function Skill(props) {
  const { name } = props;
  const { level } = props;
  const levels = [];
  for (let i = 0; i < level; i++) {
    let j = i / 3;
    levels.push(
      <div
        key={i}
        className="skillPoint"
        style={{ animation: `coloring 300s linear ${j}s infinite` }}
      />
    );
  }
  if (levels.length < 12) {
    for (let i = levels.length; i < 12; i++) {
      levels.push(<div key={i} className="noPoint" />);
    }
  }
  return (
    <article className="skillContainer">
      <p>{name}</p>
      {/* <div className="pointsContainer">{levels}</div> */}
    </article>
  );
}

export default Skill;
