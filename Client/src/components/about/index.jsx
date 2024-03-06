import React from "react"
import "../../App.css";
import foto from '../../assets/FOTOJULIAN.jpg'
import './about.css'
import ReactPlayer from 'react-player'
import videoRyM from '../../assets/videoRyM.mp4'

const About = () => {
  
  return (
    <div className="divAbout">
      <div className="divFoto">
        <img className="fotoAbout" src={foto} alt="Foto Autor" />
      </div>
      <div className="containerAbout">
         <h2 className="parrafoAbout">
          Esta aplicación está siendo desarrollada por Julián Arango. <br />
          <br />
          Permite visualizar los personajes de la serie Rick and Morty.
        </h2>

        <h4>
          La serie televisiva Rick and Morty está inspirada en la película
          "Volver al futuro". Rick Sánchez es el "estereotipo" del "científico
          loco". Es un genio y buen tipo, pero es irresponsable, poco arreglado,
          alcohólico, egoísta, depresivo, sarcástico y con poca cordura. <br />
          <br />
          Al juntarse con su nieto Morty, un joven de 14 años sin expresión,
          tímido y no muy listo; viven una variedad de aventuras a lo largo de
          universos paralelos.
        </h4>
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          url={videoRyM}
          height={"100%"}
          width={"100%"}
          controls
          playing
          loop
        />
      </div>
    </div>
  ); 
}
export default About