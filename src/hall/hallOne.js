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
      <div style={{display: 'flex', flex:"0.4", alignItems:'center', justifyContent: 'center'}}>
        <img className='reference' src={me} style={{ borderRadius:"50%", marginLeft: "10%", border: "white 2px solid"}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flex: "0.6",justifyContent: 'center'}}>
        <h1 className='title' style={{fontSize: '60px', color: 'white', textAlign: 'center', fontWeight: "light", marginRight: '0%'}}>Olá, eu sou Italo</h1>
        <p className='introduction' style={{fontSize: '30px',  color: 'white', fontWeight: "lighter", paddingRight: "10px"}}>Me chamo Italo Jardim, sou programador desde 2021, inicialmente <br></br> cursando técnico em Análise e Desenvolvimento de Sistemas, mas agora <br></br> busco  oportunidades no mercado.
      </p>
      </div>
    </div>
    )
 }