import React from 'react';
import './Setting.css'
import FontSize from './FontSize/Feature/FontSize'
import Theme from "./Theme/Theme"

function Setting() {
  return (
    <div className='menusetting'>

      <div className='fontsize'>
        <FontSize/>
      </div>
      
      <div className='theme'>
        <Theme/>
      </div>
    </div>
  )
}

export default Setting
