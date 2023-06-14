import './App.css';
import React from 'react';
import { Container } from 'react-grid-system';


function App() {
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
				<p>10 min</p>
			</div>
		</header>

    <Container className='box-container'>
    </Container>
    </>
  );
}

export default App;
