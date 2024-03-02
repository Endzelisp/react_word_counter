import styled from "styled-components";

function ResultsWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`;

export default ResultsWrapper;