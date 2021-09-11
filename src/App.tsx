import { List } from './list';
import { Props } from './Type';

const obj: Props = {
  title: "タイトル",
  num: 1
}

const App: React.FC = () => {
  return (
    <div>
      APP
      <List {...obj}/>
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

 */
