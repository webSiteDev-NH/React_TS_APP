import {useEffect} from 'react';

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
    <>
      {
        langs.map((lang, index) => {
          return <div key={index} >{ lang }</div>
        })
      }
    </>
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
