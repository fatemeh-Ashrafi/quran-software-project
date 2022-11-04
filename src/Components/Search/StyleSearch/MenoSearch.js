import React, { useState } from "react"; 
import "./MenoSearch.css"; 
import { QuranData } from "../../Data/quran-metadata"; 
import { Link } from "react-router-dom";

// import DATA from '../../Data/quran-text-emla.json'
 
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
    // const data = JsonData.slice(0,7)

    return ( 
         <>
            <h3 className="title">سوره</h3> 
             
                <input 
                    type="text" 
                    placeholder="جستجو ..." 
                    className="input" 
                    onChange={(e) => handelChange(e)} 
                    /> 

                    

                    {searchFilter?.map((item, index) => {
                        console.log(item)
                        return <div key={index}>
                            {/* <h3 key={index}>{item[4]}</h3> */}
                            <Link to={`/surah/${item[4]}`} >{item[4]}</Link>
                            {/* <p>{DATA.slice(index.id)}</p> */}
                            </div> 
                            // { {QuranData.Suras.slice(index.id)}}
                    })} 
                </>
    ); 
} 
export default MenoSearch;
