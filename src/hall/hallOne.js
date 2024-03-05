import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import './hall.css'
import "aos/dist/aos.css";
import me from "../pics/mePic.jpg"
export default function HallOne() {
  useEffect(()=>{
    AOS.init()
 }, [])

  return(
    <div className='allHall' style={{height:"100%", width: "100%", display: "flex"} } data-aos="fade-up" data-aos-duration="2000">
      <div className='divImageHall'>
        <img className='reference' src={me} />
      </div>
      <div className='divTextHall'>
        <h1 className='title' >Olá, eu sou Italo</h1>
        <p className='hallIntroduction'>Me chamo Italo Jardim, sou programador desde 2021, inicialmente <br></br> cursando técnico em Análise e Desenvolvimento de Sistemas, mas agora <br></br> busco  oportunidades no mercado.
      </p>
      </div>
    </div>
    )
 }