import { useState } from 'react';
import styled from 'styled-components';
import Textarea from './Textarea';
import ControlButton from './ControlButton';
import { stringToValidWords } from '../utils';
import { wordCounter } from '../utils';

function WordCounterForm({ setWordsCounted }) {
  const [text, setText] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    const cleanedText = stringToValidWords(text);
    const countedWords = wordCounter(cleanedText);
    const wordsToArray = Object.entries(countedWords)
    const sortedArrayOfWords = wordsToArray.sort((a, b) => b[1] - a[1])
    const wordsLabeled = sortedArrayOfWords.map(([word, frequency]) => {
      return {
        label: word,
        frequency,
        id: crypto.randomUUID(),
      }
    })
    setWordsCounted(wordsLabeled)
    console.log(wordsLabeled)
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

