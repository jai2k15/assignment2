import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import data from '../data/data.json';
import { GiSandsOfTime } from 'react-icons/Gi';
import { RxCross1 } from 'react-icons/Rx';

const Cards = ({ london, paris, mumbai, newYork, setSelectedItem }) => {
    const [londonData, setLondonData] = useState([]);
    const [parisData, setParisData] = useState([]);
    const [mumbaiData, setMumbaiData] = useState([]);
    const [newYorkData, setNewYorkData] = useState([]);

    const allLondonData = data.filter((value) => {
        return value.place === 'london'
    })
    const allParisData = data.filter((value) => {
        return value.place === "paris"
    })
    const allMumbaiData = data.filter((value) => {
        return value.place === "mumbai"
    })
    const allNewYorkData = data.filter((value) => {
        return value.place === "new york"
    })

    useEffect(() => {
        setLondonData(allLondonData.slice(0, 6))
        setParisData(allParisData.slice(0, 6))
        setMumbaiData(allMumbaiData.slice(0, 6))
        setNewYorkData(allNewYorkData.slice(0, 6))
    }, data)
    const showMore = (e) => {
        e.preventDefault();
        if (london) {
            setLondonData(allLondonData)
        }
        else if (paris) {
            setParisData(allParisData)
        }
        else if (mumbai) {
            setMumbaiData(allMumbaiData)
        }
        else if (newYork) {
            setNewYorkData(allNewYorkData)
        }
    }

return (
    <>
        <div className={`flex flex-col -z-1`}>

            <div className=" flex flex-wrap justify-center">


                {
                    london &&
                    londonData.map((value, index) => {
                        return <CardItem setSelectedItem={setSelectedItem} key={index} value={value} />
                    })
                }
                {
                    paris &&
                    parisData.map((value, index) => {
                        return <CardItem setSelectedItem={setSelectedItem} key={index} value={value} />
                    })
                }
                {
                    mumbai &&
                    mumbaiData.map((value, index) => {
                        return <CardItem setSelectedItem={setSelectedItem} key={index} value={value} />
                    })
                }
                {
                    newYork &&
                    newYorkData.map((value, index) => {
                        return <CardItem setSelectedItem={setSelectedItem} key={index} value={value} />
                    })
                }




            </div>
            <button onClick={showMore} className="mx-auto flex items-center my-10 font-medium border-2 border-indigo-600 text-base px-5 w-fit h-12 rounded-3xl  text-white bg-indigo-600"><GiSandsOfTime className='text-xl mr-1' />Show More</button>
        </div>

    </>
)
}

export default Cards