import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import gta from '../assets/gta.jpeg';



function ComGtaX() {
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
      marginTop:'50px',
      boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
    }}>
    <Card>
        <Card.Img variant="top" src={gta} />
        <Card.Body>
          <Card.Title>GTA San Andreas</Card.Title>
          <Card.Text>
            Grand Theft Auto: San Andreas es un videojuego de acción en mundo
            abierto que nos lleva a California, años 90, con Carl Jonson (CJ) de
            vuelta a su barrio natal para asistir al funeral de su madre tras
            haber pasado cinco largos años en Liberty City y, aunque no tenía la
            más mínima intención de dejarse arrastrar de nuevo por la vida
            callejera, las circunstancias le obligarán a embarcarse en una
            frenética aventura luchando para conservar su familia, su banda y su
            propia vida.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rockstar Games</ListGroup.Item>
          <ListGroup.Item>Xbox/PS2/PC</ListGroup.Item>
          <ListGroup.Item>10/06/2005</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComGtaX;

