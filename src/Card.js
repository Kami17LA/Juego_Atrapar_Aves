import casaPajaros from "./images/casaPajaros.png"

export default function Card({bird}){

	return (
	<div className='card'>
		<div className='birds'><img src={bird} alt='bird_image'></img></div>
		<div className='bird_house'><img src={casaPajaros} alt='bird_house'></img></div>
	</div>
	)
}