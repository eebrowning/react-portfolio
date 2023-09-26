import { useEffect, useState } from "react";
import moveToSelected from "../../Utils/moveToSelected";
import "./carousel.css"


const Projects2 = ({ step, race }) => {

    let classValues = {};
    let sportsArr = [];
    // if (classValues) classValues.forEach(entry => { sportsArr.push(entry['class']) })
    const [sports, setSports] = useState("Rogue");
    // const [birthdate, setBirthdate] = useState("1111-11-11T00:00:00.000Z");//temp to disable input TODO
    const carouselLabels = ["selected", 'next', 'nextRightSecond', 'hideRight', 'hideRight'];

    const [carouselCards, setCarouselCards] = useState([])


    useEffect(() => {
        let mageCard = document.getElementById('Mage-card');
        let next3 = document.querySelector('.next-3');//
        let next = document.querySelector('.next');//is the next card
        ///////
        if (sports === 'Mage') {
            next3.style.opacity = 0
        } else if (race === 'Dwarf' && sports == 'Warrior') {
            console.log(sports)
            next3.style.opacity = 0
            next3.style.zIndex = -5
        } else {
            next3.style.opacity = 1
            next3.style.zIndex = 5
        }
        ///////
    }, [race, step, sports])




    useEffect(() => {
        setCarouselCards(document.getElementById("sports-select")?.children)
        handleLabels();
        // document.getElementsByClassName('form-phase')[0].innerText = "Select Class";
        // document.querySelector('.prev-3').style.opacity = '1';//cheeky fix

    }, [])


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('sport')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('sport')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();
        moveToSelected('prev')
        setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)

    }
    let handleClickRight = (e) => {
        e.preventDefault();
        moveToSelected('next');
        setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)
    }

    let handleSelect = (e) => {
        e.preventDefault();
        // redundant
        setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }
    let handleClickPicture = (e) => {
        e.preventDefault();
        // document.querySelector('.selected')?.classList.remove('selected');
        // document.getElementById(e.target.id + '-card').classList.add('selected');
        // setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }

    return (<div className="part-3 bootPart">
        <label htmlFor="projects" className="" style={{ display: 'block' }}>
            <img alt="previous-option arrow" className={'white-arrow prev-3'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
            <img alt="next-option arrow" className={'white-arrow next-3'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
            <div className='arrow-spacer'></div>
            <label id='sports-error' htmlFor="projects"></label>
            <div name='projects-select' id='projects-select'>
                {/* take projects from old carousel and create better cards */}
                <div id="projects" >
                    <div class="project-card">
                        <div>
                            <h2>DA: Tarot</h2>
                            <a href="http://ec2-52-53-252-167.us-west-1.compute.amazonaws.com/" class="image fit"><img
                                src="https://i.imgur.com/ITtWNrP.png"
                                alt="" /></a>
                        </div>
                        <div class="info">
                            <h2>A Challenge to reproduce the aesthetic of Dragon Age: Inquisition's character creation menu</h2>

                            <p>
                                Utizilation of react packages for seamless image cropping and custom scrollbars
                            </p>
                            <p>
                                Backend constructed in Express uses RESTful standards for endpoints, AWS S3 bucket incorporation for images
                            </p>
                            <p>
                                Various custom carousels and card animations to give the user a sense of immersion
                            </p>
                        </div>
                    </div>
                    <div class="project-card">
                        <div>
                            <h2>PipCamp</h2>


                            <a href="https://pip-camp.herokuapp.com/" class="image fit"><img
                                src="https://user-images.githubusercontent.com/51832487/184191666-eef5ad5d-53fb-476d-a1d9-565f433633f5.png"
                                alt="pipcamp" /></a>
                        </div>

                        <div class="info">
                            <h2>
                                A HipCamp-inspired Fallout-styled clone made with Flask / Python, React / Javascript,
                                Heroku
                                hosting, AWS image hosting
                            </h2>
                            <p>
                                Created a pixel-perfect HipCamp Clone, styled like the Fallout 4 video game: styled
                                purely with CSS, no frontend frameworks.
                                Sizing is dynamic to preserve the UI of the inspiring project at a range of desktop
                                screen sizes
                            </p>
                            <p>
                                PostgreSQL database size reduced by condensing 23 fields into an object with 8 columns
                                for Locations: storage handled with SQLAlchemy and provided to the frontend via Redux.
                                React Components facilitate dynamic addition of features and styling.
                            </p>
                            <p>
                                The result is a smooth, functional web application that is also easy to use and
                                understand for a casual user.
                            </p>
                        </div>
                    </div>
                    <div class="project-card">
                        <div>
                            <h2>CCDB</h2>

                            <a href="https://ccdb.onrender.com/" class="image fit"><img
                                src="https://i.imgur.com/SgmVX2W.png"
                                alt="" /></a>
                        </div>

                        <div class="info">
                            <h2>
                                A Front-end for a movie database website
                            </h2>
                            <p>
                                Showcases ability to fetch and use JSON data to render an interactive front-end
                            </p>
                            <p>
                                Utilized prop-passing to keep functonal components separate while allowing them to communicate to each other, like the search and filter, which work together to search the results of the current filter.
                            </p>
                            <p>
                                Carousel traversable via scroll or button, will scroll past all but the last movie poster in-view for ease-of-use.
                            </p>
                        </div>
                    </div>

                    <div class="project-card">
                        <div>
                            <h2>TableOpen</h2>
                            <a href="https://opentableproject.herokuapp.com/" class="image fit"><img
                                src="https://pipcamp.s3.amazonaws.com/9b171670c45643d0a5c6ed5319cb1011.png"
                                alt="" /></a>
                        </div>

                        <div class="info">
                            <h2>An OpenTable clone; a Flask / React / Redux project with 3 teammates, constructed in 4
                                days with 1 week of Python experience
                            </h2>
                            <p>
                                A team-effort showcasing the production of a two CRUD feature application: each of us
                                having a hand in creating API routes, database models, frontend forms and the shaping of
                                the state via the Redux store.

                            </p>
                            <p>
                                Backend and Frontend components were constructed in 2.5 days, all styling achieved in
                                1.5 days.
                            </p>
                            <p>
                                Provided a refined UX/UI while under time constraints: We ensured any interactive
                                element was unquestionably interactive while being pleasing to look at.

                            </p>
                        </div>
                    </div>

                    <div class="project-card">
                        <div>
                            <h2>Bark!</h2>

                            <a href="https://bark-eeb828.herokuapp.com/" class="image fit"><img
                                src="https://pipcamp.s3.amazonaws.com/2d74cb10766c4ec29adefb13878991d2.png"
                                alt="" /></a>
                        </div>

                        <div class="info">
                            <h2>A Yelp clone for places you can take your dog: Express.js, React.js, Heroku
                                hosting
                            </h2>
                            <p>
                                Created a simple site for creating and reviewing locations to take your dog: includes
                                location search and average ratings.

                            </p>
                            <p>
                                Express backend uses Sequelize RDBMS to store and serve information, while the React
                                frontend uses Redux store to manage State to keep information available at critical
                                points.
                                Simple fetch requests filtered for desired search results.
                            </p>
                            <p>
                                The site demonstrates shaping and management of state to provide a smooth user
                                experience.
                            </p>
                        </div>
                    </div>

                </div>
                {sports && (<div className="projects-info-bubble">
                    {/* <h2>{classData[sports]['general_class']}</h2>
                    <p>{classData[sports]['description']}</p> */}
                </div>)}

            </div>


        </label >

    </div >)
}

export default Projects2;
