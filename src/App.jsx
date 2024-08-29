// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Myfooter from './components/MyFooter'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
      <Myfooter/>
    </>
  )
}

export default App
