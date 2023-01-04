import React from 'react'
import SmallItem from './SmallItem'
import featureImg from '../image/feature-img-1.jpg'

function SmallItems() {
  const items = [1, 2, 3]
  return (
    
    <div  className = "infrastructure mt-[150px] mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4" >
     {items.map((item, index)=>{
      return(
        <div key={index}>
        
        <SmallItem />
        </div>
      )
     })}
      
    </div>
  )
}
export default SmallItems
