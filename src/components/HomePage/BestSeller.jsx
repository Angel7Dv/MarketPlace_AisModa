import React from 'react'
import Carrusel2 from './Carrusel2'

const BestSeller = () => {



    return (
        <div className='mx-[10%] flex flex-col justify-center items-center my-16'>
            <div>
                <h3 className='text-bold text-2xl uppercase '> Best Seller</h3>
                <div className='mx-[40%] my-5'>
                    <div className='border-b border-6 h-2 border-gray-900' />
                </div>
            </div>

            <Carrusel2 />



        </div>
    )
}

export default BestSeller