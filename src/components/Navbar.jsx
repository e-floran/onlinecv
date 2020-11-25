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
            <ul className="headerMenu">
                <button type="button" onClick={handleOpen}>Menu</button>
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
    )
}

export default Navbar;