import {useState} from 'react';

/* 親コンポーネントから関数を受け取る */
// 関数の引数の型と返り値を定義する
interface FunctionProps {
  onAddLang(param: string): void;
}

// 引数を受け取る際は React.FC<{オブジェクト}> を使用する
// 子要素を取得できる → children?: React.ReactNode
// <>（ジェネリックス）：抽象的な型引数(オブジェクトなど)
// 仮引数はオブジェクト
// → 使用法：仮引数.プロパティ
// 仮引数の分割代入：{プロパティ名}
// → 使用法：プロパティ

// 定義した(interface, type)パターン
export const Form: React.FC<FunctionProps> = ({onAddLang}) => {
// 直接定義したパターン
// export const Form: React.FC<{onAddLang(param: string): void}> = (props) => {
// propsを分割代入したパターン
// export const Form: React.FC<{onAddLang(param: string): void}> = ({onAddLang}) => {

  const [text, setText] = useState('');

  const submitForm = (event: any) => {
    event.preventDefault(); //ページ遷移を止める
    onAddLang(text);
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
