import React, {useEffect, useState} from 'react'
import {
    BsArrowUp
} from "react-icons/bs";

function ScrollToTop() {
    const [show, setShow] = useState(false)
    const handleScrollToTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(()=>{
        const handleScrollButonVisibility = ()=>{
            window.pageYOffset > 600 ? setShow(true) : setShow(false)
        }

        window.addEventListener('scroll', handleScrollButonVisibility)

        return ()=>{
            window.removeEventListener('scroll', handleScrollButonVisibility)
        }
    }, [])


  return (
    <>
    
    {show && <div className='fixed bg-yellow p-4 rounded-full text-white animate-pulse cursor-pointer duration-200 bottom-5 right-7 z-50 group'>
        < BsArrowUp className = 'group-hover:scale-150 duration-200'
        onClick = {
            handleScrollToTop
        }
        />
    </div>}
    </>
  )
}

export default ScrollToTop