import React, { useEffect, useState } from 'react'
import "./projects.css"

const Projects = () => {
    // const { children } = projects;
    const [carouselWidth, setCarouselWidth] = useState(document.getElementById("card")?.clientWidth);
    let scrollBox = document.getElementById("projects-display");

    useEffect(() => {
        setCarouselWidth(document.getElementById("card")?.clientWidth)
        // console.log('width changed')

    })

    let handleClickLeft = (e) => {
        e.preventDefault();


        return document.getElementById('projects-box-inner').scrollBy({
            top: 0,
            left: -carouselWidth,
            behavior: 'smooth'
        })
    }

    let handleClickRight = (e) => {
        e.preventDefault();

        return document.getElementById('projects-box-inner').scrollBy({
            top: 0,
            left: carouselWidth,
            behavior: 'smooth'
        })
    }


    return (
        <>
            <div id="projects-box-outer">
                <h2>Projects</h2>
                <img className={'white-arrow'} onClick={handleClickLeft} id="left-arrow" src='https://i.imgur.com/oTediJN.png' />

                <div id="projects-box-inner">
                    <div id="projects-display">
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
                            <div id='card' class="project-card">
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
                            {/* <div class="project-card">
                                <div>
                                    <h2>Moetaku</h2>
                                    <a href="https://moetaku.herokuapp.com/" class="image fit"><img
                                        src="https://user-images.githubusercontent.com/51832487/173195212-83059e16-c31c-447d-8544-83997478426e.png"
                                        alt="" /></a>
                                </div>
                                <div class="info">
                                    <h2>A Medium clone for creating and reviewing gaming articles: Express.js, PUG, Heroku
                                        hosting.</h2>

                                    <p>
                                        A team-effort exercizing our skills with older technologies: vanilla css styling and PUG
                                        templating
                                    </p>
                                    <p>
                                        The Express backend for routes and serving information uses RESTful convention for
                                        endpoints
                                    </p>
                                    <p>
                                        Dynamically updating features for a smooth user experience
                                    </p>
                                </div>
                            </div> */}
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
                    </div>
                </div>
                <img className={'white-arrow'} onClick={handleClickRight} id="right-arrow" src='https://i.imgur.com/UpFYkCd.png' />

            </div >

        </>
    )
}

export default Projects
