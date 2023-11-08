import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import hell from '../assets/hell.jpg';



function ComHellX() {
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
        <Card.Img variant="top" src={hell} />
        <Card.Body>
          <Card.Title>Hellblade: Senua's Sacrifice</Card.Title>
          <Card.Text>
            Hellblade: Senua's Sacrifice es un videojuego de Ninja Theory,
            auténticos expertos en el desarrollo de grandes aventuras de acción
            en tercera persona como DMC, Enslaved o Heavenly Sword. Con este
            título, que corre bajo Unreal Engine 4 en cuanto a su motor gráfico,
            sus creadores se pasan al desarrollo indie sin perder su enfoque
            inclinado hacia la acción y aventura que ha caracterizado a títulos
            anteriores.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Ninja Theory</ListGroup.Item>
          <ListGroup.Item>Xbox/PS4/PC/Nintendo Switch</ListGroup.Item>
          <ListGroup.Item>08/08/2017</ListGroup.Item>
        </ListGroup>
      </Card>
     
    </div>
  );
}


export default ComHellX;

