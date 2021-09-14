import {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const HintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`

const HintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #757575;
`

const PopupContainer = styled.div`
  position: absolute;
  left: 88%;
  bottom: 12px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  width: 140px;
`

export const Hint = () => {
  const [showPopup, setShowPopup] = useState(false);

  // 使用するHTMLオブジェクトの型を設定する
  // ref属性にrefオブジェクトを設定する
  const ref = useRef<HTMLDivElement>(null);

  // ref.current:設定した要素を取得できる
  useEffect(() => {
    if(ref.current) ref.current.focus();
  }

  )

  return(
    <HintContainer>
      <HintInner onClick={() => setShowPopup(true)}>
        ?
      </HintInner>
      {
        showPopup &&
        <PopupContainer ref={ref} onBlur={() => setShowPopup(false)} tabIndex={0}>
          言語の名前です
        </PopupContainer>
      }
    </HintContainer>
  )
}
