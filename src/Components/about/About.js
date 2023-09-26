import Projects from '../projects/Projects';
import Projects2 from '../projects/Projects2';
import './about.css'


const About = () => {
    return (
        <section id="about-container" className="dark">
            <section id="about" className="main">

                <header id="about-header">
                    <div id='header-left'>
                        <h1 id='name'>Ethan Browning</h1>
                        <p>
                            Full Stack Web Dev
                        </p>


                    </div>
                    <div id='header-right'>
                        <p>
                            Hello!
                            My name is Ethan Browning, and I am a Fullstack Software Engineer.
                        </p>
                        <p>
                            I have developed several applications using PERN / MERN stack technology, exhibiting my ability to use various technologies to deliver a complete web application.From backend route and API development to authentication, and from validations to attractive frontend components, I am comfortable building and maintaining every aspect of a project.
                        </p>
                        <p>
                            I am also a seasoned specialty coffee veteran! I spent a decade working in coffee between being a barista and a repair technician for commercial coffee gear.
                        </p>
                        <p>
                            This comes with a lot of teamwork, customer service, and experience with a variety of client-facing roles.
                        </p>

                    </div>
                </header>

                <div id="about-card" className="container">

                    {/* <div className="about-details">
                        <img className="image featured"
                            src="https://lh3.googleusercontent.com/a-/AFdZucrE4OZRJK7YDyOhBgrbTeKVXp_s8XIZ54gJyHPSHw=s519-p-rw-no"
                            alt="" />

                        <p>
                            {`Hello!\nMy name is Ethan Browning, and I am a Fullstack Software Engineer.\n \nI have developed several applications using PERN / MERN stack technology, exhibiting my ability to use various technologies to deliver a complete web application.From backend route and API development to authentication, and from validations to attractive frontend components, I am comfortable building and maintaining every aspect of a project.\nI am also a seasoned specialty coffee veteran! I spent a decade working in coffee between being a barista and a repair technician for commercial coffee gear.  \nThis comes with a lot of teamwork, customer service, and experience with a variety of client-facing roles.`}
                        </p>
                    </div> */}
                    <Projects2 />
                    {/* <Projects /> */}

                </div>

            </section>


        </section >
    )
}


export default About;
