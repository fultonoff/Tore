import React from 'react'

function Video() {
  return (
    <section className="mx-auto max-w-5xl p-2 mt-[100px] mb-[150px]">
      <h1 className="text-2xl font-bold text-center md:text-[36px] mb-[60px]">
        Hus för en ung familj
      </h1>
      <div className="flex justify-center shadow-lg h-[250px] md:h-[568px] overflow-hidden rounded-lg">
        <iframe className='w-full h-full'
          
          src="https://www.youtube.com/embed/jZtLho6J0zA"
          title="Flytta till Töre!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Video