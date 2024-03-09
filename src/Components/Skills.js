import { useBrightnessContext } from "../Hooks/useBrightnessContext"
import "./Skills.css"

// My "technical skills" section.
const Skills = () => {
    const { brightness } = useBrightnessContext()

    return (
        <div className={brightness === 'light' ? "skills-wrapper" : "skills-wrapper-dark"}>
            <h1>My tech stack</h1>

            <div className={brightness === 'light' ? 'skills' : 'skills-dark'} >
                <div className={brightness === 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Languages</h1>
                    <p>JavaScript &nbsp; <img src={"images/javascript.png"} alt="Loading" className="techLogo"></img></p>
                    <p>Java  &nbsp; <img src={"images/java.png"} alt="Loading" className="techLogo"></img></p>
                    <p>C/C++ &nbsp; <img src={"images/cpp.png"} alt="Loading" className="techLogo"></img></p>
                    <p>Python &nbsp; <img src={"images/python.png"} alt="Loading" className="techLogo"></img></p>
                </div>

                <div className={brightness === 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Backend</h1>
                    <p>Node &nbsp; <img src={"images/node.png"} alt="Loading" className="techLogo"></img></p>
                    <p>Express &nbsp; <img src={"images/express.png"} alt="Loading" className="techLogo"></img></p>
                    <p>MongoDB &nbsp; <img src={"images/mongo.png"} alt="Loading" className="techLogo"></img></p>
                    <p>Heroku &nbsp; <img src={"images/heroku.png"} alt="Loading" className="techLogo"></img></p>
                </div>

                <div className={brightness === 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Frontend</h1>
                    <p>React &nbsp; <img src={"images/react.png"} alt="Loading" className="techLogo"></img></p>
                    <p>HTML/CSS &nbsp; <img src={"images/html.png"} alt="Loading" className="techLogo"></img>
                    &nbsp; <img src={"images/css.png"} alt="Loading" className="techLogo"></img></p>
                </div>
            </div>
        </div>
    )
}

export default Skills