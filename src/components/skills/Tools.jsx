import Skill from "./Skill";

function Tools(){
    const myTools=[
        {
            name:"Git",
            level:5,
        },
        {
            name:"GitHub",
            level:6,
        },
        {
            name:"VS code",
            level:8,
        },
        {
            name:"MySQL",
            level:5,
        },
        {
            name:"PostgreSQL",
            level:3,
        },
        {
            name:"Bureautique",
            level:10,
        },
        {
            name:"Échanges",
            level:10,
        },
        {
            name:"CMS, montage",
            level:12,
        },
        {
            name:"Graphisme",
            level:7,
        },
    ]
    const tools=[];
    for (let i=0;i<myTools.length;i++) {
        tools.push(<Skill key={myTools[i].name} name={myTools[i].name} level={myTools[i].level}/>);
    };
    return(
        <section className="skillset">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Outils</h3>
            </article>
            {tools}
        </section>
    )
};

export default Tools;