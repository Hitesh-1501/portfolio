import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import QuickStats from "./components/QuickStats"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickStats />
    </>
  )
}


export default App

