import Skill from "./Skill";

function SoftSkills(){
    const mySoftSkills=[
        {
            name:"Relationnel",
            level:11,
        },
        {
            name:"Travail en équipe",
            level:11,
        },
        {
            name:"Esprit d'équipe",
            level:12,
        },
        {
            name:"Autonomie",
            level:12,
        },
        {
            name:"Leadership",
            level:8,
        },
        {
            name:"Veille technologique",
            level:11,
        },
    ]
    const softSkills=[];
    for (let i=0;i<mySoftSkills.length;i++) {
        softSkills.push(<Skill key={mySoftSkills[i].name} name={mySoftSkills[i].name} level={mySoftSkills[i].level}/>);
    };
    return(
        <section className="skillset">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Soft skills</h3>
            </article>
            {softSkills}
        </section>
    )
};

export default SoftSkills;