import { useBrightnessContext } from "../Hooks/useBrightnessContext"
import "./Skills.css"

const Skills = () => {
    const { brightness } = useBrightnessContext()

    return (
        <div className={brightness == 'light' ? "skills-wrapper" : "skills-wrapper-dark"}>
            <h1>These are the technologies I'm most familiar with:</h1>

            <div className={brightness == 'light' ? 'skills' : 'skills-dark'} >
                <div className={brightness == 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Languages</h1>
                    <p>JavaScript</p>
                    <p>Java</p>
                    <p>C++</p>
                </div>

                <div className={brightness == 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Backend</h1>
                    <p>Node</p>
                    <p>Express</p>
                    <p>MongoDB & Mongoose</p>
                    <p>Git</p>
                    <p>Heroku</p>
                </div>

                <div className={brightness == 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Frontend</h1>
                    <p>React</p>
                    <p>HTML/CSS</p>
                </div>
            </div>
        </div>
    )
}

export default Skills