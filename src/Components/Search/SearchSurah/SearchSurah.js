import React, { useState } from 'react';
import { QuranData } from '../../Data/quran-metadata';
export default function SearchSurah() {
  const [filterSearch,setFilterSearch] =useState("")
  const data = QuranData.Suras
  console.log(data);
  return (
    <>
    <div>
      <input type="text" placeholder='search...'
      onChange={(e)=>{setFilterSearch(e.target.value)}}/>
    </div>
    <div>
      {console.log(filterSearch)}
      {data.filter((item)=>{
            if (filterSearch === "") {
              return item;
            } else if(item. includes(filterSearch.toLowerCase())) {
              return item;
            }
            }).map((item, index) => (
                <li key={index}>{item[4]}</li>
            ))
      }    
    </div>
    
      
    </>
  )
}



//  const [filter,setFilter] = useState('');

//     const SearchText = (event)=>{
//         setFilter(event.target.value)
//     }

//     const dataSearch = data.filter((item)=>{
//         return Object.keys(item).some(key =>
//             item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//             )
//     })
////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { QuranData } from '../../Data/quran-metadata';
// export default function SearchSurah() {
//   const list = QuranData.Suras;
//   console.log(list);
//   const [filterSearch,setFilterSearch]= useState(list);
//   const handelFilterSearch = (event)=>{
//     const query = event.target.value;
//     let updateList = [...list];
//     updateList = updateList.filter((item)=>{
//       return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     })
//     setFilterSearch(updateList);
//   };
//   return (
//     <div className="App">
//       <div className="search-header">
//         <div className="search-text">Search:</div>
//         <input id="search-box" onChange={handelFilterSearch} />
//       </div>
//       <div id="item-list">
//         <ol>
//           {filterSearch.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// 
////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { QuranData } from '../../Data/quran-metadata';
// function SearchSurah() {
//     const [filterSearch,setFilterSearch] = useState('');

//     const handelSearch =()=>{
//       let data = QuranData.Suras;

//       if (filterSearch) {
//          data= QuranData.Suras .filter((item)=>{
//            item.Suras[4].toLowerCase().includes(filterSearch)
//         })
//       }
//       return data;
//     }
//   return (
//     <>
//       <div>
//         <input type='text' placeholder='search'
//         onChange={(e)=>{setFilterSearch(e.target.value)}}/>
//       </div>
//       <div>
//         {handelSearch().map((item,index)=>( 
//           <li key={index}>{item[4]}</li>
//         ))}
        
//       </div>
//////////////////////////////////////////////////////////////////////////////
      
      // {/* <div>
      //   {
      //      QuranData.Suras.filter((item)=>{
      //       if (filterSearch === ""){
      //           return item;
      //       }else if(item.Suras[4].toLowerCase().includes(filterSearch.toLowerCase())){
      //           return item;
      //       }
      //      }).map((item,index)=>(
      //       <li key={index}>{item[4]}</li>
      //   ))
      //   }
      // </div> */}
//     </>
//   )
// }
// export default SearchSurah
///////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react'
// import { QuranData } from '../../Data/quran-metadata'

// function SearchSurah() {

//     const [filterSearch,setFilterSearch] =new useState(QuranData)

//     const filterSureh = (event)=>{

//         const query = event.target.value;
//         let updateList = [...QuranData];
//         updateList = updateList.filter((item)=>{
//             return item.toLowerCase().indexOf(query.toLowerCase() !== -1)
//         })
//         setFilterSearch(updateList)
//     }


//   return (
//     <div className='App'>
//       <div>
//         <input onChange={filterSureh}/>
//       </div>

//       <div>
        // <ol>
        //     {filterSearch.Suras.map((item,index)=>(
        //         <li key={index}>{item[4]}</li>
        //     ))}
        // </ol>

//       </div>
//     </div>
//   )
// }

// export default SearchSurah
