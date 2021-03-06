import {useState} from 'react';
import styled from 'styled-components';
import {Button} from './components/button';
import {TabBodyContainer} from './components/tab-body-container';
import { FormModal } from './formModal';
import { Hint } from './hint';

// CSS
// styled-components
/*----------------------------------- */
// const Container = styled.div`
//   padding: 12px 64px ;
// `

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
  margin-bottom: 10px;
`

// コンポーネントを引き継いで拡張できる
// ボタンなど拡張する事が多い時に便利
const FormButton = styled(Button)`
  width: 120px;
`
/*----------------------------------- */

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

  const [showModal, setShowModal] = useState(false);

  // onAddLang(text)：追加ボタン押下 → 入力項目(text)を言語リストに追加 → リストタブに切り替え
  // 参照元：APP.tsx内の addLang(param: string): void
  const submitForm = (event: any) => {
    event.preventDefault(); //ページ遷移を止める
    // onAddLang(text);
    setShowModal(true);
  }

  return(
    <TabBodyContainer title="新しい言語の追加">
      <form onSubmit={submitForm}>
        <div>
          <Label>言語</Label>
          <Input
            type="text"
            value={text}
            onChange={ (e) => { setText( e.target.value ) } }
          />
          <Hint />
        </div>
        <div>
          <FormButton>追加</FormButton>
        </div>
      </form>
      {
        // showModal = true の時にモーダル表示
        showModal &&
        <FormModal
          confirm={ () => onAddLang(text) }
          cancel={ () => setShowModal(false) }
        />

      }
    </TabBodyContainer>
  )
}
