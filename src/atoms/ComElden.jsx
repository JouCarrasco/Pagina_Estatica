import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import elden from '../assets/elden.jpg';



function ComEldenX() {
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
      float: 'right',
      boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
    }}>
    <Card>
        <Card.Img variant="top" src={elden} />
        <Card.Body>
          <Card.Title>ELDEN RING</Card.Title>
          <Card.Text>
            Elden Ring es un juego de mundo abierto, que presumiblemente sigue a
            rajatabla los mandamientos de la serie creada por Hidetaka Miyazaki,
            y que está ambientado en la fantasía oscura occidental y que
            proponen una mirada más profunda del RPG en tercera persona.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Bandai Namco</ListGroup.Item>
          <ListGroup.Item>Xbox/PS5/PC/Nintendo Switch</ListGroup.Item>
          <ListGroup.Item>25/02/2022</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComEldenX;

