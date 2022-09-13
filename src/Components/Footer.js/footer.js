import React from 'react'
import "./Footer.css";
import 'font-awesome/css/font-awesome.min.css';

import {Link} from "react-router-dom"

function footer() {
  return (
   
  <footer id='mainFooter'>
<div className="footer-menu">
 <ul className="f-menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/resume">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/myproject">Project</Link></li>
 </ul>
</div>

<div className="icons">
<ul className="socials">
<li><a href="https://www.github.com/sagar-host" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
<li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
<li><Link to="/"><i className="fa fa-google-plus"></i></Link></li>
<li><Link to="/"><i className="fa fa-youtube"></i></Link></li>
<li><a href="https://www.linkedin.com/in/sagar-208723153" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a></li>
</ul>
</div>

<div className="footer-bottom">
<h3 className='footerText'>Sagar.Bleu</h3>
<p>copyright &copy;2021 <Link to="/">Sagar</Link>  </p>
</div>



</footer>

 


  )
}

export default footer