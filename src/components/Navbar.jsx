import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        if (open){
            setOpen(false);
        } else{
            setOpen(true);
        };
    }
    return(
        <nav className="headerMenu">
            <button className="headerButton" type="button" onClick={handleOpen}>Menu</button>
            <ul className="headerList">
                <li className={
                    open?"displayed" : ""
                }><Link to={`/`}>Accueil</Link></li>
                <li className={
                    open?"displayed" : ""
                }><Link to={`/skills`}>Compétences</Link></li>
                <li className={
                    open?"displayed" : ""
                }><Link to={`/skills`}>Formations</Link></li>
                <li className={
                    open?"displayed" : ""
                }><Link to={`/skills`}>Expériences</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;