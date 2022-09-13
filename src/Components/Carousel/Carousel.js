import React from 'react'
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function carousel() {
  return (
    <div className="caro">
    <Carousel className="caro" autoPlay>
<div className='fie'>

<iframe width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/0RQWv1ybsjM" title="My Daily Marathon Tracker">
</iframe>
</div>
 

<div className='fie'>
<iframe width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/9EaY11hAod8"  title="Tracker 22">
</iframe>
  
</div>


<div className='fie'>
<iframe width="100%" height='100%' controls className='media'
src="https://www.youtube.com/embed/SVcsDDABEkM"  title="Tracker">
</iframe>
  
  
</div>

 
   
</Carousel>
</div>
  )
}

export default carousel
