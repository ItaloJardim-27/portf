import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";

import './hall.css'
import fl from "../pics/iconFlStudio.png"
export default function HallFour() {
 useEffect(()=>{
   AOS.init()
}, [])

 return(
  <div className='allHall' style={{height:"100%", width: "100%", display: "flex"} } data-aos="fade-up" data-aos-duration="2000">
     <div style={{display: 'flex', flex:"0.4", alignItems:'center', justifyContent: 'center'}}>
       <img className='reference' src={fl}/>
     </div>
     <div style={{display: 'flex', flexDirection: 'column', flex: "0.6",justifyContent: 'center'}}>
       <h1 className='title' >Músicas</h1>
       <p className='hallIntroduction' >Em 2022 comecei a compor em aplicativos simples, mas ano passado dei um passo a frente, a passei a utilizar o FL Studio.
     </p>
     </div>
   </div>
 )
}
