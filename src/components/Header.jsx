import styled from "styled-components";

function Header({ children }) {
  return (
    <HeaderWrapper>
      <Title>{children}</Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 24px 0;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

export default Header