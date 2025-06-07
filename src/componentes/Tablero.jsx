import React from 'react';
import Casilla from './Casilla';

const Tablero = ({ casillas, manejarClick }) => {
  return (
    <div className="tablero">
      {casillas.map((valor, i) => (
        <Casilla key={i} valor={valor} alClickear={() => manejarClick(i)} />
      ))}
    </div>
  );
};

export default Tablero;