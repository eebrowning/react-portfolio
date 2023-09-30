import about from '../../Utils/about';
import Projects from '../projects/Projects';
import Projects2 from '../projects/Projects2';
import './about.css'
import Resume from '../resume/Resume';

const About = () => {
    return (
        <section id="about-container" className="dark">
            <section id="about" className="main">

                <header id="about-header">
                    <div id='header-left'>
                        <h1 id='name'>Ethan Browning</h1>
                        <p>
                            Full Stack Web Developer
                        </p>

                    </div>
                    <div id='header-right'>
                        {/* {about.map(line => (
                            <p>{line}</p>
                        ))} */}
                        <p>
                            Hello there!
                        </p>
                        <p>
                            I'm currently developing a website with a non-profit, <a className='external-link' href="https://www.linkedin.com/company/philly-outreach/about/">Philadelphia Outreach</a>. While being hosted on squarespace, I am developing a backend to serve and store forum data with Express.js and MongoDB, with robust user authentication.
                            <br />
                            <br />
                            This is called from within embedded Javascript, HTML and CSS on Squarespace.
                        </p>
                        <p>Check out some of my past projects below in my custom card carousel below!</p>

                    </div>
                </header>
                <Resume />
                <div id="about-card" className="container">

                    <Projects2 />
                    {/* <Projects /> */}

                </div>

            </section>


        </section >
    )
}


export default About;
