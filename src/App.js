import { React, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/home"
import Proute from "./Components/ProjectRoute/proute";
import Resume from '../src/Components/Resume/Resume';
import Contact from "./Components/Contact/contact";
import Coffee from "./Components/Coffe/coffe";
import ReactGA from 'react-ga';






function App() {

  useEffect(() => {
    ReactGA.initialize('G-MEKTVB0VK3');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })

  return (
    <div className="App">
    

       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myproject" element={<Proute />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/coffe" element={<Coffee />} />


      </Routes>
   
     
 
    </div>
 
      


    
   
  );
}

export default App;
