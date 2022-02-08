import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>font-awesome cdn</h1>
      
      <a href="https://cdnjs.com/libraries/font-awesome">https://cdnjs.com/libraries/font-awesome</a>
      <i class="far fa-times-circle"></i>
      <br/>
      <a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=close&m=free">https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=close&m=free</a>  <br/>
      <a href="https://css-tricks.com/favicons-next-to-external-links/">https://css-tricks.com/favicons-next-to-external-links/</a>
      <br/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
