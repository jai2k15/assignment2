import React from 'react'
import { CiLocationOn } from 'react-icons/Ci';
import { PiBuildingsDuotone } from 'react-icons/Pi';
import { BiBed } from 'react-icons/Bi';
import { LiaBathSolid } from 'react-icons/Lia';
import { BsArrowsMove } from 'react-icons/Bs';
import { useNavigate } from 'react-router-dom';
const CardItem = ({value, setSelectedItem}) => {
    const navigate = useNavigate();
    const handleClick = () =>{
        setSelectedItem(value);
        navigate(`/property/${value.place}${value.address}${value.street}`)
    }
    return (
        <>
        
            <div className="h-[34rem] w-[25%]  flex flex-col items-center justify-center mx-5 my-2 rounded-xl" >
                <div className="h-[45%] ">
                    <img src={value.imgUrl} className='h-[100%] rounded-3xl' alt="" />
                </div>
                <div className=" h-[50%] flex flex-col px-8 py-4">
                    <span className="flex items-center m-2 text-sky-900 font-medium"><CiLocationOn className='text-yellow-900 mr-1 font-bold' />{value.street}</span>
                    <span className="m-2 text-xl font-medium">{value.address}, {value.street}</span>
                    <div className="flex items-center m-2 space-x-9 text-base">
                        <span className=""><PiBuildingsDuotone className='text-xl' />3 Room</span>
                        <span className=""><BiBed className='text-xl' />4 Bed</span>
                        <span className=""><LiaBathSolid className='text-xl' />1 Bath</span>
                        <span className=""><BsArrowsMove className='text-xl' />764 sft</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className=""><span className='text-xl text-indigo-500 font-medium'>${value.perMonth}</span>/month</span>
                        <span className="">
                            <button onClick={handleClick} className="font-medium border-2 border-indigo-600 text-base px-5 h-10 rounded-3xl text-indigo-600 hover:text-white hover:bg-indigo-600">Read More</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem