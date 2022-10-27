import './App.css';
import MenoSearch from './Components/Search/StyleSearch/MenoSearch';
// import ShowSurah from './Components/Search/ShowSurah/ShowSurah';
import SearchSurah from './Components/Search/SearchSurah/SearchSurah';

function App() {
  return (
    <div className="App">
      <SearchSurah/>
      <MenoSearch/>
      {/* <ShowSurah/> */}
    </div>
  );
}

export default App;
