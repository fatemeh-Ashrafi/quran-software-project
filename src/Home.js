import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='sureh'>
       <Link to="/search"><button>قرآن</button></Link>
      </div>
      <div className='setting'>
      <Link to="/setting"><button>تنظیمات</button></Link> 
      </div>
    </div>
  )
}

export default Home
