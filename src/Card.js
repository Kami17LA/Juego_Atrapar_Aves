import casaPajaros from "./images/casaPajaros.png"

export default function Card({bird}){

    const clickOnCard = (e) => {
        e.currentTarget.style.transform = "rotateY(180deg)";
       }

	return (
	<div className='card' onClick={clickOnCard}>
		<div className='face birds'><img src={bird} alt='bird_image'></img></div>
		<div className='face bird_house'><img src={casaPajaros} alt='bird_house'></img></div>
	</div>
	)
}