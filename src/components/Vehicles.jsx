import React from 'react'

const Vehicles = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div >
                    <h2 className='font-bold text-5xl mt-12'>Most Searched Vehicles</h2>
                    <p className='flex justify-between mt-2'>The world's car brands</p>
                </div>
                <div className='flex'>
                    <button className='rounded-full bg-gray-400'> -1 </button>
                </div>
            </div>
        </div>
    )
}

export default Vehicles