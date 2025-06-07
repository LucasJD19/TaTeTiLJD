import React from 'react';

const Casilla = ({ valor, alClickear }) => {
  return (
    <button className="casilla" onClick={alClickear}>
      {valor}
    </button>
  );
};

export default Casilla;