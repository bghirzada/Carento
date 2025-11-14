import React from 'react'
import Card from './Card'
import CarCards from './CarCards'

const Vehicles = () => {
    return (
        <div className=' flex flex-col items-center'>
            <div className='w-2/3 flex justify-between items-center mb-12'>
                <div >
                    <h2 className='font-bold text-5xl mt-12'>Most Searched Vehicles</h2>
                    <p className='flex justify-between mt-2 text-lg text-gray-500'>The world's leading car brands</p>
                </div>
                <div className='flex'>
                    <button className='rounded-full bg-gray-400 w-10 h-10'> -1 </button>
                    <button className='rounded-full bg-gray-400 w-10 h-10'> 1 </button>
                </div>
            </div>
            <CarCards />
        </div>
    )
}

export default Vehicles