import './Navbar.scss'

function Navbar() {

	return (
		<nav>
			<div className="navbar">
				<ul>
					<li>
						<a href="/chores">Chores</a>
					</li>
					<li>
						<a href="/expenses">Expenses</a>
					</li>
				</ul>
			</div>
			<hr />
		</nav>
	)
}

export default Navbar