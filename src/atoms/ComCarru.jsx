import React from "react";
import Carousel from "react-bootstrap/Carousel";
import tlou2 from "../assets/tlou2.jpg";
import doom from "../assets/doom.jpg";
import elite from "../assets/elite.jpg";
import gow from "../assets/gow.jpg";
import "../atoms/ComCarru.css";

function ComCarruX() {
  return (
    <div>
      <Carousel fade className="cro">
        <Carousel.Item>
          <img src={tlou2} className="img1"></img>
          <Carousel.Caption>
            <h3>The Last of us Part ll</h3>
            <p>
              Es un videojuego de acción y aventuras, con elementos de
              supervivencia ​Ambientado cinco años después de The Last of Us
              (2013), post-apocalíptico en USA, cuyas vidas se entrelazan:
              Ellie, que busca venganza después de sufrir una tragedia,
              enmarcado en un mundo postapocalíptico donde habitan unos seres
              infectados. Busca hacerse fuerte en mecánicas jugables como la
              exploración o el combate con un fuerte elemento táctico, no sólo
              plantando cara a los zombies y criaturas de pesadilla de su mundo
              de infectados.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={doom} className="img2"></img>
          <Carousel.Caption>
            <h3>DOOM Eternal</h3>
            <p>
              DOOM Eternal es la secuela directa del galardonado Doom (2016)
              desarrollado por id Software, donde se busca ofrecer la mejor
              combinación de velocidad y potencia de fuego, dando todo un salto
              adelante en el mundo del combate en primera persona en avance
              continuo. En DOOM Eternal el jugador debe tomar el papel del
              Asesino de la Muerte (DOOM Slayer) y regresar para vengarse de las
              fuerzas del infierno en una entrega donde hay nuevos demonios y
              clásicos así como armas y habilidades potentes y novedosas. DOOM
              Eternal nos lleva a luchar por diferentes dimensiones.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={gow} className="img3"></img>
          <Carousel.Caption>
            <h3>Gears Of War 3</h3>
            <p>
              Esta entrega marca el fin de la aventura de Marcus Fenix en la
              búsqueda de su padre, Adam Fenix, quien parece ser la clave para
              poner punto final a la guerra contra los Locust. La serie Gears of
              War, que sentó las bases del sistema de coberturas en los juegos
              de disparos, firma así la entrega mejor recibida tanto por la
              crítica especializada como por los fans. Podemos disfrutar su
              acción tan táctica y violenta como es costumbre en la franquicia
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={elite} className="img4"></img>
          <Carousel.Caption>
            <h3>Halo Reach</h3>
            <p>
              El videojuego nos pone en la piel de Noble 6, personaje
              personalizable tanto para la campaña como para el multijugador,
              sustituyendo al Jefe Maestro. Llevamos la guerra contra el
              Covenant en el planeta Reach, donde debemos escoltar a Cortana
              hasta el Pillar of Autumn.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ComCarruX;
