const COMPONENT = `
import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
	// 1. Use input to save the value into the text area
	const [ input, setInput ] = useState('Example text!');
	const [ copyText, setcopyText ] = useState('Copy markdown');

	// 2. Create a ref using useRef
	const textAreaRef = useRef(null);

	// 3. Create a function that copy the content of the ref
	let copyToClipboard = (e) => {
		textAreaRef.current.select();
		document.execCommand('copy');
		e.target.focus();
		setcopyText('Copied!');
	};

	return (
		<div class="outer">
			<div class="middle">
				<div class="inner">
					<h1>react copy</h1>

					<textarea
						// 4. Add the ref to the text area, source to copy
						ref={textAreaRef}
						type="text"
						onChange={({ target: { value } }) => setInput(value)}
						// 5. Add input state as a value
						value={input}
					/>
					<br />
					<button onClick={copyToClipboard}>{copyText}</button>
				</div>
			</div>
		</div>
	);
};

export default App;

`;

export { COMPONENT };
