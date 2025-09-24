import "./Weather.css"
import nkar from "../../assets/City.jpg"
import City from "../../assets/CityBack.jpg"

function Weather() {
    return (
        <div className="background">
            <div className="hastatutyun">
                <h1 className="vernagir">CITY WEATHER WIDGET</h1>

                <div className="tver">
                    <div className="dzax">
                        <img
                            className="nkar"
                            src={nkar}
                            alt="city"
                        />
                        <div className="text-block">
                            <h2>Yerevan City</h2>
                            <p>Yerevan</p>
                            <p>14:56:28</p>
                            <p>Thursday, May 19, 2025</p>
                            <div className="stugum">31.09 °C</div>
                        </div>
                    </div>

                    <div className="aj">
                        <div className="icon">🌧️</div>
                        <h2>Cloudy</h2>
                        <div className="kanxik">
                            <div><span>Now</span><span>20 °C</span></div>
                            <div><span>09:00</span><span>22 °C</span></div>
                            <div><span>12:00</span><span>24 °C</span></div>
                            <div><span>15:00</span><span>23 °C</span></div>
                        </div>
                    </div>
                </div>

                <div className="qnakum">
                    <input type="text" placeholder="yerevan" />
                    <button>Click me</button>
                </div>

                <div className="verjy">
                    2025 City Weather Widget, All Rights Reserved | Design by W3layouts
                </div>
            </div>
        </div>
    );
}

export default Weather;