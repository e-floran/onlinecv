import Skill from "./Skill";

function Langages(){
    const myLangages=[
        {
            name:"Français",
            level:12,
        },
        {
            name:"Anglais",
            level:9,
        },
        {
            name:"JavaScript",
            level:6,
        },
        {
            name:"TypeScript",
            level:3,
        },
        {
            name:"CSS",
            level:7,
        },
        {
            name:"SQL",
            level:5,
        },
        {
            name:"Python",
            level:2,
        }
    ]
    const langages=[];
    for (let i=0;i<myLangages.length;i++) {
        langages.push(<Skill key={myLangages[i].name} name={myLangages[i].name} level={myLangages[i].level}/>);
    };
    return(
        <section className="skillset">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Langages</h3>
            </article>
            {langages}
        </section>
    )
};

export default Langages;