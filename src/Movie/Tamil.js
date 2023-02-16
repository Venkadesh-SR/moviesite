import React from 'react'
import a from '../images/Tamil/1.jpeg'
import b from '../images/Tamil/2.jpeg'
import c from '../images/Tamil/3.jpeg'
import d from '../images/Tamil/4.jpeg'
import e from '../images/Tamil/5.jpeg'
import f from '../images/Tamil/6.jpeg'
import g from '../images/Tamil/7.jpeg'
import h from '../images/Tamil/8.jpeg'
import i from '../images/Tamil/9.jpeg'
import j from '../images/Tamil/10.jpeg'
import k from '../images/Tamil/11.jpeg'
import l from '../images/Tamil/12.jpeg'
import './Tamil.css'

function Tamil() {
  return (
    <div>
        <div className='header'>
        <h1><span className = "aa">Tamil </span><span className = "bb">Movies </span></h1>
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

export default Tamil;