import React from 'react'
import Image from 'next/image'
import post from '../image/post.svg'
import apotek from '../image/apotek.svg'
import shell from '../image/shell.svg'
import abf from '../image/abf.svg'
import ica from '../image/ica.svg'
import okq from '../image/okq.svg'

function Companies() {
  return (
    <section className='py-[45px] mx-auto maxW flex '>
     <div className="flex justify-between w-full items-center px-5">
        <Image src={ica} alt=''className='w-10 md:w-20'/>
        <Image src={shell} alt=''className='w-10 md:w-20'/>
        <Image src={okq} alt=''className='w-10 md:w-20'/>
        <Image src={post} alt=''className='w-10 md:w-20'/>
        <Image src={apotek} alt=''className='w-10 md:w-20'/>
        <Image src={abf} alt=''className='w-10 md:w-20'/>
     </div>
    </section>
  )
}

export default Companies
