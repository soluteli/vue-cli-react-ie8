import React from 'react'
import './style.css'
import Logo from './assets/logo.svg'
import APPRouter from './router'

function APP() {
  return (
    <div className="app">
      <div className="app-sidebar">
        app-sidebar
      </div>
      <div className="app-content">
        <APPRouter />
      </div>
    </div>
  )
}

export default APP
