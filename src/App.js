import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Pages/Header";
import HeroSection from './Pages/Herosection';
import About from './Pages/aboutsection';
import Vision from './Pages/visionsection';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <HeroSection/>
        <About/>
        <Vision/>
      </Router>
    </div>
  );
}

export default App;
