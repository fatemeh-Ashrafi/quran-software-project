import React, { useState } from "react"; 
import "./MenoSearch.css"; 
import { QuranData } from "../../Data/quran-metadata"; 
import { Link } from "react-router-dom";
 
function MenoSearch() { 
    const [searchFilter, setSearchFilter] = useState(QuranData.Suras); 

    const handelChange = (e) => { 
        const value = e.target.value; 
        if (value === "") { 
            setSearchFilter(QuranData.Suras); 
        } else { 
            const filter = QuranData.Suras.filter((item) => { 
                return item.includes(value.toLowerCase()); 
            }); 
            setSearchFilter(filter); 
        } 
    };

    return ( 
         <div className="menu">
            <h3 className="title">سوره</h3> 
                <input 
                    type="text" 
                    placeholder="نام سوره را تایپ کنید ..." 
                    className="input" 
                    onChange={(e) => handelChange(e)} 
                    /> 
                    {searchFilter?.map((item, index) => {
                        return <div key={index}>
                        <Link to={`/surah/${item[4]}`} ><h4 className="item">{item[4]}</h4></Link>
                            </div> 
                    })} 
                </div>
    ); 
} 
export default MenoSearch;
