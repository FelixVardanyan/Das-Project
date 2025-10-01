import Likes from "../../components/Likes/Likes"
import Title from "../../components/Title/Title"
import "./About.css"
import Saturn from "./saturn.jpeg"

const About = () => {
    return (
        <div className="about">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={Saturn} alt="saturn"/>
                        <Title/>
                        <Likes/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;