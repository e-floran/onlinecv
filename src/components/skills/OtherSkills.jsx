import Skill from "./Skill";

function OtherSkills(){
    const myOtherSkills=[
        {
            name:"Capacités rédactionnelles",
            level:11,
        },
        {
            name:"Animation de communauté",
            level:7,
        },
        {
            name:"Réseaux sociaux",
            level:8,
        },
    ]
    const otherSkills=[];
    for (let i=0;i<myOtherSkills.length;i++) {
        otherSkills.push(<Skill key={myOtherSkills[i].name} name={myOtherSkills[i].name} level={myOtherSkills[i].level}/>);
    };
    return(
        <section className="skillset">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Autres</h3>
            </article>
            {otherSkills}
        </section>
    )
};

export default OtherSkills;