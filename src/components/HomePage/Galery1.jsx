import React, { useRef } from 'react'

const Galery1 = () => {
    const slider = useRef()
    const images = [
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Women's Accessories/01.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Women's Accessories/02.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Women's Accessories/03.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Women's Accessories/04.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Women's Accessories/05.jpg",
        "https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Women's Accessories/06.jpg",
    ];

    const text = [
        "Worldwide shipping",
        "Easy 30 day returns",
        "12 month warranty"
    ]

    return (
        <div className='py-10  bg-[#F7F2F1]'>

            <div className='text-center my-16'>
                <h6 className='text-xl font-semibold uppercase'>
                    FOLLOW
                </h6>
                <h6 className='text-xl font-semibold uppercase'>
                    aisModa ON INSTAGRAM
                </h6>
                <h6 className='text-lg mt-5 italic  text-red-600 uppercase'>
                    @Ragnarok
                </h6>
            </div>
            <div className='flex items-center justify-center w-full h-full '>

                <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft -= 200}>
                    <svg class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path></svg>
                </button>
                <div ref={slider} class='snap-x overflow-hidden scroll-smooth h-full mx-[10%] md:mx-0 sm:w-2/4 md:w-full flex items-center justify-start'>
                    {images.map((e, i) => (
                        <div key={i} className='snap-start group relative w-auto flex h-full items-center justify-center flex-col flex-shrink-0'>

                            <img src={e} alt={`images${i}`} className='object-cover object-center w-[20rem]' />

                            <div className='bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6'>
                                <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                    <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50'>
                                        @Ragnarok: #tailwind, #react, #css, #html, #carrusel
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft += 200}>
                    <svg class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path></svg>
                </button>
            </div>

            <div className='flex justify-around my-12'>
                {text.map((e) => (
                        <div className='flex flex-col items-center justify-center'>
                            <div className='border-red-600 border-t-2 w-4'></div>
                            <h5 className='text-2xl text-red-600 mt-5 italic font-extralight'>{e}</h5>
                        </div>
                ))}

            </div>

        </div>
    )
}
export default Galery1