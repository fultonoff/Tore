import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <section className='not-found h-screen flex justify-center items-center'>

      <div className='flex flex-col items-center'>
      <div className='md:text-4xl font-thin font-poppins text-white md:self-start '>Oops<span className='animate-ping duration-200'>!!!</span></div>
      <div className='font-bold md:text-9xl text-4xl text-white md:tracking-[40px] animate-pulse duration-200'>404</div> 
      <div className='md:text-5xl text-lg md:tracking-widest text-white'>Page not Found!</div>
      <Link href='/' className='text-2xl bg-Blue text-white px-4 py-2 rounded-sm shadow-md mt-10 cursor-pointer'>Take me home</Link>
     
      </div>
      
    </section>
  )
}

export default NotFound
