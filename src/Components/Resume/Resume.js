import React from 'react'
import './Resume.css';
import Footer from '../Footer.js/footer'
import Header from '../Header/header'

function Resume() {
  return (
   <div>
   <Header />
   <div className="imgco">
   <img src={require('../Images/gif1.gif')} class="img-fluid" alt="Responsive"></img>
       <img src={require('../Images/gif2.gif')} class="img-fluid" alt="Responsive" id='img2'></img>
   </div>
   <Footer />
  

   </div>
  )
}

export default Resume