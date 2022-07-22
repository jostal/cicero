import { useState, useEffect } from 'react'
import PIN from '../../components/auth/PIN'

function Expenses() {
	const [user, setUser] = useState(null)

	useEffect(() => {

	}, [])

	const verifyUser = (userPIN) => {
		console.log(userPIN)
	}

	return (
		<div>
			{user === null && (
				<PIN
					onPINEnter={verifyUser}
				/>
			)}
		</div>
	)
}

export default Expenses