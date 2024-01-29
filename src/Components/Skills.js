import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills-wrapper">
            <h1>These are the technologies I'm most familiar with:</h1>

            <div className="skills" >
                <div className="skills-column" >
                    <h1>Languages</h1>
                    <p>JavaScript</p>
                    <p>Java</p>
                    <p>C++</p>
                </div>

                <div className="skills-column" >
                    <h1>Backend</h1>
                    <p>Node</p>
                    <p>Express</p>
                    <p>MongoDB & Mongoose</p>
                    <p>Git</p>
                    <p>Heroku</p>
                </div>

                <div className="skills-column" >
                    <h1>Frontend</h1>
                    <p>React</p>
                    <p>HTML/CSS</p>
                </div>
            </div>
        </div>
    )
}

export default Skills