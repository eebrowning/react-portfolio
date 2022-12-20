import Projects from '../projects/Projects';
import './about.css'


const About = () => {
    return (
        <section id="about-container" className="dark">
            <section id="about" className="main">

                <header id="about-header">
                    <div id='header-left'>
                        <h1>Ethan Browning</h1>
                        <p>Full-Stack Software Engineer</p>
                    </div>

                    {/* <img id='header-right' className="image featured"
                        src="https://lh3.googleusercontent.com/a-/AFdZucrE4OZRJK7YDyOhBgrbTeKVXp_s8XIZ54gJyHPSHw=s519-p-rw-no"
                        alt="" /> */}
                </header>

                <div id="about-card" className="container">

                    <div className="about-details">
                        <img className="image featured"
                            src="https://lh3.googleusercontent.com/a-/AFdZucrE4OZRJK7YDyOhBgrbTeKVXp_s8XIZ54gJyHPSHw=s519-p-rw-no"
                            alt="" />
                        <p>
                            {`Specialty coffee veteran turned fullstack software developer - proficient with PostgreSQL, Express.js, React.js, Node.js, as well as Python, Flask, Redux, HTML and styling with CSS. \nI have a background as a technician and have many years of customer service and support under my belt. Teamwork has always been the reason projects I have taken part in succeed: if everyone is working towards the same goal in an organized way, deadlines are just dates. \nAlong with my experience as a programmer, I spent a long time working in specialty coffee and as a repair tech for coffee equipment. \nI really enjoy tinkering and making things function their best: whether it's reducing time/space complexity, DRYing up the code in a project, repairing/optimizing commercial equipment, or making my Skyrim character as overpowed as possible, I'm always striving to make things a little bit better.`}

                        </p>
                    </div>
                    <Projects />

                </div>

            </section>


        </section >
    )
}


export default About;
