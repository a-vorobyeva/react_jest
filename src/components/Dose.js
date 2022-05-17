import { useState } from 'react';
import { getRandomDose } from '../utils/random.js'
import { rememberDose } from '../utils/remember.js';
import '../styles/dose.css'

const Dose = () => {
    const title = 'Drink random attraction';
    const [dose, setDose] = useState(0);

    const showDose = (event) => {
        event.preventDefault();
        setDose(getRandomDose(event.target[0].value));
    };

    return (
        <div className='dose'>
            <h1 className='dose__title'>{title}</h1>
            <p className='dose__desc'>Can't decide how much drinks do you want? <br /> Enter a number and get dose.</p>
            <form className='dose__form' onSubmit={showDose}>
                <input className='dose__input' placeholder='How much drinks do you want?' type="number"></input>
                <div>You should get <strong>{dose}</strong> {dose <= 1 ? 'drink' : 'drinks'}</div>

                <div className='dose__btns'>
                    <button className='dose__btn dose__btn-decide'>Decide</button>
                    <button className='dose__btn dose__btn-storage' type='button' onClick={() => rememberDose(dose)}>Remember</button>
                </div>
            </form>
        </div>
      )
}

export default Dose;
