import React from 'react';
import Badge from "react-bootstrap/Badge";
import "./Text.css";

function Text() {
  return (
    <div>
      <Badge  bg='warning' className="bad">
        <h1 className="ache">GAME HUB</h1>
        <h3 className="ache">Los juegos más populares de la última decada</h3>
      </Badge>
    </div>
  );
}

export default Text;
