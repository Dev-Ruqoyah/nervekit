import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Sections/Header";
import HeroSection from './Sections/Herosection';
import About from './Sections/aboutsection';
import Vision from './Sections/visionsection';
import Offer from './Sections/offersection';
import Service from './Sections/ServiceSection';
import Team from './Sections/Team'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <HeroSection/>
        <About/>
        <Vision/>
        <Offer/>
        <Service/>
        <Team/>
      </Router>
    </div>
  );
}

export default App;
