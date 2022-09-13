import React from 'react'
import "./proute.css";
import "./../../App.css"
import Header from "./../Header/header"
import Footer from "./../Footer.js/footer"


import { Card } from 'react-bootstrap';


function proute() {



  return (
    <div className="App">
    <Header />

  
   
    <div className='projectSection'  id='ProjectSection'>
    <div className="text">
    <h1>Here is My Projects</h1>
    {/* <img src={require('../Images/proj.png')} id='projImg'  alt=""  /> */}
  
    </div>
    <div className="mainProjects">

    <Card style={{ width: '18rem'}} className='card1'>
<Card.Img variant="top" src={require('../Images/ecomb.png')} />
<Card.Body>
<Card.Title>Full Stack Ecommerce</Card.Title>
<Card.Text>
Online Shopping Site for Fashion & Lifestyle in India
</Card.Text>
<div className="picons">
<ul className="psocials">
<li><a href="https://github.com/sagar-host/SHOPIE-FRONTEND" target="_blank" rel="noopener noreferrer">Code   <i className="fa fa-github"></i></a></li>
<li><a href="https://www.mytextui.com/" target="_blank" rel="noopener noreferrer">Live      <i className="fa fa-chevron-circle-up "></i></a></li>

</ul>
</div>

</Card.Body>
</Card>

<Card style={{ width: '18rem' }} className='card1'>
<Card.Img variant="top" src={require('../Images/loginb.png')} />
<Card.Body>
<Card.Title>Authentication</Card.Title>
<Card.Text>
User Authentication by  JWT<br /> OAUTH 2.0 and Passport

</Card.Text>
<div className="picons" style={{ marginTop: "35px"}}>
<ul className="psocials">
<li><a href="https://github.com/sagar-host/Nodeaws" target="_blank" rel="noopener noreferrer">Code   <i className="fa fa-github"></i></a></li>
<li><a href="https://oauthnode0.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live      <i className="fa fa-chevron-circle-up "></i></a></li>

</ul>
</div>

</Card.Body>
</Card>

<Card style={{ width: '18rem' }} className='card1'>
<Card.Img variant="top" src={require('../Images/crud.png')} />
<Card.Body>
<Card.Title>CRUD</Card.Title>
<Card.Text>
MERN  Admin PANEL CRUD <br /> with Web API and Registration  .
</Card.Text>
<div className="picons">
<ul className="psocials">
<li><a href="https://github.com/sagar-host/Admin-SHOPIE" target="_blank" rel="noopener noreferrer">Code  <i className="fa fa-github"></i></a></li>
<li><a href="https://admin-shopie.vercel.app/" target="_blank" rel="noopener noreferrer">Live <i className="fa fa-chevron-circle-up "></i></a></li>

</ul>
</div>
</Card.Body>
</Card>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default proute