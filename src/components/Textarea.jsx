import styled from 'styled-components';

function Textarea() {
  return <Text />
}

const Text = styled.textarea`
	width: 80vw;
	height: 150px;
	resize: none;
	margin-bottom: 1rem;

@media (max-width: 600px) {
	width: 90vw;
	height: 120px;
}
`

export default Textarea