import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import spiders from '../assets/spiders.jpg';



function ComSpiderX() {
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
        <Card.Img variant="top" src={spiders} />
        <Card.Body>
          <Card.Title>Spider Man</Card.Title>
          <Card.Text>
            La historia de esta aventura es totalmente original y nos pone en el
            rol de un Peter Parker experimentado y maduro que debe lidiar con
            los problemas que suponen el tener que salvar Manhattan de los
            peores criminales o villanos y compatibilizarlo con su vida
            personal. De hecho, el trepamuros de Marvel se enfrenta a varios de
            sus peores enemigos, poniendo a pruebas las habilidades del
            alter-ego más acrobático de Parker.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Insomniac Games</ListGroup.Item>
          <ListGroup.Item>PS5</ListGroup.Item>
          <ListGroup.Item>07/09/2018</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComSpiderX;

