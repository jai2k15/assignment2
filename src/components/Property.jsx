import React from 'react'
import CardItem from './CardItem'

const Property = ({selectedItem}) => {
  return (
    <>
        <div className=" flex justify-center">
            <CardItem value={selectedItem}/>
        </div>
    </>
  )
}

export default Property