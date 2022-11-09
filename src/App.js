import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MenoSearch from './Components/Search/StyleSearch/MenoSearch';
import SearchSurah from './Components/Search/SearchSurah/SearchSurah';
import Home from './Home';
import Theme from './Components/Setting/Theme/Theme';
// import FontSize from './Components/Setting/FontSize/Feature/FontSize';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<MenoSearch/>}/>
            <Route path='/surah/:id' element={<SearchSurah/>}/>
            <Route path='/setting' element={<Theme/>}/>
            {/* <Route path='/setting' element={<FontSize/>}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
