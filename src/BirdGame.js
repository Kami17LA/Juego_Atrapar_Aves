import './App.css';
import React from 'react';
import { Container } from 'react-grid-system';
import aveAzul from "./images/aveAzul.png";
import aveRosa from "./images/aveRosa.png";
import Card from './Card';
import { useState, useEffect } from "react"


function App() {

  // Crear cartas 
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const cartas = numbers.map((number) => {
    const esPar = number % 2 === 0;
    const ave = esPar ? aveRosa : aveAzul;

    return (
      <Card 
        key={numbers}
        bird= {ave}
      />
   
    );
  });

  // Tiempo restante
  const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      if (seconds === 60) {
        window.location.reload();
      }
    }, [seconds]);


  return (
    <>
    <header className="score-box">
			<div >
				<p>Aves rosas</p>
				<p>1</p>
			</div>

			<div>
				<p>Aves azules</p>
				<p>2</p>
			</div>

			<div>
				<p>Tiempo restante</p>
				<p>{seconds}</p>
			</div>
		</header>

    <Container className='box-container'>
     {cartas}
    </Container>
    </>
  );
}

export default App;
