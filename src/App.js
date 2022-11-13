import "./App.css";
import { Routes, Route } from "react-router-dom";
import MenoSearch from "./Components/Search/StyleSearch/MenoSearch";
import SearchSurah from "./Components/Search/SearchSurah/SearchSurah";
import Home from "./Home";
import Setting from "./Components/Setting/Setting";


function App() {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<MenoSearch />} />
            <Route path="/surah/:id" element={<SearchSurah />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
        
    );
}

export default App;
