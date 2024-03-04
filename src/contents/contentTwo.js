import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";
import "../contents/contentTwo.css";
import "../contents/content.css";
import stenBook from "../pics/stenBook.jpg"
import cover from "../pics/cover.png"
import ttoslVid from "../videos/ttoslport.mp4"
export default
  function ContentTwo() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div data-aos="fade-up" className='allDiv'>
        <ul class="circlesTwo" style={{ position: 'absolute' }}>
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
            <img className='regularImg' src={cover}></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center", marginRight: "10px" }}>
              <h1 className='title'>O livro</h1>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <p className='introduction'>Desde pequeno o atributo que mais gosto de aproveitar é a criatividade, principalmente no âmbito da fantasia. Portanto, aos nove anos de idade comecei a pensar numa história de um mundo fantástico e, com diversas inspirações que foram surgindo ao longo do caminho,
                em 2021 ela começou a tomar forma em instância de um livro, que deu errado e foi descartada. Porém, em meados de 2022, a proposta foi retomada em forma d'outro livro, este que vêm sendo escrito até hoje, e que já chega a quase 500 páginas!</p>
            </div>

          </div>
        </div>

        <div className='allCont' data-aos="fade-up">
          <div className='imgDiv'>

            <video src={ttoslVid} className='videoPort' controls="controls" autoplay="false" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: "90%", margin: "0 auto" }}>
            <h1 className='title' style={{ textAlign: 'center' }}>O jogo</h1>
            <p className='introduction'>{"Todavia, não era um livro que sempre imaginei produzindo. Mas uma outra forma de arte, uma tão paupavel pelos olhos quanto a luz, tão sensível ao coração quanto um livro. Produção audiovisual! Cinema, televisão: videogame! Foi assim que, conhecendo a Unity, comecei a programar os primeiros passos do meu jogo, bem próximo de quando iniciei o livro. Encontrei-me debruçado à sorte ao descobrir que a linguagem da engine era C# (uma das únicas linguagens que eu de fato dominava). E posso dizer que poucos projetos me possibilitaram um salto qualitativo tão enorme no entender do campo da lógica do que a programação de um jogo."} </p>

          </div>
        </div>

      </div>
    </>
  )
}