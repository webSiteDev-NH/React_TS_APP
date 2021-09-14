import styled from 'styled-components';
import {useState, useEffect } from 'react';
import { List } from './list';
import { Form } from './form';
import { getLanguages } from './const/Type';
import { withLoading } from './hoc/withLoading';
import { Modal } from './components/modal';

// CSS
// styled-components
// コンポーネントとしてHTMLタグとCSSを適用
/*----------------------------------- */
const Header = styled.header`
  display: flex;
  justyfy-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`
const Headerul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

// コンポーネント内で使用するプロパティの型宣言しないとエラー
interface liProps {
  focused: boolean
}
// const Headerli = styled.li<liProps>`
const Headerli = styled.li<{ focused: boolean }>`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${ ({ focused }) => focused ? '2px solid #F44336' : 'none'};
`
/*----------------------------------- */

const App: React.FC<{data: string[]}> = ( {data} ) => {

  const [tab, setTab] = useState('list');

  const [langs, setLangs] = useState<string[]>(data);

  // ライフサイクル（Mounting → Updating → Unmounting）
  // useEffect( 関数 , [変数] )
  // 第１引数：関数
  /* 第２引数：変数
   * 空の配列 → 最初のみ実行される
   * 変数 → 変更があった時に実行される
  */
  // useEffect( () => {
  //   console.log('useEffect');
  //   fetchLanguages();
  // // }) 毎回
  // }, []) // 最初のみ
  // }, [langs]) // 最初 + 変数に変更があった時

  // １秒後にリストが表示される関数
//  const fetchLanguages = async () => {
//   const languages = await getLanguages();
//   setLangs(languages);
//  }

  // Formコンポーネントに渡す関数
  const addLang = (lang: string): void => {
    //スプレッド構文：配列や文字列を展開する
    setLangs([...langs, lang]) // 既存配列に新しい値を追加
    setTab('list') // 追加した時にリストに画面を変更する
  }

  return (
    <div>
      <Header>
        <Headerul>
          <Headerli focused={tab ==='list'} onClick={() => setTab('list')} >リスト</Headerli>
          <Headerli focused={tab ==='form'} onClick={() => setTab('form')}>フォーム</Headerli>
        </Headerul>
      </Header>
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );

}
export default withLoading(App, getLanguages);

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
  親 → 呼び出す側・値を渡す側
  子 → 呼び出される側・値を受け取る側（props）

 * inline css
  オブジェクトをstyleプロパティに渡す
  <div style={オブジェクト} ></div>

 * css modules
  cssを設定したファイルをimportして使う
  <div className={importしたモジュールのオブジェクト(モジュール.オブジェクト名)} ></div>
 */
