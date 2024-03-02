import { useState } from 'react';
import styled from 'styled-components';
import Textarea from './Textarea';
import ControlButton from './ControlButton';
import { sanitizeText } from '../utils';
import { wordCounter } from '../utils';

function WordCounterForm() {

  const [text, setText] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    const sanitizedText = sanitizeText(text);
    const wordsArray = wordCounter(sanitizedText);
    console.log(wordsArray)
  }

  function resetHandler() {
    setText('')
  }

  return (
    <Form onSubmit={submitHandler} onReset={resetHandler}>
      <Textarea text={text} setText={setText}/>
      <ButtonsWrapper>
          <ControlButton type={'submit'}>Count</ControlButton>
          <ControlButton type={'reset'}>Reset</ControlButton>
        </ButtonsWrapper>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`

export default WordCounterForm;

