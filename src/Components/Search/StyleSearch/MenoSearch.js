import React, { useState } from "react"; 
import "./MenoSearch.css"; 
import { QuranData } from "../../Data/quran-metadata"; 
import { Link } from "react-router-dom";
import { Text } from "../../Svg/IconText";
import { Number } from "../../Svg/IconNumber";
import { Play } from "../../Svg/IconPlay";
 
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
            <div className="textheader"> <Text/></div>
            <h3 className="title">سوره</h3> 
                <input 
                    type="text" 
                    placeholder="نام سوره را تایپ کنید ..." 
                    className="input" 
                    onChange={(e) => handelChange(e)} 
                    /> 

                   
                    {searchFilter?.map((item,index) => {
                        return(
                            <div className="surah" >
                                    
                                <div >
                                <Link style={{textDecoration: 'none'}} to={`/surah/${item[4]}`} >
                                        <div className="contaner">
                                            <div>
                                            <div className="play"><Play/></div>
                                            </div>
                                                <div className="item">
                                                    {item[4]}

                                                    <div className="a1">
                                                    <span className="countsourh">{index+=1}</span>
                                                    

                                                    <div className="number"><Number/></div>
                                                </div>
                                            </div>
                                        </div>  
                                </Link>
                               </div>
                            </div>   
                        )
                    })} 
                </div>
    ); 
} 
export default MenoSearch;
