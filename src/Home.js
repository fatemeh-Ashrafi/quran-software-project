import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from './Components/Svg/IconBook';
import {Quran} from './Components/Svg/IconQuran'
import { Setting } from './Components/Svg/IconSetting';

function Home() {
  return (
    <div className='home'>
      <div className='sureh'>
       <Link to="/search" style={{ textDecoration: "none"}}>
        <div className='quran'><Quran/></div> 
        <div className='book'><Book/></div> 
        </Link>
        <div className='text'>قرآن</div>
      </div>
      <div className='setting'>
      <Link to="/setting">
      <div className='quran1'><Quran/></div>
      <div className='setting'><Setting/></div> 

        </Link> 
        <div className='set'>تنظیمات</div>
      </div>
    </div>
  )
}

export default Home
// {/* <div className='container'>
//             <Quran className="quran"/>
//             <Book className="book"/>
//             <span>قرآن</span></div> */}