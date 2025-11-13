import 'animate.css';
import { useState } from 'react';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        { name: "Home", sub: ["Home page v1", "Home page v2", "Home page v3"] },
        { name: "Vehicles", sub: { List: ["Car List V1", "Car List V2", "Car List V3"], Details: ["Car Deatils V1", "Car Deatils V2", "Car Deatils V3"] } },
        { name: "Dealers", sub: ["Dealers Listing", "Dealer Details"] },
        { name: "Shop", sub: ["Shop Grid", "Product Details"] },
        { name: "Pages", sub: ["About Us", "About Us", "Our Services", "Pricing", "Loan Calculator", "FAQs", "Term", "Contact", "Login", "Register", "Error 404"] },
        { name: "News", sub: { CarRental: ["New Grid", "News List", "News Details"] } },
        { name: "Contact" },
    ];

    return (
        <div className='w-full h-[calc(100vh-100px)] bg-cover bg-top bg-no-repeat text-white' style={{ backgroundImage: "url('https://carento-nextjs.vercel.app/_next/static/media/banner.c6982b24.png')" }}>
            <div className='w-full h-[calc(100vh-100px)] absolute opacity-60 bg-black z-10'></div>
            <div className='relative z-20'>
                <nav>
                    <div className='flex justify-between items-center border-[#7a7a7a] border-b px-16 text-sm'>
                        <div className='flex gap-4'>
                            <p className='cursor-pointer hover:text-[#70f46d] '>+1 222-555-33-99</p>
                            <p className=' cursor-pointer hover:text-[#70f46d]'>sale@carento.com</p>
                        </div>
                        <div className='flex gap-4'>
                            <p>More than <span className='text-[#70f46d]'>800+</span>spetion collaction cars in this summer</p>
                            <button className='py-0.5 px-2.5 rounded-2xl bg-[#70f46d] hover:bg-[#4eca4c] text-black cursor cursor-pointer'>Access now</button>
                        </div>
                        <div className='flex'>
                            <button className='flex items-center p-4 cursor cursor-pointer'>
                                <p>EN</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-4 h-4 transition-transform `}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="grey"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <button className='flex items-center p-4 cursor cursor-pointer border-[#7a7a7a] border-x'>
                                <p>USD</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-4 h-4 transition-transform `}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="grey"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <button className='p-4 cursor cursor-pointer'>Icon</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-16 border-[#7a7a7a] border-b'>
                        <div className='py-4'>
                            <h1 className='text-3xl font-bold cursor cursor-pointer'>Carento</h1>
                        </div>
                        <div>
                            <ul className="flex gap-8">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={item.name}
                                        className="relative group cursor-pointer"
                                        onMouseEnter={() => setActiveMenu(index)}
                                        onMouseLeave={() => setActiveMenu(null)}
                                    >
                                        <span
                                            className={`flex items-center gap-1 ${activeMenu === index ? "text-[#70f46d]" : "text-white"
                                                } hover:text-[#70f46d] transition`}
                                        >
                                            {item.name}
                                            {item.sub && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`w-4 h-4 transition-transform `}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            )}
                                        </span>

                                        {activeMenu === index && item.sub && (
                                            <div className="absolute left-0 top-full mt-4 bg-white text-black rounded-xl shadow-lg p-4 z-50 before:content-[''] before:absolute before:-top-2 before:left-6 before:w-4 before:h-4 before:bg-white before:rotate-45 min-w-[220px]">
                                                {Array.isArray(item.sub) && (
                                                    <ul>
                                                        {item.sub.map((subItem) => (
                                                            <li
                                                                key={subItem}
                                                                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                                                            >
                                                                {subItem}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {!Array.isArray(item.sub) && typeof item.sub === "object" && (
                                                    <div className="flex gap-8">
                                                        {Object.entries(item.sub).map(([title, subList]) => (
                                                            <div key={title}>
                                                                <h4 className="font-semibold mb-2 text-gray-700">
                                                                    {title.replace(/([A-Z])/g, " $1").trim()}
                                                                </h4>
                                                                <ul>
                                                                    {subList.map((subItem) => (
                                                                        <li
                                                                            key={subItem}
                                                                            className="px-2 py-1 rounded-lg hover:bg-gray-100 transition cursor-pointer text-sm"
                                                                        >
                                                                            {subItem}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                ))}
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
                    <h2 className='animate__animated animate__fadeInUp mb-8 text-6xl leading-[76px]'>Looking for a vehicle? <br />You're in the perfect spot</h2>
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