import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import star from '../assets/star.jpg';


function ComStarX() {
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
      float:'right',
      boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
    }}>
    <Card>
        <Card.Img variant="top" src={star} />
        <Card.Body>
          <Card.Title>Starfield</Card.Title>
          <Card.Text>
            Starfield es un videojuego de rol, acción, mundo abierto y
            exploración planetaria, ambientado en
            alrededor de un millar de planetas divididos en sistemas, que
            permite al usuario crear el personaje que desee y explorar el
            firmamento con una libertad sin precedentes mientras se embarca en
            un viaje épico para desentrañar el mayor misterio de la humanidad. En
            el año 2330, la humanidad se ha aventurado a ir más allá de nuestro
            sistema solar.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Bethesda Softworks</ListGroup.Item>
          <ListGroup.Item>Xbox/PS5/PC</ListGroup.Item>
          <ListGroup.Item>06/09/2023   </ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComStarX;

