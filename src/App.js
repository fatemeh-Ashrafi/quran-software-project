import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MenoSearch from './Components/Search/StyleSearch/MenoSearch';
import SearchSurah from './Components/Search/SearchSurah/SearchSurah';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<MenoSearch/>}/>
            <Route path='/surah/:id' element={<SearchSurah/>}/>
       
        </Routes>
    </BrowserRouter>
  );
}

export default App;
