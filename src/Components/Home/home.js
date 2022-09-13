import * as React from "react";
import Header from "../Header/header"
import Middle from "../Middle/middle"
import About from "../About/about"
import Project from "../ProjectSection/Project"
import Footer from "../Footer.js/footer"
import Carousel from "../Carousel/Carousel"
import Tool from '../Tool1/tool'
// import Play from "../Play/play";





function home() {
  return (
    <div className="App">

       <Header />
       <Tool />
       
        <About />
        
       <Middle />
      <Carousel />

     
       <Project />
        <Footer />



        </div>
  )
}

export default home
