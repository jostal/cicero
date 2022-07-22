
function InputButton(props) {

	return (
		<div>
		  <button
				type="button"
				className="input-button"
				onClick={() => props.onClick(props.value)}
			>{props.value}</button>
		</div>
	)
}

export default InputButton