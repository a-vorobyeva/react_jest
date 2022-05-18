import { useState } from 'react';
import { getRandomAnswer, getAnswer } from '../utils/api.js'
import '../styles/main.css';

const Main = () => {
  const title = 'Have a drink?';
  const [answer, setAnswer] = useState({});

  const getAnswerRespose = async (decision = 'random') => {
    let data = await getRandomAnswer();

    if (decision === 'random') {
      data = await getRandomAnswer();
    } else {
      data = await getAnswer(decision);
    }
      
    setAnswer(data);
  };
  
  return (
    <div className="main">
      <h1 className='main__title'>{title}</h1>
      
      {
        answer.image ?
        <figure className='main__pic'>
          <img className='main__pic-img' src={answer.image} alt={answer.answer} />
          <figcaption className='main__pic-caption'>{answer.answer.toUpperCase()}</figcaption>
        </figure>
        :
        <h2 className='main__title-init'>Not sure</h2>
      }
      
      <div className='main__btns'>
        <button className='main__btn main__btn-yes' onClick={() => getAnswerRespose('yes')}>
            Yes
        </button>
        <button className='main__btn main__btn-no' onClick={() => getAnswerRespose('no')}>
            No
        </button>
        <button className='main__btn main__btn-dn' onClick={() => getAnswerRespose()}>
            Make decision for me
        </button>
      </div>
      </div>
  )
}

export default Main;
