import "./Home.css"
import Weeknd from "../../assets/The_Weeknd.png"
import Tatul from "../../assets/Tatul.png"
import Aram from "../../assets/Aram.jpg"
import { useState } from "react";

export default function Home() {
    const [showText, setShowText] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);

    return (
        <div className="home_container">
            <div className="nkar">
                <img src={Weeknd} alt="Weeknd" onClick={() => setShowText(!showText)}  />
                {showText && (
                    <a className="gag" href="https://ru.wikipedia.org/wiki/The_Weeknd">
                        The Weeknd info
                    </a>
                )}
            </div>
            <div className="nkar">
                <img src={Tatul} alt="Tatul" onClick={() => setShowText2(!showText2)}  />
                {showText2 && (
                    <a className="gag" href="https://hy.wikipedia.org/wiki/%D4%B9%D5%A1%D5%A9%D5%B8%D6%82%D5%AC_%D4%B1%D5%BE%D5%B8%D5%B5%D5%A1%D5%B6">
                        Tatul mernem janik
                    </a>
                )}
            </div>
            <div className="nkar">
                <img src={Aram} alt="Aram" onClick={() => setShowText3(!showText3)}  />
                {showText3 && (
                    <a className="gag" href="https://ru.wikipedia.org/wiki/%D0%90%D1%81%D0%B0%D1%82%D1%80%D1%8F%D0%BD,_%D0%90%D1%80%D0%B0%D0%BC_%D0%90%D0%BF%D0%B5%D1%82%D0%BE%D0%B2%D0%B8%D1%87">
                        Aram Srtaker Asatryan
                    </a>
                )}
            </div>
        </div>
    )
}