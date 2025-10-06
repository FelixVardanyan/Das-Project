import "./Weather.css"
import nkar from "../../assets/City.jpg"
import City from "../../assets/CityBack.jpg"
import axios from "axios"
import { useEffect, useState } from "react"



function Weather() {

    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [list, setList] = useState([])


    const click = () => {
        const api = `https:/api.openweathermap.org/data/2.5/forecast?q=${input}&appid=cb36d56d59a6202351fe6cff27d8977a`
        axios.get(api).then((e) => {
            setData(e.data)
        }).catch(err =>
            console.log(err)

        )
    }

    useEffect(() => {
        setList(data.list)
    }, [data])


    useEffect(() => {
        const first = "https:/api.openweathermap.org/data/2.5/forecast?q=yerevan&appid=cb36d56d59a6202351fe6cff27d8977a"
        axios.get(first).then((e) => {
            setData(e.data)
        }).catch(err =>
            console.log(err)

        )
    }, [])

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
                            <h2>{data?.city?.name} City</h2>
                            <p>{data?.city?.name}</p>
                            {list?.length > 0 && <p>{list[0].dt_txt}</p>}
                            <p>Thursday, May 19, 2025</p>
                            <div className="stugum">{list?.length > 0 && Math.round(list[0]?.main.temp - 273.15) + "°C"}</div>
                        </div>
                    </div>

                    <div className="aj">
                        <div className="icon">🌧️</div>
                        <h2>Cloudy</h2>
                        <div className="kanxik">
                            {list?.map((e, i) => {
                                if (i < 5) {
                                    return (
                                        <div key={i}>
                                            <span>
                                                {e.dt_txt}

                                            </span>
                                            <span>
                                                {Math.round(e.main.temp - 273.15) + "°C"}
                                            </span>
                                        </div>)
                                }
                            })}

                        </div>
                    </div>
                </div>

                <div className="qnakum">
                    <input type="text" placeholder="greq qaxaq"
                        defaultValue="yerevan"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button onClick={click}>Click me</button>
                </div>

                <div className="verjy">
                    2025 City Weather Widget, All Rights Reserved | Design by W3layouts
                </div>
            </div>
        </div>
    );

}

export default Weather;