import React, { useRef } from 'react'

const Carrusel = () => {
    const snapx = useRef()

    const images = [...Array(25).keys()];
    console.log(images)
    return (
        <div className='my-16 flex'>
            <button className='bg-gray-500 mx-2' onClick={() => snapx.current.scrollLeft -= 200}>
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <div ref={snapx} class="snap-x scroll-smooth overflow-x-hidden overflow-y-hidden overflow-scroll flex">
                {images.map((e, index) => (
                        <img className='snap-start' src={`https://picsum.photos/id/${index}/300/300`} alt="" />
                ))}
            </div>
            <button className='bg-gray-500 mx-2' onClick={() => snapx.current.scrollLeft += 200}>
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
    )
}

export default Carrusel