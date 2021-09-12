import {useState} from 'react';
import { List } from './list';
import { Form } from './form';
import { LANGUAGES } from './const/Type';

const App = () => {

  const [tab, setTab] = useState('list');

  const [langs, setLangs] = useState(LANGUAGES);

  // Formコンポーネントに渡す関数
  const addLang = (lang: string): void => {
    console.log(lang)
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')} >リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {
        tab === 'list' ? <List /> : <Form onAddLang={addLang}/>
      }
    </div>
  );

}
export default App;

/* MEMO
  * jsxとは
  HTMLのような形式で記法できるJavaScriptの拡張言語
  コンパイル時にReact構文に変換される

 * tsxとは
  TypeScriptを使用する際の拡張子

 * React構文
  React.createElement(
    'button',
    { className: 'btn'},
    'クリック '
  )

 * jsx記法
  <buttn className={'btn'}>
    クリック
  </button>

  * ルール
  - キャメルケース
  - 変数使用の際は {}
  - 閉じタグ必須
  - 階層構造でないとエラーとなる
    <React.Fragment></React.Fragment>：HTMLタグと出力せずに階層構造をつくれる
    省略形：<></>

 * コンポーネントの関係
  親 → 値を渡す側
  子 → 値を受け取る側（props）

 */
