import React from 'react'
import {useNavigate} from 'react-router-dom'
import tamil from './images/tamil.png'
import telugu from './images/telugu.png'
import hindi from './images/hindi.jpeg'
import './Home.css'
import Tamil from './Movie/Tamil'
import Telugu from './Movie/Telugu'
import Hindi from './Movie/Hindi'
import home from './images/home.png'

function Home() {
    const navigate = useNavigate();
  return (
<div>
<div className='header'>
 <h1><span className = "aa">Fairy </span><span className = "bb">Movies </span><span className = "cc">Collection </span></h1>
 </div>
<div className='imagecontainer'>
     <button onClick={() => {navigate("/tamil")} }  className="buttonhomea" >Kollywood</button> 
      <button onClick={() => {navigate("/telugu")}}className = "buttonhomeb" >Tollywood</button>
      <button onClick={() => {navigate("/hindi")}}className = "buttonhomec">Bollywood</button>
       </div>
</div>
    )
}

export default Home;