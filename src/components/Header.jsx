import React from 'react'

const Header = () => {
    return (
        <div class="
    min-w-full 
    bg-[url('https://static.wixstatic.com/media/ea71bb_f6afb11f2c8f406ca1c8993c2eca99e7~mv2_d_11495_6131_s_4_2.jpg/v1/fill/w_980,h_671,al_t,q_85,usm_0.66_1.00_0.01/ea71bb_f6afb11f2c8f406ca1c8993c2eca99e7~mv2_d_11495_6131_s_4_2.webp')]
    bg-no-repeat bg-cover min-w-full min-h-screen 
    
    "
        >

            <div class="flex justify-center items-center flex-col bg-gray-800 bg-opacity-30  absolute w-full h-full ">

                <h1 className='text-white text-6xl font-semibold'>MarketPlace</h1>

                <div class="flex justify-center items-center">

                    <button class="group-hover:bg-opacity-90 hover:bg-gray-100 p-6 px-12 mt-8 p-3 border-2 border-white 
                    ">
                        <span class="text-md font-semibold text-gray-50 hover:text-red-600">

                        Shop the collection
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header