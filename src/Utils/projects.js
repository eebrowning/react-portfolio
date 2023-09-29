export default [

    {
        "name": "PipCamp",
        "image": "https://user-images.githubusercontent.com/51832487/184191666-eef5ad5d-53fb-476d-a1d9-565f433633f5.png",
        "link": "https://pip-camp.herokuapp.com/",
        "title": "A HipCamp-inspired Fallout-styled clone made with Flask / Python, React / Javascript, Heroku hosting, AWS image hosting",
        "info": [
            "Created a pixel-perfect HipCamp Clone, styled like the Fallout 4 video game: styled purely with CSS, no frontend frameworks.",
            "Sizing is dynamic to preserve the UI of the inspiring project at a range of desktop screen sizes.",
            "PostgreSQL database size reduced by condensing 23 fields into an object with 8 columns for Locations: storage handled with SQLAlchemy and provided to the frontend via Redux.",
            "React Components facilitate dynamic addition of features and styling.",
            "The result is a smooth, functional web application that is also easy to use and understand for a casual user."
        ],
        "tech": ["Flask.py", "Heroku", "AWS S3", "React.js", "OAuth"]
    },
    {
        "name": "DA: Tarot",
        "image": "https://i.imgur.com/ITtWNrP.png",
        "link": "http://ec2-52-53-252-167.us-west-1.compute.amazonaws.com/",
        "title": "A Challenge to reproduce the aesthetic of Dragon Age: Inquisition's character creation menu",
        "info": [
            "Utilization of React packages for seamless image cropping and custom scrollbars.",
            "Backend constructed in Express uses RESTful standards for endpoints, AWS S3 bucket incorporation for images.",
            "Various custom carousels and card animations to give the user a sense of immersion."
        ],
        "tech": ["Express.js", "AWS EC2", "AWS S3", "React.js", "Passport"]
    },
    {
        "name": "CCDB",
        "image": "https://i.imgur.com/SgmVX2W.png",
        "link": "https://ccdb.onrender.com/",
        "title": "A Front-end for a movie database website",
        "info": [
            "Showcases ability to fetch and use JSON data to render an interactive front-end",
            "Utilized prop-passing to keep functional components separate while allowing them to communicate to each other, like the search and filter, which work together to search the results of the current filter.",
            "Carousel traversable via scroll or button, will scroll past all but the last movie poster in-view for ease-of-use."
        ],
        "tech": ["React.js"]

    },
    {
        "name": "TableOpen",
        "image": "https://pipcamp.s3.amazonaws.com/9b171670c45643d0a5c6ed5319cb1011.png",
        "link": "https://opentableproject.herokuapp.com/",
        "title": "An OpenTable clone; a Flask / React / Redux project with 3 teammates, constructed in 4 days with 1 week of Python experience",
        "info": [
            "A team-effort showcasing the production of a two CRUD feature application: each of us having a hand in creating API routes, database models, frontend forms and the shaping of the state via the Redux store.",
            "Backend and Frontend components were constructed in 2.5 days, all styling achieved in 1.5 days.",
            "Provided a refined UX/UI while under time constraints: We ensured any interactive element was unquestionably interactive while being pleasing to look at."
        ],
        "tech": ["Flask.py", "Heroku", "AWS S3", "React.js", "OAuth"]

    },
    {
        "name": "Bark!",
        "image": "https://pipcamp.s3.amazonaws.com/2d74cb10766c4ec29adefb13878991d2.png",
        "link": "https://bark-eeb828.herokuapp.com/",
        "title": "A Yelp clone for places you can take your dog: Express.js, React.js, Heroku hosting",
        "info": [
            "Created a simple site for creating and reviewing locations to take your dog: includes location search and average ratings.",
            "Express backend uses Sequelize RDBMS to store and serve information, while the React frontend uses Redux store to manage State to keep information available at critical points.",
            "Simple fetch requests filtered for desired search results.",
            "The site demonstrates shaping and management of state to provide a smooth user experience."
        ],
        "tech": ["Express.js", "AWS EC2", "AWS S3", "React.js", "Oauth"]

    }

]
