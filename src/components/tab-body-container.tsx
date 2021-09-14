import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 64px;
`
interface Title {
  title: string;
  children?: React.ReactNode;
}
export const TabBodyContainer: React.FC<Title> = ({title, children}) => {

  return(
    <Container>
      <h4>{title}</h4>
      {children}
    </Container>
  )
}
