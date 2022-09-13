import React from 'react'
import "./project.css"
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Project() {
 

  

  return (
<>
<div className="mainCard">
<Card>
    {/* <Card.Img variant="top" src={require('../Images/projectpic.png')} className='cardImg'/> */}
   <h1 className='cardImg'>Few Projects</h1>
   
    
    <Link to="/myproject"><button className='button_slide slide_down'>Click to see More</button></Link>


  </Card>
</div>
 

</>
  )
}

export default Project
