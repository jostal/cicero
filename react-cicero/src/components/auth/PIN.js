import { useState, useEffect } from 'react'
import InputButton from '../inputs/InputButton'
import ActionButton from '../inputs/ActionButton'

import './PIN.scss'

const inputs = [
	{
		action: 'input',
		content: 1
	},
	{
		action: 'input',
		content: 2
	},
	{
		action: 'input',
		content: 3
	},
	{
		action: 'input',
		content: 4
	},
	{
		action: 'input',
		content: 5
	},
	{
		action: 'input',
		content: 6
	},
	{
		action: 'input',
		content: 7
	},
	{
		action: 'input',
		content: 8
	},
	{
		action: 'input',
		content: 9
	},
	{
		action: 'input',
		content: 0
	},
	{
		action: 'delete',
		content: 'X'
	},
]

function PIN() {
	const [PINInput, setPINInput] = useState([]);
	const [showOverlay, setShowOverlay] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (PINInput.length > 3) {
			setShowOverlay(true);
			fetch(`${process.env.API_SERVER}/authenticate-user`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userPIN: PINInput
				})
			}).then(res => res.json())
				.then(data => {
					console.log(data)
					setError(null);
					setShowOverlay(false);
				})
				.catch(err => {
					setError(err);
					setShowOverlay(false);
					setPINInput([])
				})
		}
	}, [PINInput]);


	return (
		<div className="overlay">
			{showOverlay && (
				<div className="overlay-2"></div>
			)}
			<div className="pin-popup">
				<h1>Enter Your 4 Digit PIN</h1>
				{error && (
					<p className="error">Error: {error.message}</p>
				)}
				<div className="pin-form">
					<div className="pin-input">
						<span>{PINInput}</span>
					</div>
					<div className="pin-pad">
						{inputs.map(input => {
							if (input.action === 'input') {
								return (
									<InputButton
										value={input.content}
										onClick={(value) => {
											const userInput = [...PINInput]
											userInput.push(value)
											setPINInput(userInput)
										}}
									/>
								)
							}
							if (input.action === 'delete') {
								return (
									<ActionButton
										value={input.content}
										action={() => {
											const userInput = [...PINInput]
											userInput.pop()
											setPINInput(userInput)
										}}
									/>
								)
							}
						})}
					</div>
				</div>
			</div>
		</div>

	)
}

export default PIN