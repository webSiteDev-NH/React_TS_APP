import {useState} from 'react';
import styled from 'styled-components';

export const Chat: React.FC<{questions: string[]}> = ({questions}) => {

  const answers: string[]  = ['1年半', '31才', 'フットサル・サッカー', '奈良県'];

  const [answer, setAnswer] = useState<number | null>(null);

  return(
    <>
      <div>
        {
          questions.map((q, id) => {
            return <button key={id} onClick={ (e) => setAnswer(id) }>{ q }</button>
          })
        }
      </div>
      <div>
        { answer !== null ? answers[answer] : ''}
      </div>
    </>
  )
}
