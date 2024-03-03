import styled from "styled-components";
import close from "../assets/close.png"

function WordCountRenderer({frequency, children}) {
  return (
    <Wrapper>
      <p>{children} <Count>{frequency}</Count></p>
      <DeleteBtn>
        <img src={close} alt="close button" />
      </DeleteBtn>
    </Wrapper>
  )
}

const Count = styled.span`
  font-weight: 600;
  font-size: 1rem;
  padding-inline-end: 16px;
`

const DeleteBtn = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  max-width: 300px;
  border: 1px solid hsl(0, 0%, 50%);
  border-radius: 5px;

  &:hover {
    background-color: hsl(0, 0%, 90%);
    border: 1px solid hsl(0, 0%, 70%);
  }
`;

export default WordCountRenderer;