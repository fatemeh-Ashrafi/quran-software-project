import React from 'react';
import './MenoSearch.css'

function MenoSearch() {
  return (
    <div className='App'>
      <div className='option-Search'>
          <h1>سوره</h1>
      </div>
      <div className='input-search'>
        <input type="text" style={{"width":"160px","height":"30px"}}  placeholder='نام سوره تایپ کنید ...'/>
      </div>
    </div>
  )
}

export default MenoSearch
