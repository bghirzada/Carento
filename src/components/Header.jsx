import 'animate.css';

const Header = () => {
    return (
        <div className='w-full h-full bg-cover bg-top bg-no-repeat text-white' style={{ backgroundImage: "url('https://carento-nextjs.vercel.app/_next/static/media/banner.c6982b24.png')" }}>
            <div className='w-full h-full absolute opacity-60 bg-black z-10'></div>
            <div className='relative z-20'>
                <nav>
                    <div className='flex justify-between items-center border-[#7a7a7a] border-b px-16 text-sm'>
                        <div className='flex gap-4'>
                            <p className='cursor-pointer hover:text-[#70f46d] '>+1 222-555-33-99</p>
                            <p className=' cursor-pointer hover:text-[#70f46d]'>sale@carento.com</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>More than <span className='text-[#70f46d]'>800+</span>spetion collaction cars in this summer</p>
                            <button className='py-[2px] px-[10px] rounded-2xl bg-[#70f46d] hover:bg-[#4eca4c] text-black cursor cursor-pointer'>Access now</button>
                        </div>
                        <div>
                            <button className='p-4 cursor cursor-pointer'>EN</button>
                            <button className='p-4 cursor cursor-pointer border-[#7a7a7a] border-x'>USD</button>
                            <button className='p-4 cursor cursor-pointer'>Icon</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-2.5 px-16 border-[#7a7a7a] border-b'>
                        <div className='py-4'>
                            <h1 className='text-3xl font-bold cursor cursor-pointer'>Carento</h1>
                        </div>
                        <div>
                            <ul className='flex gap-8'>
                                <li>Home</li>
                                <li>Vehicles</li>
                                <li>Dealers</li>
                                <li>Shop</li>
                                <li>Pages</li>
                                <li>News</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='flex gap-4 text-sm ml-40 font-semibold'>
                            <button className='p-3 rounded-xl cursor-pointer hover:bg-[#70f46d] hover:text-black'>Sign in</button>
                            <button className='p-3 bg-white text-black rounded-xl cursor-pointer hover:bg-[#70f46d]'>Add listing</button>
                            <button className='p-3 bg-[#70f46d] text-black rounded-xl  cursor-pointer '>Ico</button>
                        </div>
                    </div>
                    <div></div>
                </nav>
                <div className='h-[800px] flex flex-col justify-center p-20 mx-28 font-bold'>
                    <p className='animate__animated animate__fadeInUp leading-7 text-[#70f46d]'>Find Your Perfect Car </p>
                    <h2 className='animate__animated animate__fadeInUp mb-8 text-6xl leading-[76px]'>Looking for a vehicle? <br/>You're in the perfect spot</h2>
                    <div className='mt-8 flex gap-4 text-sm'>
                        <p className='animate__animated animate__fadeInUp animate__delay-1s py-1 pr-12'>High quality at a low cost.</p>
                        <p className='animate__animated animate__fadeInUp animate__delay-2s py-1 pr-12'>Premium services</p>
                        <p className='animate__animated animate__fadeInUp animate__delay-3s py-1 pr-12'>24/7 road support.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header