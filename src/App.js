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
      {/* <body> */}

      {/* <Navigation /> */}
      <About />
      <div className='side-by-side'>
      </div>
      {/* <Projects /> */}
      <Skills />
      <Resume />
      <Contact />
      <Footer />

      {/* </body> */}
    </div>
  );
}

export default App;
