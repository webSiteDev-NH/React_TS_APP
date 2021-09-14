import styled from 'styled-components';

// CSS
// styled-components
// コンポーネントとしてHTMLタグとCSSを適用
/*----------------------------------- */
const Container = styled.header`
  display: flex;
  justyfy-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`
const Headerul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

// コンポーネント内で使用するプロパティの型宣言しないとエラー
interface liProps {
  focused: boolean
}
// const Headerli = styled.li<liProps>`
const Headerli = styled.li<{ focused: boolean }>`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${ ({ focused }) => focused ? '2px solid #F44336' : 'none'};
`
/*----------------------------------- */

export const Header: React.FC<{tab: string; setTab(param:string): void;}> = ({tab, setTab}) => {
  return(
    <Container>
      <Headerul>
        <Headerli focused={tab ==='list'} onClick={() => setTab('list')} >リスト</Headerli>
        <Headerli focused={tab ==='form'} onClick={() => setTab('form')} >フォーム</Headerli>
      </Headerul>
    </Container>
  )
}
