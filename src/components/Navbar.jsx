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
        <nav>
            <ul>
                <button type="button" onClick={handleOpen}>Menu</button>
                <li className={
                    open?"displayed" : ""
                }>Home</li>
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