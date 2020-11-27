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
            name:"CSS",
            level:7,
        },
        {
            name:"SQL",
            level:2,
        }
    ]
    return(
        <section className="langages">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Langages</h3>
            </article>
            <Skill name={myLangages[0].name}/>
        </section>
    )
};

export default Langages;