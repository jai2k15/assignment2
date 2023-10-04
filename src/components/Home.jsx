import React, { useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

const Home = ({setSelectedItem}) => {
  const [london, setLondon ] = useState(true)
  const [paris, setParis ] = useState(false)
  const [mumbai, setMumbai ] = useState(false)
  const [newYork, setNewYork ] = useState(false);
  return (
    <>
        <Navbar london={london} setLondon={setLondon} setParis={setParis} paris={paris} mumbai={mumbai} setMumbai={setMumbai} newYork={newYork} setNewYork={setNewYork}/>
        <Cards setSelectedItem={setSelectedItem} london={london} paris={paris} mumbai={mumbai} newYork={newYork}/>
    </>
  )
}

export default Home