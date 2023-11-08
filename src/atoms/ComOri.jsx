import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ori from '../assets/ori.jpg';



function ComOriX() {
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
        <Card.Img variant="top" src={ori} />
        <Card.Body>
          <Card.Title>Ori and the Will of the Wisps</Card.Title>
          <Card.Text>
            El siempre estimulante Moon Studios presenta con Ori and the Will of
            the Wisps una segunda parte para el viaje tan estimulante que
            supuso. Con la misma intención por reproducir su jugabilidad 2D con
            acrobacias, combates y rompecabezas, este videojuego Ori and the
            Will of the Wisps cuenta con los mismos réditos de calidad en cuanto
            al apartado gráfico gracias a una dirección artística maravillosa y
            preciosista.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Microsoft</ListGroup.Item>
          <ListGroup.Item>Xbox/PC</ListGroup.Item>
          <ListGroup.Item>11/03/2020</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComOriX;

