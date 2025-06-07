import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Tablero from './componentes/Tablero';

const App = () => {
  const [casillas, setCasillas] = useState(Array(9).fill(null));
  const [esTurnoX, setEsTurnoX] = useState(true);

  const ganador = calcularGanador(casillas);
  const estado = ganador
    ? `Ganó ${ganador}`
    : casillas.every(Boolean)
    ? 'Empate'
    : `Turno de ${esTurnoX ? 'X' : 'O'}`;

  const manejarClick = (i) => {
    if (casillas[i] || ganador) return;

    const nuevasCasillas = casillas.slice();
    nuevasCasillas[i] = esTurnoX ? 'X' : 'O';
    setCasillas(nuevasCasillas);
    setEsTurnoX(!esTurnoX);
  };

  const reiniciar = () => {
    setCasillas(Array(9).fill(null));
    setEsTurnoX(true);
  };

  return (
    <div className="app">
      <Header />
      <div className="estado"><strong>{estado}</strong></div>
      <Tablero casillas={casillas} manejarClick={manejarClick} />
      <button className="boton-reiniciar" onClick={reiniciar}>Reiniciar</button>
      <p><strong>@Lucas Jonas Diaz</strong></p>
    </div>
  );
};

const calcularGanador = (casillas) => {
  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of combinaciones) {
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return casillas[a];
    }
  }
  return null;
};

export default App;