import Description from "../components/home/Description";
import KnowMe from "../components/home/KnowMe";
import Contact from "../components/Contact";
import '../style/home.css';
function Home(){
    return(
        <div className="homeContainer">
            <Description />
            <KnowMe />
            <Contact />
        </div>
    )
}

export default Home;