import React, { useState } from 'react'
import { QuranData } from '../../Data/quran-metadata';
function SearchSurah() {
    const [serchSureh,setSerchSureh] = useState("")
  return (
    <>
    <div>
    <input type='text' placeholder='search....' onChange={(e)=>{setSerchSureh(e.target.value)}}/>
    </div>
    <div>
        { QuranData.Suras.filter((item)=>{
                if(serchSureh === ""){
                    return item;
                }else if(item.Suras.toLowercase().includes(serchSureh.toLowerCase())){
                    return item;
                }
           }).map((item)=>{
                <div>
                    <h3>{item[4]}</h3>
                </div>
           })
        }
    </div>
    </>
  )
}

export default SearchSurah
