import React from 'react'
import a from '../images/Hindi/1.jpeg'
import b from '../images/Hindi/2.jpeg'
import c from '../images/Hindi/3.jpeg'
import d from '../images/Hindi/4.jpeg'
import e from '../images/Hindi/5.jpeg'
import f from '../images/Hindi/6.jpeg'
import g from '../images/Hindi/7.jpeg'
import h from '../images/Hindi/8.jpeg'
import i from '../images/Hindi/9.jpeg'
import j from '../images/Hindi/10.jpeg'
import k from '../images/Hindi/11.jpeg'
import l from '../images/Hindi/12.jpeg'
import './Hindi.css'

function Hindi() {
  return (
    <div>
     < div className='header'>
        <h1><span className = "aa">Hindi </span><span className = "bb">Movies </span></h1>
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

export default Hindi;