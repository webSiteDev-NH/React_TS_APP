import {useState} from 'react';

export const Form = () => {

  const [text, setText] = useState('');

  const submitForm = (event: any) => {
    event.preventDefault(); //ページ遷移を止める
    console.log(text);
  }

  return(
    <>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            value={text}
            onChange={ (e) => { setText( e.target.value ) } }
          />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </>
  )
}
