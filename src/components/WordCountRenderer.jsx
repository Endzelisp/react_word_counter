import styled from "styled-components";

function WordCountRenderer({frequency, children}) {
  return (
    <p><Count>{frequency}</Count>{children}</p>
  )
}

const Count = styled.span`
  font-weight: 600;
  font-size: 1rem;
  padding-inline-end: 16px;
`

export default WordCountRenderer;