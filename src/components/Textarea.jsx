import styled from 'styled-components';

function Textarea({text, setText}) {
	function changeHandler(e) {
		setText(e.target.value)
	}

  return <Text setText={setText} value={text} onChange={changeHandler}/>
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