import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-comicn text-gray-400'>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
        <li>
          <a href='#'>Reddit</a>
        </li>
      </ul>
      <div className='flex gap-3'>
        <img src='./assets/Help-Avatar.svg' alt='Helpb'/>
        <div>
          <p className=' font-playfair font-semibold'>Still have doubts?</p>
          <a href='#' className=' font-medium font-comicn'>Talk to Mr. Funny Valentine directly</a>
        </div>
      </div>
    </div>
  )
}

export default Footer