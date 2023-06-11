import React from "react";

const TextoConEspacio = ({ texto }) => {
  return texto.split("\n").map((linea, i) => (
    <React.Fragment key={i}>
      {linea}
      <br />
    </React.Fragment>
  ));
};

export default TextoConEspacio;
