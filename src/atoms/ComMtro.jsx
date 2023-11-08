import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import mtro from '../assets/mtro.jpg';



function ComMtroX() {
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
      float:'right',
      marginTop:'50px',
      boxShadow: hover ? "1px 1px 10px 10px grey" : "none",
    }}>
    <Card>
        <Card.Img variant="top" src={mtro} />
        <Card.Body>
          <Card.Title>Metro: Exodus</Card.Title>
          <Card.Text>
          El shooter en primera persona vuelve a apostar por una ambientación
            postapocalítica muy cuidada, y por mezclar lugares angustiosos,
            claustrofóbicos y lúgubres con secciones mucho más abiertas.
            Apostando en mayor medida por la luz del día, Metro Exodus supone
            una apuesta muy espectacular por un apartado técnico muy poderoso, y
            por la habitual selección de criaturas y peligrosos mutantes a los
            que abatir con nuestras armas.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Deep Silver</ListGroup.Item>
          <ListGroup.Item>Xbox/PS4/PC</ListGroup.Item>
          <ListGroup.Item>15/02/2019</ListGroup.Item>
        </ListGroup>
      </Card>

     
    </div>
  );
}


export default ComMtroX;

