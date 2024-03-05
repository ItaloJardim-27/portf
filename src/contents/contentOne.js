import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";
import './contentOne.css';
import './content.css';
import etesp from "../pics/etespport.png"
import unesp from "../pics/unespport.jpeg"
import fisk from "../pics/fiskPortOF.png"
import obmep from "../pics/obmepPortOF.png"
import usp from "../pics/uspPortOF.png"
import pp from "../pics/projetoPortOF.png"
export default function ContentOne() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='allDiv' data-aos="fade-up" >
        <ul class="circlesOne" style={{ position: 'absolute'}}>
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
        <div className='allCont'  data-aos="fade-up">

          <div className='imgDiv'>
            <img className='regularImg' src={etesp} ></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center", }}>
              <h1 className='contTitle'>Ensino Médio e primeiro contato</h1>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <p className='introduction'>No ensino médio tive o primeiro contato com a programação, cursando o período intermediário de ensino na melhor escola pública de São Paulo, com ingresso através do seu processo seletivo.
                Lá, aprendi a lógica de computação e conheci diversas linguagens, as quais fui tendo mais familiaridade ao longo dos anos, como Java, Javascript, React.JS, ReactNative, NodeJs, C#, C++, etc.</p>
            </div>

          </div>
        </div>

        <div className='allCont' data-aos="fade-up">
          <div className='imgDiv'>
            <img className='regularImg' src={unesp}></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center", }}>
              <h1 className='contTitle' >O curso superior</h1>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <p className='introduction'> No momento, mudei-me para Bauru, afim de cursar Bacharelado em Sistemas de Informação na Unesp de Bauru, uma das melhores universidades do país.</p>
            </div>

          </div>
        </div>


        <div className='allCont' data-aos="fade-up">
          <div className='highlightDiv'>
            <div className='imgDiv' style={{ display: "flex", flexDirection: "row" }}>
              <img className='highlightImg a'  src={fisk} ></img>
              <img className='highlightImg b'  src={obmep} ></img>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img className='highlightImg c'  src={usp} ></img>
              <img className='highlightImg d'  src={pp} ></img>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
              <h1 className='contTitle'>Destaques</h1>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <p className='introduction'>Vim também destacar quatro pontos de conquistas: primeiro, realizei um curso pago de inglês por 4 anos, na Fisk, mas não tentei o examde de proficiência na língua inglesa ainda;
                segundo ponto, fui 2 vezes menção honrosa e uma vez medalha de prata na Obmep, além de ter conseguido medalha de bronze na OBA, a Olímpiada Brasileira de Astronomia;
                terceira realização, graças à medalha na Obmep, fui capaz de realizar um projeto de iniciação científica na USP, focado em matemática, projeto este que o fiz por dois anos;
                quarto destaque, fui voluntário em um projeto de cursinho popular da minha escola no ensino médio por um ano, onde lecionei física para alunos do nono ano do ensino fundamental. </p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
