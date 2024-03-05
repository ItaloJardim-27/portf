import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";
import "../contents/contentThree.css";
import taggvid from '../videos/taggport.mp4'
import qrCodeTagg from '../pics/qrCodeTagg.png'
export default
  function ContentThree() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='allDiv' data-aos="fade-up" >
      <ul class="circlesThree" style={{ position: 'absolute'}}>
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
            <video  className='videoPort' src={taggvid} width="800" height="550" controls="controls" autoplay="false" /></div>
          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center", }}>
              <h1 className='contTitle'>Tagg App! Uma rede social feita por estudantes</h1>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <p className='introduction'>O Tagg App não é uma rede social como qualquer outra, ela é muito mais do que isso! Com a nossa rede, é possível não só criar postagens, com fotos, vídeos, emotis, seguir seus amigos e comentar nos posts deles. Mas muito mais do que isso!
                Com o Tagg App, você pode entrar em chamada de vídeo, compartilhar tela, mandar mensagens privadas, criar canais entre seus amigos e, neles, assistir vídeos diretamente do Youtube ou até mesmo jogar jogos interativos dentro do aplicativo!
                Mas o nosso diferencial é o que leva no nome: As Taggs! Na nossa aplicação, todos os posts são demarcados por uma Tagg que o usuário decida que se adequa ao conteúdo do post, e a rede é toda organizada e monitorada por IAs para selecionar os melhores posts e organizá-los por Taggs!
                Feito com as melhores tecnologias do mercado, como NodeJs, React.JS e ReactNative, o nosso servidor responde e encaminha as respostas em tempo real! Atualizando todos e quaisquer elementos na tela sem necessidade de muita ânsia!
              </p> </div>
          </div>
        </div>


        <div className='allCont' data-aos="fade-up">
          <div>

            <div style={{ display: "flex", flexDirection: "column"}}>

              <div className='downloadDiv'>
                <h1 className="downloadH1" >Baixe já! Ou conheça nossa versão Web!</h1>
              </div>
              <div className='taggDiv'>
                <div style={{ display: "flex", flexDirection: "column", alignItems:'center'}}>
                  <h1 className='taggTitle'>GoogleStore</h1>
                  <img src={qrCodeTagg} style={{height: "400px", width: '400px'}}></img>
                </div>
                <div className='btnTaggDiv'>
                  <button className='btnTagg' onClick={() => window.location.href = '//tagg.chat'} >Logue pela Web</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}