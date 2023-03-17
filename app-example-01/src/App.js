import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hola Mundo ReactJS
        </h1>
        <p>
          Aprendiendo! 
        </p>
        <Person/>
        {/*<Person name="Fanny">*/}
      </header>
    </div>
  );
}

export default App;
