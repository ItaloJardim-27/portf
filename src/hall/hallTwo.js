import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";

import './hall.css'
import "aos/dist/aos.css";
import game from "../pics/game.png"

export default  function HallTwo() {
    useEffect(()=>{
      AOS.init()
   }, [])
  
    return(
      <div className='allHall' style={{height:"100%", width: "100%", display: "flex"} } data-aos="fade-up" data-aos-duration="2000">
        <div style={{display: 'flex', flex:"0.4", alignItems:'center', justifyContent: 'center'}}>
        <img className='reference' src={game} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', flex: "0.6",justifyContent: 'center'}}>
          <h1 className='title' >O Conto de Sten Lodbrook:<br></br> o colar de Morgana</h1>
          <p className='hallIntroduction' >{"Meu primeiro e único projeto (ainda em andamento) de 2D gaming development na Unity engine. Iniciado em 2022, ainda não está finalizado."}
          </p>
        </div>
      </div>
    )
   }