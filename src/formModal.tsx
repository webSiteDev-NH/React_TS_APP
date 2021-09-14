import { Modal } from './components/modal';
import { Button } from './components/button';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  padding: 24px 36px;
  width: 240px;
  background-color: white;
`

const ButtonWrappr = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`
// 受け取るのは無名関数
// 関数内の処理で定義するとエラーとなる
// 関数を実行する関数
interface buttonClick {
  // confirm(param: string[]): void;
  // cancel(param: boolean): void;
  confirm(): void;
  cancel(): void;
}

export const FormModal: React.FC<buttonClick> = ({confirm, cancel}) => {
  return (
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrappr>
          <Button onClick={cancel}>Cancal</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrappr>
      </Container>
    </Modal>
  )
}
