import Description from "../components/home/Description";
import KnowMe from "../components/home/KnowMe";
import Contact from "../components/Contact";
import UseWindowSize from "../components/UseWindowSize";
import '../style/home.css';
function Home(){
    const width=UseWindowSize();
    return(
        <div className="pageContainer homePage">
            <Description />
            <img className="profilePic" src={width>800
                ?"/files/floran_eiclies.png"
                :"/files/floran_eiclies_mobile.png"
            } alt="Floran Eiclies"></img>
            <KnowMe />
            <Contact />
        </div>
    )
}

export default Home;