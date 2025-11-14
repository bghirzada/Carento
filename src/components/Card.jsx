import React from 'react'

const Card = ({car }) => {
  
  return (
    <div className='relative rounded-2xl'>
      <div
        className='w-full h-72 bg-cover bg-no-repeat rounded-2xl'
        style={{ backgroundImage: `url(${car.image})` }}
      ></div>

      <div className='absolute top-60 right-8 text-sm px-6 py-1 rounded-md bg-white border border-gray-200'>
        {car.rating} <span className='text-gray-400'>({car.reviews} reviews)</span>
      </div>

      <div className='rounded-2xl border border-gray-200 p-4 -mt-8 bg-white'>
        <div className='border-b border-gray-200'>
          <h3 className='font-bold text-2xl'>{car.title}</h3>
          <p className='text-sm text-gray-500 py-2'>{car.location}</p>
        </div>

        <div>
          <p>{car.miles} miles</p>
          <p>{car.transmission}</p>
          <p>{car.fuel}</p>
          <p>{car.seats} seats</p>
        </div>

        <div>
          <p>From ${car.price}</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
