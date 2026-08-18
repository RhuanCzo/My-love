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
import ballet8 from "./medias/ballet8.jpeg";
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


  // contador de dias
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const [meses, setMeses] = useState(0);
  const [semanas, setSemanas] = useState(0);
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  // contador de tempo
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
  // troca de fotos e vídeos
  useEffect(() => {

    const intervalo = setInterval(() => {

      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % midia.length);
        setFade(true);
      }, 300);

    }, 3000);

    return () => clearInterval(intervalo);

  }, []);

  return (
    <Body>

      <Musica>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/5y2ijHECwFYWqcAHKTZgzD?utm_source=generator&si=466ac01fdd4c4c67"
          width="100%"
          height="100%"
          title="video"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Musica>

      <Imagem>

        {midia[index].tipo === "imagem" ? (

          <img
            className={fade ? "fade-in" : "fade-out"}
            src={midia[index].src}
            alt="foto"
          />

        ) : (

          <video
            className={fade ? "fade-in" : "fade-out"}
            src={midia[index].src}
            autoPlay
            muted
            loop
          />

        )}

      </Imagem>

      <Top>
        <h1> O tempo não passa já estou há {dias} dias, {horas} horas, {minutos} minutos e {segundos} segundos sem te ver ❤️</h1>
      </Top>

      <Titulo>
        <h1>Para a minha mulher preferida e amor da minha vida</h1>
      </Titulo>

      <Textinho>
        <h3>
          Amor, te amo muito e admiro você do fundo do meu coração.
          Você é incrível, inteligente e perfeita como pessoa e em tudo em que se propõe a fazer.
          Amo tudo em você, desde as suas unhas até o seu cabelo, pricipalmente o abdômen HEHEHEHE.
          Eu poderia ficar horas aqui falando o quanto eu amo cada detalhe seu. Mas enfim, bem simples
          mas fiz porque te amo minha futura esposa, espero que você abra isso aqui sem eu falar.
        </h3>
      </Textinho>
    </Body>
  );
}

const Body = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0f0f1a;
min-height: 100vh;
`

const Musica = styled.div`
height: 80px;
width: 90%;
padding-top: 20px;
border: none;
`

const Imagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  max-width: 900px;
  height: 500px;

  margin-top: 50px;
  padding: 8px;

  background: #11111F;
  border-radius: 24px;

  overflow: hidden;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 18px;

    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 400px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 350px;
  }
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 10px;
color: #F6F6FA;
margin-top: 20px;
`

const Titulo = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding-top: 40px;
font-size: 15px;
color: #F6F6FA;
`

const Textinho = styled.div`
display: flex;
justify-content: center;
text-align: left;
width: 80%;
max-width: 600px;
padding: 20px;
color: #5C626D;

h3{
  line-height: 1.6;
  font-weight: 400;
}
`

export default App;