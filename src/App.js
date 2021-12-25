import DisplayWeather from './core/display-weather';
import InputCity from './core/input-city';
import './styles/App.css';

function App() {
 return (
  <div className="App">
   <header className="App-header">Weather App</header>
   <InputCity />
   <DisplayWeather />
  </div>
 );
}

export default App;
