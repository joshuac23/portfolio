// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Myfooter from './components/MyFooter'
import Landing from './components/Landing'
import About from './components/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <About/>
      <h2>Projects</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      <h2>Contact</h2>
        <div>My email:</div>
      <Myfooter/>
    </>
  )
}

export default App
