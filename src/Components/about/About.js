import './about.css'

const About = () => {
    return (
        <section id="about-container" className="dark">
            <section id="about" className="main">

                <header id="about-header">

                    <h2>About Ethan.</h2>
                    <p>A software engineer living in between Boulder and Denver, CO</p>

                </header>
                <div className="content dark style3">
                    <div id="about-card" className="container">
                        <img className="image featured"
                            src="https://lh3.googleusercontent.com/a-/AFdZucrE4OZRJK7YDyOhBgrbTeKVXp_s8XIZ54gJyHPSHw=s519-p-rw-no"
                            alt="" />
                        <div className="about-details">
                            <p>
                                Along with my experience as a programmer, I spent a long time working in specialty coffee
                                and as
                                a repair tech for coffee equipment.
                                I really enjoy tinkering and making things function their best: whether it's reducing
                                time/space
                                complexity, DRYing up the code in a project, repairing/optimizing commercial equipment, or
                                making my Skyrim character as
                                overpowed as possible, I'm always striving to make things a little bit better.

                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </section >
    )
}


export default About;
