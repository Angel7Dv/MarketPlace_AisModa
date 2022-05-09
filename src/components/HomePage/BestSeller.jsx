import React, { useRef } from 'react'



const BestSeller = () => {
    const snapx = useRef()
    const images = [...Array(45).keys()];

    return (
        <div className='flex flex-col justify-center items-center my-16'>
            <div>
                <h3 className='text-bold text-2xl uppercase '> Best Seller</h3>
                <div className='mx-[40%] my-5'>
                    <div className='border-b border-6 h-2 border-gray-900' />
                </div>
            </div>


            <div className='flex justify-center my-16'>
  
            </div>



        </div>
    )
}

export default BestSeller