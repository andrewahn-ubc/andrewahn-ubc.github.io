import { useBrightnessContext } from "../Hooks/useBrightnessContext"
import "./Skills.css"

// My "technical skills" section.
const Skills = () => {
    const { brightness } = useBrightnessContext()

    return (
        <div className={brightness == 'light' ? "skills-wrapper" : "skills-wrapper-dark"}>
            <h1>My tech stack:</h1>

            <div className={brightness == 'light' ? 'skills' : 'skills-dark'} >
                <div className={brightness == 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Languages</h1>
                    <p>JavaScript</p>
                    <p>Java</p>
                    <p>C/C++</p>
                </div>

                <div className={brightness == 'light' ? "skills-column" : "skills-column-dark"} >
                    <h1>Backend</h1>
                    <p>Node</p>
                    <p>Express</p>
                    <p>MongoDB</p>
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