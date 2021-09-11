const LANGUAGES: string[] = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
]

export const List: React.FC = () => {

  return(
    <>
      {
        LANGUAGES.map((lang, index) => {
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
