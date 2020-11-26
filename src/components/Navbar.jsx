import React, {useState} from 'react';

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
                }>Accueil</li>
                <li className={
                    open?"displayed" : ""
                }>Compétences</li>
                <li className={
                    open?"displayed" : ""
                }>Formations</li>
                <li className={
                    open?"displayed" : ""
                }>Expériences</li>
            </ul>
        </nav>
    )
}

export default Navbar;