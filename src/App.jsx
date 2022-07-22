import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/layout/header/Navbar'
import ItemListContainer from './components/layout/home/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer name="Anthony"/>
    </div>
  )
}

export default App
