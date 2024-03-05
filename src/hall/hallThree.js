import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";

import './hall.css'
import tagg from "../pics/taggicon.jpg"

export default 


function HallThree() {
 useEffect(()=>{
   AOS.init()
}, [])

 return(
  <div className='allHall' style={{height:"100%", width: "100%", display: "flex"} } data-aos="fade-up" data-aos-duration="2000">
     <div style={{display: 'flex', flex:"0.4", alignItems:'center', justifyContent: 'center'}}>
     <img className='reference' src={tagg} />
     </div>
     <div style={{display: 'flex', flexDirection: 'column', flex: "0.6",justifyContent: 'center'}}>
       <h1 className='title' >TCC: Tagg app</h1>
       <p className='hallIntroduction' >Meu mais ambiocioso projeto até hoje, o Tagg App, desenvolvido em comunhão com meu grupo de TCC do 3° ano do EM.
     </p>
     </div>
   </div>
 )
}
