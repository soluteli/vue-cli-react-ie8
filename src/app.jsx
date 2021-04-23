import React from 'react'
import './app.css'
// import Logo from './assets/logo.svg'
import AppRouter from './router'
import A from "./a";

function APP() {
  return (
    <div className="app">
      <div className="app-sidebar">
        app-sidebar
        <br />
        <A />
      </div>
      <div className="app-content">
        <AppRouter />
      </div>
    </div>
  )
}

export default APP
