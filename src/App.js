
import './App.css';
import campLogo from './imagenes/camp-logo.png';
import Button from './Components/Button';
import Pantalla from './Components/Pantalla';
import ButtonClear from './Components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
      setInput(input + val);

    };


    const calcularResultado = () => {
      if (input) {
      setInput(evaluate(input));
      } else {
        alert("ingrese valores para realizar los calculos");
      }
    };


  return (
    <div className="App">
      <div className="camp-logo-contenedor">
        <img 
          src={campLogo}
          className="camp-logo"
          alt="Logo de camp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClear={() => setInput('')}>
          Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
