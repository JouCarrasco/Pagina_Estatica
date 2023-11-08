import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import cod2 from '../assets/cod2.jpg';



function ComCodX() {
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
    <Card.Img variant="top" src={cod2} />
        <Card.Body>
          <Card.Title>Call of Duty Black Ops ll</Card.Title>
          <Card.Text>
            Una de las más populares entregas de la prolífica saga. La acción de
            este Call of duty se ambienta en una supuesta Guerra Fría en pleno
            siglo XXI. La campaña permite tomar decisiones que afectan
            parcialmente, incluyéndose en este Black Ops 2 misiones Strike
            Force, aportando un montón de contenidos a su conocida fórmula
            jugable.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Activision</ListGroup.Item>
          <ListGroup.Item>Xbox</ListGroup.Item>
          <ListGroup.Item>13/11/2012 </ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComCodX;

