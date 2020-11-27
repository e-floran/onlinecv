function Skill(props){
    const {name}=props;
    const {level}=props;
    return(
        <article className="skillContainer">
            <p>{name}</p>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
            <div className="skillPoint"/>
        </article>
    )
};

export default Skill;