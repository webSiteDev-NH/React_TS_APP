import ReactDom from 'react-dom';
import styled from 'styled-components';

// document.getElementByIdは (HTMLElement | null) union型を返す
const modalRoot: (HTMLElement | null)  = document.getElementById("modal-root");

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, .5);
`

// Portal:任意の場所に表示できる
// 第1引数：tsx
// 第2引数：対象親要素
// 第2引数に null はエラーとなるので ! をつける
// ! = Non-null assertion operator(非nullアサーション演算子)：nullでは無いと明示する
export const Modal: React.FC = (props) => {
  return ReactDom.createPortal(
    <Container>
      { props.children }
    </Container>,
    modalRoot!,
  )
}
