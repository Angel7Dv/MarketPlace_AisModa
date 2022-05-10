import React from 'react'

const Galery2 = () => {
    const images = [
        {
            name: "Family Owned",
            title: "BRAND",
            img: "https://static.wixstatic.com/media/ea71bb_a098804073f8481dab7214af6904a585~mv2_d_4601_3315_s_4_2.jpg/v1/fill/w_225,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_a098804073f8481dab7214af6904a585~mv2_d_4601_3315_s_4_2.jpg",
            link: "Read our story"
        },
        {
            name: "Hand Crafted",
            title: "PRODUCTS",
            img: "https://static.wixstatic.com/media/ea71bb_049132934a484c96b5c05403933e4539~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_218,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_049132934a484c96b5c05403933e4539~mv2_d_6720_4480_s_4_2.jpg",
            link: "About our leather"
        },
        {
            name: "Created in the",
            title: "USA",
            img: "https://static.wixstatic.com/media/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6~mv2_d_1984_1441_s_2.jpg/v1/fill/w_218,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6~mv2_d_1984_1441_s_2.jpg",
            link: "Learn our process"
        },
        
        
    ]
    return (
        <div className='my-12'>
            <div className='flex md:flex-row flex-col justify-around'>
                {images.map((e,i) => (
                    <div key={i} className='group relative w-auto flex h-full items-center justify-center flex-col flex-shrink-0'>
                        <img src={e.img} alt={e.title} className='object-cover object-center w-[20rem]' />

                        <div className='bg-gray-800 bg-opacity-30  absolute w-full h-full p-6'>
                            <div className='flex flex-col h-full items-center justify-center '>
                                <h3 className='text-center text-md italic lg:text-lg font-semibold leading-5 text-white dark:text-gray-50'>
                                {e.name}
                                </h3>
                                <h3 className='text-center text-xl lg:text-2xl font-semibold leading-5 text-white dark:text-gray-50'>
                                {e.title}
                                </h3>
                                <h3 className='mt-5 underline text-center text-sm lg:text-md font-semibold leading-5 text-white dark:text-gray-50'>
                                {e.link}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Galery2