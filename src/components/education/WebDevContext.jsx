import React, {useState} from 'react';
// import {EducationProvider} from "../../contexts/educationContext"

function WebDev(){
    const [openDetails, setOpenDetails]=useState("None");
    // const handleOpenDetails = (e) =>{
    //     if (openDetails===e.target.id){
    //         setOpenDetails("None");
    //     } else{
    //         setOpenDetails(e.target.id);
    //     }
    // }
    return(
        <section className="sectionContainer">
            <article className="sectionTitle">
                <div className="pulsarContainer">
                    <div className="pulsar"></div>
                </div>
                <h3>Développement</h3>
            </article>
            <article className="course">
                <h5 className="courseTitle"><span className="courseDot"/>Développeur web, <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web">Wild code school</a>, campus remote, 2020-2021 (en cours)</h5>
                <div className="detailsContainer">
                    {/* <div className="courseDetails">
                        <button type="button" onClick={handleOpenDetails} id="integration">Intégration</button>
                        <ul className="courseList">
                            <li className={openDetails==="integration"?"displayed" : ""}>HTML</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>CSS</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>Bootstrap</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>Bases en UI et UX</li>
                            <li className={openDetails==="integration"?"displayed" : ""}>Responsive design</li>
                        </ul>
                    </div> */}
                    <p className="soloDetail">Intégration</p>
                    <p className="soloDetail">Algorithmie</p>
                    {/* <div className="courseDetails">
                        <button type="button" onClick={handleOpenDetails} id="javaScript">JavaScript</button>
                        <ul className="courseList">
                            <li className={openDetails==="javaScript"?"displayed" : ""}>Fonctionnement</li>
                            <li className={openDetails==="javaScript"?"displayed" : ""}>Lint</li>
                            <li className={openDetails==="javaScript"?"displayed" : ""}>Ajax</li>
                            <li className={openDetails==="javaScript"?"displayed" : ""}>TDD</li>
                        </ul>
                    </div> */}
                    <p className="soloDetail">JavaScript</p>
                    <p className="soloDetail">Scrum</p>
                    {/* <div className="courseDetails">
                        <button type="button" onClick={handleOpenDetails} id="react">React</button>
                        <ul className="courseList">
                            <li className={openDetails==="react"?"displayed" : ""}>Types de composants</li>
                            <li className={openDetails==="react"?"displayed" : ""}>Utilisation d'API</li>
                            <li className={openDetails==="react"?"displayed" : ""}>Hooks</li>
                            <li className={openDetails==="react"?"displayed" : ""}>Proptypes</li>
                            <li className={openDetails==="react"?"displayed" : ""}>Redux</li>
                            <li className={openDetails==="react"?"displayed" : ""}>Context</li>
                        </ul>
                    </div> */}
                    <p className="soloDetail">React</p>
                    <p className="soloDetail">SQL</p>
                    <p className="soloDetail">Node.js</p>
                </div>
            </article>
        </section>
    )
};

export default WebDev;