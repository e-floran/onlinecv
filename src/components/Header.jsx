import Navbar from "./Navbar";
import "../style/header.css";

function Header(){
    return(
        <header>
            <h1>Floran Eiclies</h1>
            <h3>Développeur web</h3>
            <Navbar />
        </header>
    )
}

export default Header;