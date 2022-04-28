import { useState } from 'react';
import { randomDose } from '../utils/random.js'
import '../styles/dose.css'

const Dose = () => {
    const title = 'How much drinks will you get';
    const [dose, setDose] = useState(0);

    const showDose = (event) => {
        event.preventDefault();
        setDose(randomDose(event.target[0].value));
    };

    return (
        <div className='dose'>
        <h1 className='dose__title'>{title}</h1>
        <form className='dose__form' onSubmit={showDose}>
            <input className='dose__input' placeholder='Start from...' type="number"></input>
            <div>{dose} {dose <= 1 ? 'drink' : 'drinks'}</div>
            <button className='dose__btn'>Get</button>
        </form>

        </div>
      )
}

export default Dose;
