import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import { List } from './list';
import { Form } from './form';
import { getLanguages } from './const/Type';
import { withLoading } from './hoc/withLoading';
import { Modal } from './components/modal';
import { Header } from './Header';
import { ThemeContext } from './contexts/ThemeContext'

const Container = styled.div`
  height: 100%;
  color: ${ ({ theme }) => theme.color };
  background-color: ${ ({ theme }) => theme.backgroundColor };
`


const App: React.FC<{data: string[]}> = ( {data} ) => {

  const [tab, setTab] = useState('list');

  const [langs, setLangs] = useState<string[]>(data);

  // AppContainerで Provider された value を使用
  const [theme] = useContext(ThemeContext);

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
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </Container>
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
  親 → 呼び出す側・値を渡す側
  子 → 呼び出される側・値を受け取る側（props）

 * inline css
  オブジェクトをstyleプロパティに渡す
  <div style={オブジェクト} ></div>

 * css modules
  cssを設定したファイルをimportして使う
  <div className={importしたモジュールのオブジェクト(モジュール.オブジェクト名)} ></div>
 */
