import React, { useRef } from 'react'

const Carrusel = () => {
    const slider = useRef()

    const images = [...Array(25).keys()];

    const url = 'src={`https://picsum.photos/id/${index}/300/300`}'

    let defaultTransform = 0;

    function goNext() {
        defaultTransform = defaultTransform - 398;
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
        slider.style.transform = 'translateX(' + defaultTransform + 'px)';
    }

    function goPrev() {
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 398;
        slider.style.transform = 'translateX(' + defaultTransform + 'px)';
    }

    return (
        <div className='flex items-center justify-center w-full h-full py-24 sm:py-8 px-4'>
            <div className='w-full relative flex items-center justify-center'>


                <button onClick={() => slider.current.scrollLeft += 200} className='bg-gray-500 mx-2'>
                    <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path></svg>
                </button>
                <div className='m-16 w-full h-full mx-auto overflow-x-scroll overflow-y-hidden'>
                    
                    <div ref={slider} className='h-full flex items-center justify-start transition ease-out duration-700'>
                        {images.map((e, i) => (
                            <div key={i} className='bg-gray-900 flex flex-shrink-0 relative w-full sm:w-auto'>
                                <img src={`https://picsum.photos/id/${i}/300/300`} alt='black chair and white table'
                                    className='object-cover object-center w-full' />                            
                            </div>
                        ))}

                    </div>
                </div>
                <button onClick={() => slider.current.scrollLeft -= 200} className='bg-gray-500 mx-2'>
                    <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Carrusel