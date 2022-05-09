import React from 'react'

const Categories = () => {


    return (

        <div className=''>
                <h1 className='text-center mt-24 mb-8 text-4xl font-medium  '>categories</h1>
                <div className=' mx-auto w-1/12 '>
                    <div className='mx-auto w-1/4 border-b-4 border-gray-900'>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full h-full py-24 sm:py-8 px-4'>
                    <div className='w-full relative flex items-center justify-center'>
                        <div aria-label='slide backward' className='absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer' >
                            <svg className='dark:text-gray-900' width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M7 1L1 7L7 13' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                            </svg>
                        </div>
                        <div className='w-full h-full mx-auto overflow-x-hidden overflow-y-hidden'>
                            <div id='slider' className='h-full flex items-center justify-start transition ease-out duration-700'>
                                <div className='bg-gray-900 flex flex-shrink-0 relative w-full sm:w-auto'>
                                    <img src='https://i.ibb.co/fDngH9G/carosel-1.png' alt='black chair and white table'
                                        className='object-cover object-center w-full' />
                                    <div className='bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6'>
                                        <h2 className='lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900'>Catalog 1</h2>
                                        <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                            <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50'>Minimal Interior</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-900 flex flex-shrink-0 relative w-full sm:w-auto'>
                                <img src='https://i.ibb.co/DWrGxX6/carosel-2.png' alt='sitting area' className='object-cover object-center w-full' />
                                    <div className='bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6'>
                                        <h2 className='lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900'>Catalog 1</h2>
                                        <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                            <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50'>Minimal Interior</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-900 flex flex-shrink-0 relative w-full sm:w-auto'>
                                <img src='https://i.ibb.co/tCfVky2/carosel-3.png' alt='sitting area' className='object-cover object-center w-full' />
                                    <div className='bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6'>
                                        <h2 className='lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900'>Catalog 1</h2>
                                        <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                            <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50'>Minimal Interior</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-900 flex flex-shrink-0 relative w-full sm:w-auto'>
                                <img src='https://i.ibb.co/rFsGfr5/carosel-4.png' alt='sitting area' className='object-cover object-center w-full' />
                                    <div className='bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6'>
                                        <h2 className='lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900'>Catalog 1</h2>
                                        <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                            <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50'>Minimal Interior</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-900 flex flex-shrink-0 relative w-full sm:w-auto'>
                                    <img src='https://i.ibb.co/fDngH9G/carosel-1.png' alt='black chair and white table'
                                        className='object-cover object-center w-full' />
                                    <div className='bg-gray-800 bg-opacity-30 hover:bg-opacity-70 absolute w-full h-full p-6'>
                                        <h2 className='lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900'>Catalog 1</h2>
                                        <div className='opacity-0 hover:opacity-100 hover:brightness-100 flex h-full items-center justify-center '>
                                            <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-50'>Minimal Interior</h3>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <button aria-label='slide forward' className='absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400'>
                            <svg className='dark:text-gray-900' width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1 1L7 7L1 13' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                            </svg>
                        </button>
                    </div>
                </div>


            </div>

            )
}

            export default Categories


// html
// let defaultTransform = 0;
// function goNext() {
//     defaultTransform = defaultTransform - 398;
//     var slider = document.getElementById('slider');
//     if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
//     slider.style.transform = 'translateX(' + defaultTransform + 'px)';
// }
// next.addEventListener('click', goNext);
// function goPrev() {
//     var slider = document.getElementById('slider');
//     if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
//     else defaultTransform = defaultTransform + 398;
//     slider.style.transform = 'translateX(' + defaultTransform + 'px)';
// }
// prev.addEventListener('click', goPrev);

{/* <img src='https://i.ibb.co/fDngH9G/carosel-1.png' alt='black chair and white table'
<img src='https://i.ibb.co/DWrGxX6/carosel-2.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/tCfVky2/carosel-3.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/rFsGfr5/carosel-4.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/fDngH9G/carosel-1.png' alt='black chair and white table' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/DWrGxX6/carosel-2.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/tCfVky2/carosel-3.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/rFsGfr5/carosel-4.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/fDngH9G/carosel-1.png' alt='black chair and white table' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/DWrGxX6/carosel-2.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/tCfVky2/carosel-3.png' alt='sitting area' className='object-cover object-center w-full' />
<img src='https://i.ibb.co/rFsGfr5/carosel-4.png' alt='sitting area' className='object-cover object-center w-full' /> */}