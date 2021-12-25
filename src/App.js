import DisplayWeather from './core/display-weather';
import InputCity from './core/input-city';
import './styles/App.css';

function App() {
 return (
  <div className="weather-app">
   <header className="App-header">Weather App</header>
   <DisplayWeather />
   <InputCity />
  </div>
 );
}

export default App;
