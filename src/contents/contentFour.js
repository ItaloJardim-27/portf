import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";
import "../contents/contentFour.css";
import flBack from '../pics/flstudioPort.png'
import ReactAudioPlayer from 'react-audio-player';
import musicOne from '../audios/ambience.mp3'
import musicTwo from '../audios/boss.mp3'
import musicThree from '../audios/theme.mp3'
import musicFour from '../audios/original.mp3'
export default
  function ContentFour() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div data-aos="fade-up" className='allDiv'>
      <ul class="circlesFour" style={{ position: 'absolute' }}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className='allCont' data-aos="fade-up">
          <div className='imgDiv'>
            <img src={flBack} className='regularImg'></img></div>
        <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center", marginRight: "10px" }}>
              <h1 className='title'>O caminho da música</h1>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <p className='introduction'>Em 2022, comecei a procurar alguns aplicativos de música pela GoogleStore para aprender a compor temas para o meu jogo, estas que eram mais simples, hoje encontram um teor mais complexo. Não há uma diferença gritante, mas já sou capaz de misturar diferentes instrumentos e incluir samples de percussão, usando o FL Studio.</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }} data-aos="fade-up">
          <div style={{ padding: "15px", textAlign: 'center'}}>
            <h1 className='title'>Conheça algumas das minhas composições</h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>

            <div className='audioDiv'>
              <ReactAudioPlayer
              src={musicOne}
              autoPlay = {false}
              controls style={{height: "90px", width: "700px", margin: '10px'}}/>   
               <ReactAudioPlayer
              src={musicTwo}
              autoPlay = {false}
              controls style={{height: "90px", width: "700px", margin: '10px'}}/>   
            
            </div>
            
            <div className='audioDiv'>
              <ReactAudioPlayer
              src={musicThree}
              autoPlay = {false}
              controls style={{height: "90px", width: "700px", margin: '10px'}}/>   
               <ReactAudioPlayer
              src={musicFour}
              autoPlay = {false}
              controls style={{height: "90px", width: "700px", margin: '10px'}}/>   
            
            </div>
          </div>
        </div>

      </div>


    </>
  )
}