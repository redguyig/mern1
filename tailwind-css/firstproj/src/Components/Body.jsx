import React from 'react'

const Body = () => {
  return (
    <div className=' space-y-5'>
      <div className='flex justify-center'>
        <img src="./assets/Blue-Shape.svg" alt="bg1" className="-rotate-[45deg] h-64"/ >
        <img src="./assets/Purple-Shape.svg" alt="bg2" className='absolute -rotate-[30deg] h-64'/ >
        <img src="./assets/Pink-Shape.svg" alt="bg3" className='absolute -rotate-[15deg] h-64'/>
        <img src="./assets/Hero-Model.png" alt="m1" className='absolute h-64'/>
      </div> 
      <div>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Steel Ball Run is HEREEEE</h1>
        <p className=' font-comicn'>Race across the world,as the BEST racing jockeys from all over the world come to the US and take part in the cross country race and win a Grand Prize</p>
        <form action="" className='flex flex-col gap-3'>
           <input className="rounded-md px-4 py-3 palceholder: text-gray-400 opacity-1"type='email' placeholder='Enter Your Email'/>
           <button className='rounded-md px-4 py-3 bg-pink-400 hover:bg-pink-600 w-40'>Join the RACE </button>
        </form>
        <div className='flex gap-2 '>
          <img src="./assets/Checkmark.svg" alt='tick'/>
          <p className='font-comicn text-gray-400'>No paralympic racers allowed</p>
        </div>
      </div>
    </div>
  )
}

export default Body