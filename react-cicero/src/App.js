import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Where would you like to go?</h1>
      <div className="nav-landing">
        <ul>
          <li>
            <Link to="/chores">Chores</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
