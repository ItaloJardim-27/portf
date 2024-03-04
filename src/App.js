import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import AOS from "aos";
import "aos/dist/aos.css";
import insta from "./pics/logoInstagram.png"
import menu from "./pics/menu.png"
import linkedin from "./pics/logoLinkedin.png"
import twitter from "./pics/logoTwitter.png"
import youtube from "./pics/logoYoutube.png"
import git from "./pics/logoGit.png"
import HallOne from './hall/hallOne';
import HallTwo from './hall/hallTwo';
import HallThree from './hall/hallThree';
import HallFour from './hall/hallFour';
import HallFive from './hall/hallFive';
import ContentOne from './contents/contentOne';
import ContentTwo from './contents/contentTwo';
import ContentThree from './contents/contentThree';
import ContentFour from './contents/contentFour';
function App() {

  const [activeOption, setActiveOption] = useState(1);
  function handleOption(buttonNumber) {
    setActiveOption(buttonNumber);
  }
  const [highlightStyle, setHighlightStyle] = useState({});

  const handleHighlight = (event, button) => {
    const { top, left, width, height } = event.target.getBoundingClientRect();

    // Definindo cores específicas para cada botão
    let novaCorBorda = '';
    let novaCorFundo = '';

    if (button === 1) {
      novaCorBorda = 'rgb(34, 167, 240)';
    } else if (button === 2) {
      novaCorBorda = 'rgb(4, 147, 114)';
    }
    else if (button === 3) {
      novaCorBorda = 'rgb(142, 68, 173)';
    }
    else if (button === 4) {
      novaCorBorda = 'rgb(227, 100, 20)';
    }
    else if (button === 5) {
      novaCorBorda = 'rgb(195, 39, 43)';
    }
    setActiveOption(button);
    setHighlightStyle({
      top: `${top}px`,
      left: `${left}px`,
      width: `;${width}px`,
      height: `${height}px`,
      borderBottomColor: novaCorBorda
    });
  };
  const getButton = (button) => {
    // Adapte essa lógica conforme necessário
    switch (button) {
      case 1:
        return 'rgb(34, 167, 240)';
      case 2:
        return 'rgb(4, 147, 114)';
      case 3:
        return 'rgb(142, 68, 173)';
      case 4:
        return 'rgb(227, 100, 20)';
      default:
        return 'rgb(195, 39, 43)';
    }
  };


  const renderHall = (button) => {
    switch (button) {
      case 1:
        return <HallOne></HallOne>;
      case 2:
        return <HallTwo></HallTwo>;
      case 3:
        return <HallThree></HallThree>;
      case 4:
        return <HallFour></HallFour>;
      case 5:
        return <HallFive></HallFive>;
      default:
        return <div>Valor não reconhecido</div>;
    }
  };

  const renderContent = (button) => {
    switch (button) {
      case 1:
        return <ContentOne></ContentOne>;
      case 2:
        return <ContentTwo></ContentTwo>;
      case 3:
        return <ContentThree></ContentThree>;
      case 4:
        return <ContentFour></ContentFour>;
      case 5:
        return <div>Renderizar algo para o valor 5</div>;
      default:
        return <div>Valor não reconhecido</div>;
    }
  };
  useEffect(() => {
    AOS.init()
  }, [])
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="main">
      <div className="top" data-aos="fade-up" data-aos-duration="500" >

        <div className='top-section'>

          <button onClick={(event) => handleHighlight(event, 1)} className='option'>Início</button>

          <div className={`highlight active border-${activeOption}`} style={highlightStyle}></div>

          <button onClick={(event) => handleHighlight(event, 2)} className='option'>Game & Storytelling</button>

          <button onClick={(event) => handleHighlight(event, 3)} className='option'>Tagg App</button>

          <button onClick={(event) => handleHighlight(event, 4)} className='option'>Composições</button>

        </div>
        <div className='menu300'>
        <div style={{backgroundColor: 'rgba(2,0,36,1)'}}>
        <img src={menu} data-aos='fade-right' onClick={()=>setOpen(!isOpen)} style={{height: '8vh', filter: 'invert(100%)', margin: '15px'}}></img>
        </div>
        {isOpen == true ?
          (
            <>
              <div  data-aos={isOpen ? "fade-down" : ""} style={{ display: 'flex', width: '100%', zIndex: '2', position: 'absolute', backgroundColor: 'rgba(2,0,36,1)', flexDirection: 'column', alignItems: 'start', justifyContent: 'start'}}>

                <button onClick={(event) => handleHighlight(event, 1)} className='option'>Início</button>


                <button onClick={(event) => handleHighlight(event, 2)} className='option'>Game & Storytelling</button>

                <button onClick={(event) => handleHighlight(event, 3)} className='option'>Tagg App</button>

                <button onClick={(event) => handleHighlight(event, 4)} className='option'>Composições</button>

              </div>
            </>
          ) : null}
      </div>
        <div className={`top-hall active mixed-${activeOption}`}>
          {
            renderHall(activeOption)
          }
        </div>
        <div className={'middle'}>
          {
            renderContent(activeOption)
          }
        </div>

      </div>

      <div className='allBottom' >
        <div className='contactsDiv' >
          <h1 className='bottomH1' >Contatos</h1>
          <p className='bottomParagraph' >+55 11 96070-7737</p>
          <p className='bottomParagraph' >italojd2097@gmail.com</p>
          <p className='bottomParagraph' >italojd2097@outlook.com</p>
        </div>
        <div className='bottomIcon'>
          <img className='iconsNet' src={git} onClick={() => window.location.href = '//github.com/ItaloJardim-27'}></img>
          <img className='iconsNet' src={linkedin} onClick={() => window.location.href = 'https://www.linkedin.com/in/italo-pedro-lopes-silva-069232222'}></img>
          <img className='iconsNet' src={insta} onClick={() => window.location.href = '//instagram.com/italo_jardimsilva'}></img>
          <img className='iconsNet' src={twitter} onClick={() => window.location.href = '//twitter.com/TheVinciBoy'}></img>
          <img className='iconsNet' src={youtube} onClick={() => window.location.href = '//youtube.com/@JardimItalo'}></img>
        </div>
      </div>
    </div>
  );
}
export default App;
