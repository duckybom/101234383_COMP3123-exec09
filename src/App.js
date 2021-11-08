
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.welcomeMessage}</h1>
        <h2>{props.labMessage}</h2>
        <h3>{props.studentId}</h3>
        <h4>{props.name}</h4>
        <h5>{props.gbcMessage}</h5>
      </header>
    </div>
  );
}

export default App;