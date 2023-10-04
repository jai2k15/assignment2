import React from 'react'
import { BsArrowRight } from 'react-icons/Bs';
const Navbar = ({ setLondon, london, paris, setParis, mumbai, setMumbai, newYork, setNewYork }) => {
    const handleLondon = () => {
        setLondon(true);
        setParis(false);
        setMumbai(false);
        setNewYork(false);
    }
    const handleParis = () => {
        setLondon(false);
        setParis(true);
        setMumbai(false);
        setNewYork(false);
    }
    const handleMumbai = () => {
        setLondon(false);
        setParis(false);
        setMumbai(true);
        setNewYork(false);
    }
    const handleNewYork = () => {
        setLondon(false);
        setParis(false);
        setMumbai(false);
        setNewYork(true);
    }
    return (
        <>
            <div className=" h-20 flex items-center justify-between px-10">
                <div className="space-x-4">

                    <button onClick={handleNewYork} className={`${newYork ? 'bg-indigo-600 text-white' : 'bg-gray-200'} font-medium bg-gray-200 text-lg px-6 h-12 rounded-3xl text-black hover:text-white hover:bg-indigo-600`}>New York</button>

                    <button onClick={handleMumbai} className={`${mumbai ? 'bg-indigo-600 text-white' : 'bg-gray-200'} font-medium bg-gray-200 text-lg px-6 h-12 rounded-3xl text-black hover:text-white hover:bg-indigo-600`}>Mumbai</button>

                    <button onClick={handleParis} className={`${paris ? 'bg-indigo-600 text-white' : 'bg-gray-200'} font-medium bg-gray-200 text-lg px-6 h-12 rounded-3xl text-black hover:text-white hover:bg-indigo-600`}>Paris</button>

                    <button onClick={handleLondon} className={`font-medium ${london ? 'bg-indigo-600 text-white' : 'bg-gray-200'} text-lg px-6 h-12 rounded-3xl text-black hover:text-white hover:bg-indigo-600`}>London</button>

                </div>
                <div className="">
                    <button className="font-medium flex items-center space-x-2 bg-gray-200 text-lg px-6 h-12 rounded-3xl text-black hover:text-white hover:bg-indigo-600">View All <BsArrowRight className='ml-2' /></button>
                </div>
            </div>
        </>
    )
}

export default Navbar