import React, {useState} from 'react';

function WebDev(){
    const [openDetails, setOpenDetails]=useState("None");
    const handleOpenDetails = (e) =>{
        if (openDetails===e.target.id){
            setOpenDetails("None");
        } else{
            setOpenDetails(e.target.id);
        }
    }
    return(
        <section className="sectionContainer">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Développement</h3>
            </article>
            <article className="course">
                <h4 className="courseTitle"><span className="courseDot"/>Développeur web, <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web">Wild code school</a>, campus remote, 2020-2021 (en cours)</h4>
                <div className="detailsContainer">
                    <div className="courseDetails">
                        <button type="button" onClick={handleOpenDetails} id="integration">Intégration</button>
                        <ul className="courseList">
                            <li className={openDetails==="integration"?"displayed" : ""}>HTML</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>CSS</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>Bootstrap</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>Bases en UI et UX</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>Responsive design</li>
                        </ul>
                    </div>
                    <button type="button">Algorithmie</button>
                    <button type="button">JavaScript</button>
                    <button type="button">Scrum</button>
                    <button type="button">React</button>
                    <button type="button">SQL</button>
                    <button type="button">Node.js</button>
                </div>
            </article>
        </section>
    )
};

export default WebDev;