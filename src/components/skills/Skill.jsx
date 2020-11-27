function Skill(props){
    const {name}=props;
    const {level}=props;
    const levels=[];
    for (let i=0;i<level;i++) {
        levels.push(<div key={i} className="skillPoint"/>);
    };
    if (levels.length<12){
        for (let i=levels.length;i<12;i++){
            levels.push(<div key={i} className="noPoint"/>);
        }
    }
    return(
        <article className="skillContainer">
            <p>{name}</p>
            <div className="pointsContainer">{levels}</div>
        </article>
    )
};

export default Skill;