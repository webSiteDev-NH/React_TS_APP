import styled from 'styled-components';
import {useEffect} from 'react';
import {TabBodyContainer} from './components/tab-body-container';

// CSS
// styled-components
/*----------------------------------- */
// const Container = styled.div`
//   padding: 12px 64px ;
// `

// 要素:nth-child(値){ 内容 }
// n+2 = 2番目以降
// 1番目のリスト以外に border-top を当てる
const ListItem = styled.div`
  padding: 8px 16px ;

  &:nth-child(n+2){
    border-top: 1px solid #D9DBDE;
  }
`
/*----------------------------------- */

// 現在のlangs（言語リスト）を受け取りリスト表示する
export const List: React.FC<{langs: string[]}> = ({langs}) => {

  // Unmouting（クリーンアップ関数）
  // 第1引数： return 関数
  // DB接続など処理を終わらせておきたい時などに使うことが多い
  useEffect( () => {

    console.log('List.tsx: Mouting');

    return () => {
      console.log('List.tsx: Unmounting')
    }

  })

  return(
    <TabBodyContainer title="取り扱い言語">
      <div>
        {
          langs.map((lang, index) => {
            return <ListItem key={index} >{ lang }</ListItem>
          })
        }
      </div>
    </TabBodyContainer>
  )

}

/* MEMO
  * propsを受け取る
  - 受け取るpropsの型を定義する（interface, type）
  - 関数コンポーネントの型定義
    React.FC<型>

  * 繰り返し処理
  - 一意の設定が必要
    key={}
  - map( ( 値,  index ) => {} )
    配列を１つずつ取り出す

*/
