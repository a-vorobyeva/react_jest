import { useState } from 'react';
import { randomDose } from '../utils/random.js'
import '../styles/dose.css'

const Dose = () => {
    const title = 'Drink random attraction';
    const [dose, setDose] = useState(0);

    const showDose = (event) => {
        event.preventDefault();
        setDose(randomDose(event.target[0].value));
    };

    return (
        <div className='dose'>
        <h1 className='dose__title'>{title}</h1>
        <p className='dose__desc'>Can't decide how much drinks do you want? <br /> Enter a number and get decision.</p>
        <form className='dose__form' onSubmit={showDose}>
            <input className='dose__input' placeholder='How much drinks do you want?' type="number"></input>
            <div>You should drink <strong>{dose}</strong> {dose <= 1 ? 'drink' : 'drinks'}</div>
            <button className='dose__btn'>Decide</button>
        </form>

        </div>
      )
}

export default Dose;
