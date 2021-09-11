interface Title{
  title: string,
}

export const List: React.FC<{title: string;} > = (props) => {

  return(
    <>
      <div>{props.title}</div>
      <div>リストです</div>
    </>
  )

}

/* MEMO
  * propsを受け取る
  - 受け取るpropsの型を定義する（interface, type）
  - 関数コンポーネントの型定義
    React.FC<型>
*/
