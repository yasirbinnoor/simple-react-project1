import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navegation from './components/Navegation'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div>
      <Navegation />
      <HeroSection />
      {/* Other components or content */}
    </div>
  )
}

export default App;

