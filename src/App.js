import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Pages/Header";
import HeroSection from './Pages/Herosection';
import About from './Pages/aboutsection';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <HeroSection/>
        <About/>
      </Router>
    </div>
  );
}

export default App;
