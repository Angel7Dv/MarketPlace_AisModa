import React, { useRef } from 'react'

const Carrusel = () => {
    const slider = useRef()
    const images = [
        "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp",
        "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.webp"
    ];
    const background = "https://static.wixstatic.com/media/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_223,h_298,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_df1129cff14a498db09ae503498d60e6~mv2_d_2487_3298_s_4_2.webp"
    return (
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center w-[80%] md:h-full'>
                <button className='mx-2' onClick={() => slider.current.scrollLeft -= 200}>
                    <svg class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path></svg>
                </button>
                <div ref={slider} class='snap-x overflow-x-hidden scroll-smooth w-1/3 sm:w-2/3 md:w-full h-full flex items-center justify-start'>
                    {images.map((e, i) => (
                        <div key={i} className='snap-start flex flex-col flex-shrink-0  mx-4'>
                            <div className='group flex flex-col items-center justify-end mb-4'  >
                                <img src={e} alt='black chair and white table'
                                    className='object-cover object-center w-full' />
                                <div className='hidden group-hover:flex items-center justify-center bg-white w-full text-center -mt-14 py-4 '>
                                    <h2 className=' text-lg'>Quick View</h2>
                                </div>

                            </div>
                            <div className='text-center py-2 flex flex-col'>
                                <span>im a product</span>
                                <span className='text-red-500'>200$</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='mx-2' onClick={() => slider.current.scrollLeft += 200}>
                    <svg class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path></svg>
                </button>
            </div>
        </div>
    )
}
export default Carrusel