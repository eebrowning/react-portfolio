import logo from './logo.svg';
import './App.css';
import Projects from './Components/projects/Projects';
import Footer from './Components/footer/Footer';
import Contact from './Components/contact/Contact';
import Skills from './Components/skills/Skills';
import About from './Components/about/About';
import Navigation from './Components/nav/Navigation';
import Resume from './Components/resume/Resume';


function App() {
  return (
    <div className="App">
      <head>
        <title>Ethan Browning</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        {/* <link rel="stylesheet" href="assets/css/main.css" /> */}
      </head>
      <body>

        {/* <Navigation /> */}
        <About />
        <div class='side-by-side'>
        </div>
        {/* <Projects /> */}
        <Skills />
        <Resume />
        <Contact />
        <Footer />

      </body>
    </div>
  );
}

export default App;
