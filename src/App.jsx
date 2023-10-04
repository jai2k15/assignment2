import './App.css'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Property from './components/Property'
import { useState } from 'react'
function App() {
  const [ selectedItem, setSelectedItem ] = useState([])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home setSelectedItem={setSelectedItem}/>} />
          <Route path='/property/:id' element={<Property selectedItem={selectedItem} />} />
        </Routes>
      
      </Router>
    </>
  )
}

export default App
