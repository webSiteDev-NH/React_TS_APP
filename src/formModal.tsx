import { useContext } from 'react';
import { Modal } from './components/modal';
import { Button } from './components/button';
import styled from 'styled-components';
import { ThemeContext, THEMES } from './contexts/ThemeContext';

const Container = styled.div`
  border-radius: 10px;
  padding: 24px 36px;
  width: 240px;
  color: ${ ({ theme }) => theme.color };
  background-color: ${ ({ theme }) => theme.backgroundColor };
  border: ${ ({ theme }) => theme === THEMES.dark ? '1px solid white' : 'none' };
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

// Modal：背面
export const FormModal: React.FC<buttonClick> = ({confirm, cancel}) => {

  const [theme] = useContext(ThemeContext);

  return (
    <Modal>
      <Container theme={theme}>
        <div>本当に作成しますか？</div>
        <ButtonWrappr>
          <Button onClick={cancel}>Cancal</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrappr>
      </Container>
    </Modal>
  )
}
