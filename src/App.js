import styled from "styled-components";
import "./App.css";
import { useState, useEffect } from "react";

import ballet from "./medias/ballet.jpeg";
import ballet2 from "./medias/ballet2.jpeg";
import ballet3 from "./medias/ballet3.jpeg";
import ballet4 from "./medias/ballet4.jpeg";
import ballet5 from "./medias/ballet5.jpeg";
import ballet6 from "./medias/ballet6.jpeg";
import ballet7 from "./medias/ballet7.jpeg";
import video from "./medias/video.mp4";

function App() {

  const midia = [
    { tipo: "imagem", src: ballet },
    { tipo: "imagem", src: ballet2 },
    { tipo: "imagem", src: ballet3 },
    { tipo: "imagem", src: ballet4 },
    { tipo: "imagem", src: ballet5 },
    { tipo: "imagem", src: ballet6 },
    { tipo: "imagem", src: ballet7 },
    { tipo: "video", src: video },
    { tipo: "imagem", src: ballet3 }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const [meses, setMeses] = useState(0);
  const [semanas, setSemanas] = useState(0);
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  // CONTADOR
  useEffect(() => {

    const dataInicial = new Date("2026-07-21");

    const calcularTempo = () => {

      const agora = new Date();
      const diferenca = agora.getTime() - dataInicial.getTime();

      const totalSegundos = Math.floor(diferenca / 1000);

      const segundosCalc = totalSegundos % 60;
      const minutosCalc = Math.floor(totalSegundos / 60) % 60;
      const horasCalc = Math.floor(totalSegundos / 3600) % 24;

      const totalDias = Math.floor(totalSegundos / 86400);

      const mesesCalc = Math.floor(totalDias / 30);
      const semanasCalc = Math.floor((totalDias % 30) / 7);

      setMeses(mesesCalc);
      setSemanas(semanasCalc);
      setDias(totalDias);
      setHoras(horasCalc);
      setMinutos(minutosCalc);
      setSegundos(segundosCalc);
    };

    calcularTempo();

    const intervalo = setInterval(calcularTempo, 1000);

    return () => clearInterval(intervalo);

  }, []);

  // TROCA DE FOTOS
  useEffect(() => {

    const intervalo = setInterval(() => {

      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % midia.length);
        setFade(true);
      }, 300);

    }, 3000);

    return () => clearInterval(intervalo);

  }, [midia.length]);


  return (
    <Body>

      <Musica>
        <iframe
          src="https://open.spotify.com/embed/track/5y2ijHECwFYWqcAHKTZgzD?utm_source=generator&si=466ac01fdd4c4c67"
          title="Música"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Musica>


      <Imagem $fade={fade}>

        {midia[index].tipo === "imagem" ? (

          <img
            src={midia[index].src}
            alt="Foto do casal"
          />

        ) : (

          <video
            src={midia[index].src}
            autoPlay
            muted
            loop
            playsInline
          />

        )}

      </Imagem>


      <Top>
        <h1>
          O tempo não passa...
          <br />
          Já estou há <strong>{dias}</strong> dias,{" "}
          <strong>{horas}</strong> horas,{" "}
          <strong>{minutos}</strong> minutos e{" "}
          <strong>{segundos}</strong> segundos sem te ver ❤️
        </h1>
      </Top>


      <Titulo>
        <h1>
          Para a minha mulher preferida
          <br />
          e amor da minha vida ❤️
        </h1>
      </Titulo>


      <Textinho>
        <h3>
          Amor, te amo muito e admiro você do fundo do meu coração.
          Você é incrível, inteligente e perfeita como pessoa e em tudo
          em que se propõe a fazer.
          Amo tudo em você, desde as suas unhas até o seu sorriso,
          principalmente o abdômen ksksksksk.
          Eu poderia ficar horas aqui falando o quanto eu amo cada detalhe seu.
        </h3>
      </Textinho>

    </Body>
  );
}


// ==========================
// BODY
// ==========================

const Body = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #0f0f1a;

  box-sizing: border-box;

  overflow-x: hidden;

  padding-bottom: 50px;
`;


// ==========================
// SPOTIFY
// ==========================

const Musica = styled.div`
  width: 90%;
  max-width: 700px;
  height: 80px;

  margin-top: 20px;

  iframe {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    width: 92%;
    height: 80px;
    margin-top: 15px;
  }
`;


// ==========================
// IMAGEM
// ==========================

const Imagem = styled.div`
  width: 80%;
  max-width: 900px;

  height: 500px;

  margin-top: 50px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #11111f;

  border-radius: 24px;

  overflow: hidden;

  box-sizing: border-box;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  img,
  video {
    width: 100%;
    height: 100%;

    object-fit: contain;

    border-radius: 18px;

    opacity: ${({ $fade }) => ($fade ? 1 : 0)};

    transition: opacity 0.3s ease;
  }


  /* TABLET */

  @media (max-width: 768px) {

    width: 90%;
    height: 450px;

    margin-top: 35px;

    border-radius: 20px;

    img,
    video {
      border-radius: 15px;
    }
  }


  /* CELULAR */

  @media (max-width: 480px) {

    width: 92%;

    height: 430px;

    margin-top: 25px;

    padding: 5px;

    border-radius: 18px;

    img,
    video {
      border-radius: 14px;
    }
  }


  /* CELULAR PEQUENO */

  @media (max-width: 380px) {

    height: 360px;

  }
`;


// ==========================
// CONTADOR
// ==========================

const Top = styled.div`
  width: 90%;
  max-width: 850px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: #f6f6fa;

  margin-top: 25px;

  h1 {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;

    margin: 0;
  }

  strong {
    font-weight: 700;
  }


  @media (max-width: 600px) {

    width: 90%;

    margin-top: 20px;

    h1 {
      font-size: 17px;
      line-height: 1.6;
    }
  }


  @media (max-width: 380px) {

    h1 {
      font-size: 15px;
    }
  }
`;


// ==========================
// TÍTULO
// ==========================

const Titulo = styled.div`
  width: 90%;
  max-width: 800px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: #f6f6fa;

  padding-top: 45px;

  h1 {
    font-size: 30px;
    line-height: 1.3;

    margin: 0;
  }


  @media (max-width: 600px) {

    padding-top: 35px;

    h1 {
      font-size: 24px;
      line-height: 1.35;
    }
  }


  @media (max-width: 380px) {

    h1 {
      font-size: 21px;
    }
  }
`;


// ==========================
// TEXTO
// ==========================

const Textinho = styled.div`
  width: 80%;
  max-width: 650px;

  display: flex;
  justify-content: center;

  text-align: center;

  padding: 20px;

  box-sizing: border-box;

  color: #8a8f9b;

  h3 {
    line-height: 1.7;
    font-size: 17px;
    font-weight: 400;

    margin: 0;
  }


  @media (max-width: 600px) {

    width: 92%;

    padding: 15px 5px;

    h3 {
      font-size: 15px;
      line-height: 1.7;
    }
  }


  @media (max-width: 380px) {

    h3 {
      font-size: 14px;
    }
  }
`;


export default App;