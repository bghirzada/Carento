import React from 'react'
import Carousel from './carousel';


const Brends = () => {
    return (
        <div className='flex flex-col items-center bg-[#f2f4f6]'>
            <div className='z-30 w-5/6 -mt-32'>
                <div className='h-70 bg-white font-semibold text-black p-8 rounded-3xl shadow-[0_10px_20px_0_rgba(0,0,0,0.05)]'>
                    <div className='flex justify-between '>
                        <div>
                            <button className='rounded-xl py-2 px-4 mr-2 bg-[#70f46d] hover:bg-[#89ed87]'>All cars</button>
                            <button className='rounded-xl py-2 px-4 mr-2 hover:bg-[#89ed87]'>New cars</button>
                            <button className='rounded-xl py-2 px-4 mr-2 hover:bg-[#89ed87]'>Used cars</button>
                        </div>
                        <div className='font-normal'>Need help?</div>
                    </div>
                    <div className='grid grid-cols-5 py-5 mt-8 border border-gray-200 rounded-2xl'>
                        <div className='mx-8 border-r border-gray-200'>
                            <p className='mb-2 text-gray-400'>Pick Up Location</p>
                            <button>New York, USA</button>
                        </div>
                        <div className='mx-8 border-r border-gray-200'>
                            <p className='mb-2 text-gray-400'>Drop Off Location</p>
                            <button>Delaware, USA</button>
                        </div>
                        <div className='mx-8 border-r border-gray-200'>
                            <p className='mb-2 text-gray-400'>Pick Up Date & Time</p>
                            <button>11/13/2025</button>
                        </div>
                        <div className='mx-8'>
                            <p className='mb-2 text-gray-400'>Return Date & Time</p>
                            <button>11/13/2025</button>
                        </div>
                        <div className='mx-8 bg-[#70f46d] p-5 rounded-xl text-center'>Find a vehicle</div>
                    </div>
                </div>
                <h2 className=''>Premium Brenda</h2>
                <div>
                    <p>Unveil the Finest Selection of High-End Vehicles</p>
                    <p>Show all brends </p>
                </div>
                <div className=''>
                    <Carousel />
                </div>
            </div>

        </div>
    )
}

export default Brends