import React, { useState, useRef } from 'react';
import { COMPONENT } from './Component';

const style = {
	outer: {
		display: 'table',
		position: 'absolute',
		top: '0',
		left: '0',
		height: '100%',
		width: '100%',
		alignContent: ': center'
	},

	middle: {
		display: 'table-cell',
		verticalAlign: 'middle'
	},

	inner: {
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '400px'
		/*whatever width you want*/
	}
};

const CopyExample = () => {
	// 1. Use input to save the value into the text area
	const [ input, setInput ] = useState(COMPONENT);
	const [ copyText, setcopyText ] = useState('Copy component');

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
		<div style={style.outer}>
			<div style={style.middle}>
				<div style={style.inner}>
					<h1>react-hook-copy example</h1>

					<textarea
						// 4. Add the ref to the text area, source to copy
						ref={textAreaRef}
						type="text"
						// 7. Use the setInput function to set input value
						onChange={({ target: { value } }) => setInput(value)}
						// 6. Add input state as a value
						value={input}
						rows="15"
						cols="50"
					/>
					<br />
					<button onClick={copyToClipboard}>{copyText}</button>
				</div>
			</div>
		</div>
	);
};

export default CopyExample;
