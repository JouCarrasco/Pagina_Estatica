import React from "react";
import Badge from "react-bootstrap/Badge";
import '../atoms/Sub.css';

function Subdos() {
  return (
  <div className="bad">
    <Badge  bg='light'>
        <h1 className="subbb">Menciones honorificas</h1>
      </Badge>
  </div>
  );
}

export default Subdos;


/*import React, { useState } from "react";
import { Box } from "@mui/material";

const App = () => {
  const [color, setColor] = useState("red");

  return (
    <Box
      color={color}
      style={{
        backgroundColor: "gray",
      }}
    >
      Contenido de la caja
    </Box>
  );
};

export default App;*/
