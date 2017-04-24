import React from 'react'
import ReactDOM from 'react-dom'
import Popup from '../src'
import '../style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Popup />, 
    document.querySelector('#react-app')
  )
})