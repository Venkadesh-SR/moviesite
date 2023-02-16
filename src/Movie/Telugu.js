import React from 'react'
import a from '../images/Telugu/1.jpeg'
import b from '../images/Telugu/2.jpeg'
import c from '../images/Telugu/3.jpeg'
import d from '../images/Telugu/4.jpeg'
import e from '../images/Telugu/5.jpeg'
import f from '../images/Telugu/6.jpeg'
import g from '../images/Telugu/7.jpeg'
import h from '../images/Telugu/8.jpeg'
import i from '../images/Telugu/9.jpeg'
import j from '../images/Telugu/10.jpeg'
import k from '../images/Telugu/11.jpeg'
import l from '../images/Telugu/12.jpeg'
import './Telugu.css'

function Telugu() {
  return (
    <div className='telugu'>
      < div className='header'>
        <h1><span className = "aa">Telugu </span><span className = "bb">Movies </span></h1>
        </div>
        <div className='list'>
            <img src={a} className = "images"/>
            <img src={b} className = "images"/>
            <img src={c} className = "images"/>
            <img src={d} className = "images"/>
            <img src={e} className = "images"/>
            <img src={f} className = "images"/>
            <img src={g} className = "images"/>
            <img src={h} className = "images"/>
            <img src={i} className = "images"/>
            <img src={j} className = "images"/>
            <img src={k} className = "images"/>
            <img src={l} className = "images"/>
  </div>
      </div>
  )
}

export default Telugu;