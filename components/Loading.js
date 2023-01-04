import React from 'react'

function Loading() {
  return (
    <section className='absolute bg-white w-[100vw] z-40 h-screen flex justify-center items-center'>
            <div className='w-[300px] h-[300px] relative flex justify-center items-center '>


        <div className='absolute h-1/2 w-1/2 rounded-full border bg-transparent  animate-ping duration-700 delay-75'></div>
        <div className='absolute h-1/3 w-1/3 rounded-full border-2 border-yellow bg-transparent animate-ping duration-700 delay-75'></div>
        <div className='absolute h-1/4 w-1/4 rounded-full border-2 border-yellow bg-yellow animate-pulse duration-700 delay-100'></div>
            </div>
    </section>
  )
}

export default Loading