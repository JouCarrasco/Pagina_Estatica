import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import mk1 from "../assets/mk1.jpg";

import {db} from '../db/database'
const ComMk1 = (props) => {
  const [hover, setHover] = useState(false);
 // console.log(db.description);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  {console.log(db.description[0].name)}
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "28rem",
        boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
      }}
    >
      <Card>
        <Card.Img variant="top" src={mk1} />
        <Card.Body>
          <Card.Title>MORTAL KOMBAT 1</Card.Title>
          <Card.Text>
            Elden Ring es un juego de mundo abierto, que presumiblemente sigue a rajatabla los mandamientos de la serie creada por Hidetaka Miyazaki, y que está ambientado en la fantasía oscura occidental y que proponen una mirada más profunda del RPG en tercera persona.
          </Card.Text>
        
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>NetherRealm Studios</ListGroup.Item>
          <ListGroup.Item>Xbox/PS5/PC/Nintendo Switch</ListGroup.Item>
          <ListGroup.Item>19/09/2023</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ComMk1;
