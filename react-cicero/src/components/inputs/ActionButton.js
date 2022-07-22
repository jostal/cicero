
function ActionButton(props) {

	return (
		<div>
			<button
				type="button"
				className="input-button"
				onClick={() => props.action()}
			>{props.value}</button>
		</div>
	)
}

export default ActionButton