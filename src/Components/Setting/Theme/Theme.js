import './Theme.css'
import React, { createContext, useState } from 'react';
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext("light");

function Theme() {

    const [theme,setTheme] =useState('light');

    const handleTheme =()=>{
        setTheme((item)=> (item === "light" ? "dark" : "light"))
    }

  return (
    <ThemeContext.Provider value={{theme , handleTheme}}>
    <div className='App' id={theme}>
        <div className='switch'>
            <ReactSwitch onChange={handleTheme} checked={theme==="dark"}/>
        </div>
    </div> 
    </ThemeContext.Provider>
  )
}

export default Theme
