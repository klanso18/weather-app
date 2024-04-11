import './App.css';
import { SearchBar } from './component/WeatherApp/SearchBar';
import WeatherApp from './component/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherApp/>
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>
      </div>
    </div>
  );
}

export default App;
