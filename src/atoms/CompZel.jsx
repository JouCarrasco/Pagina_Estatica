import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import zel from '../assets/zel.jpg';



function ComZelX() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      width: "28rem",
      marginTop: "50px",
      boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
    }}>
   <Card>
        <Card.Img variant="top" src={zel} />
        <Card.Body>
          <Card.Title>The Legend of Zelda: Tears of the Kingdom</Card.Title>
          <Card.Text>
            La secuela de TLoZ: Breath of the Wild, nos lleva de vuelta a Hyrule
            en un momento de máxima tensión por culpa del renacimiento del
            malvado Ganondorf, que ha desatado su furia sobre los habitantes de
            este mundo de fantasía. Con este punto de partida, el videojuego
            exclusivo de Nintendo nos transporta a un escenario conocido y a la
            vez distinto donde las tierras de Hyrule se han fracturado con
            decenas de islas en el cielo que podemos explorar libremente.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Nintendo</ListGroup.Item>
          <ListGroup.Item>Nintendo Switch</ListGroup.Item>
          <ListGroup.Item>12/05/2023</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComZelX;

