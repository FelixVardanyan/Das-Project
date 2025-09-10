import { NavLink } from "react-router-dom"
import "./Menu.css"
import { DataMenu } from "../../Datas/data"

export default function Menu() {
    return (
        <div id="nav">
            <ul id="ul">
                {DataMenu.map((e, i)=>(
                    <NavLink to={e.to} className={({ isActive }) => (isActive ? "Li1" : "Li2")} key={e.id}>{e.text}</NavLink>
                ))}
            </ul>
        </div>
    )
};