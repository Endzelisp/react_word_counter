import styled from 'styled-components'

function WordCounterForm({children}) {

  function submitHandler(e) {
    e.preventDefault()
  }

  return (
    <Form onSubmit={submitHandler}>{children}</Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WordCounterForm;

