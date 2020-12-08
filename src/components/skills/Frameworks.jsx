import Skill from "./Skill";

function Frameworks(){
    const myFrameworks=[
        {
            name:"React",
            level:7,
        },
        {
            name:"Vue",
            level:2,
        },
        {
            name:"Express",
            level:2,
        },
        {
            name:"Bootstrap",
            level:4,
        },
    ]
    const frameworks=[];
    for (let i=0;i<myFrameworks.length;i++) {
        frameworks.push(<Skill key={myFrameworks[i].name} name={myFrameworks[i].name} level={myFrameworks[i].level}/>);
    };
    return(
        <section className="skillset">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Frameworks et librairies</h3>
            </article>
            {frameworks}
        </section>
    )
};

export default Frameworks;