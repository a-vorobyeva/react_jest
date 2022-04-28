import { useEffect, useState } from 'react';
import { getRandomAnswer } from '../utils/api.js'
import '../styles/main.css';

const Main = () => {
  const title = 'Have a drink?';

  const [answer, setAnswer] = useState({});

  const getAnswerRespose = async () => {
      const data = await getRandomAnswer();
      setAnswer(data)
  };
  
  useEffect(() => getAnswerRespose, []);
  
  return (
    <div className="main">
      <h1 className='main__title'>{title}</h1>
      
      {
        answer.image ?
        <figure className='main__pic'>
          <img className='main__pic-img' src={answer.image} alt={answer.answer} />
          <figcaption className='main__pic-caption'>{answer.answer}</figcaption>
        </figure>
        :
        <h2 className='main__title-init'>I am not sure</h2>
      }
          
      <button className='main__btn' onClick={getAnswerRespose}>
          Decide
      </button>
      </div>
  )
}

export default Main;
