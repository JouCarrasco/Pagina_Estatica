import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import god from '../assets/god.jpg';



function ComGodX() {
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
        <Card.Img variant="top" src={god} />
        <Card.Body>
          <Card.Title>God of War</Card.Title>
          <Card.Text> 
            Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en busca
            de respuestas mientras las fuerzas asgardianas se preparan para la
            batalla profetizada que supondrá el fin del mundo. Por el camino,
            explorarán paisajes míticos increíbles y se enfrentarán a temibles
            enemigos, como monstruos y dioses nórdicos.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>SIE Santa Monica Studio</ListGroup.Item>
          <ListGroup.Item>PS4</ListGroup.Item>
          <ListGroup.Item>20/04/2018</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComGodX;

