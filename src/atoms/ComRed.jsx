import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import red2 from '../assets/red2.jpg';



function ComRedX() {
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
      display:'block',
      float:'right',
      boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
    }}>
    <Card>
        <Card.Img variant="top" src={red2} />
        <Card.Body>
          <Card.Title>Red Dead Redemption 2</Card.Title>
          <Card.Text>
            Es un videojuego de mundo abierto ambientado en el corazón de
            América en el año 1899. La historia de Arthur Morgan, (no Nate
            Harlow héroe de Red Dead Revolver, ni tampoco John Marston, el
            protagonista del Redemption original) es una aventura western con
            una extraordinaria atmósfera y ambientación muy cuidada y centrada
            en la naturaleza.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rockstar Games</ListGroup.Item>
          <ListGroup.Item>Xbox/PS4/PC</ListGroup.Item>
          <ListGroup.Item>05/11/2019</ListGroup.Item>
        </ListGroup>
      </Card>
     
    </div>
  );
}


export default ComRedX;

