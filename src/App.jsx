import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import WordCounterForm from './components/WordCounterForm';
import Textarea from './components/Textarea';
import ControlButton from './components/ControlButton';

function App() {
  return (
    <>
      <Header>Word Counter</Header>
      <WordCounterForm>
        <Textarea />
        <ButtonsWrapper>
          <ControlButton type={'submit'}>Count</ControlButton>
          <ControlButton type={'reset'}>Reset</ControlButton>
        </ButtonsWrapper>
      </WordCounterForm>
      <GlobalStyles />
    </>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`
export default App