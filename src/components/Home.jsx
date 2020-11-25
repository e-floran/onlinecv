import Description from "./Description";
import KnowMe from "./KnowMe";
import '../style/home.css';
function Home(){
    return(
        <div className="homeContainer">
            <Description />
            <KnowMe />
        </div>
    )
}

export default Home;