import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";
import git from "../pics/logoGit.png"
export default function HallFive() {
  useEffect(()=>{
    AOS.init()
 }, [])

  return(
    <div style={{height:"100%", width: "100%", display: "flex", flexDirection: "row"} } data-aos="fade-up" data-aos-duration="2000">
      <div style={{display: 'flex', flex:"0.4", alignItems:'center', justifyContent: 'center'}}>
        <img src={git} style={{height:"500px", borderRadius:"50%", marginLeft: "10%"}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flex: "0.6",justifyContent: 'center'}}>
        <h1 style={{fontSize: '60px', color: 'white', fontWeight: "light", marginRight: '0%'}}>Meus projetos</h1>
        <p style={{fontSize: '30px',  color: 'white', fontWeight: "lighter", paddingRight: "10px"}}>No Git, tento postar os projetos que ando fazendo, inicialmente apenas para treino.
      </p>
      </div>
    </div>
  )
 }
