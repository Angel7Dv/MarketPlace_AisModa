import React from 'react'

const Scroll = () => {
    const items = [
        {
            name: "MINI LEATHER GOODS",
            price: 100,
            bg: "https://static.wixstatic.com/media/ea71bb_a05db5ea5f974ff9bec21dc40805ef6e~mv2_d_5358_3788_s_4_2.jpg/v1/fill/w_490,h_680,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_a05db5ea5f974ff9bec21dc40805ef6e~mv2_d_5358_3788_s_4_2.jpg",
            img: "https://static.wixstatic.com/media/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.jpg/v1/fill/w_432,h_280,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_c8f5b35dd1674a38b347648acae300a2~mv2_d_3078_4139_s_4_2.webp"
        },
        {
            name: "LEATHER BELTS",
            price: 100,
            bg: "https://static.wixstatic.com/media/ea71bb_542fc169f85a48afa085a156d987dea1~mv2_d_2795_1985_s_2.jpg/v1/fill/w_441,h_612,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_542fc169f85a48afa085a156d987dea1~mv2_d_2795_1985_s_2.jpg",
            img: "https://static.wixstatic.com/media/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.jpg/v1/fill/w_432,h_256,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_a487065a9eda45c6ba662246a7631d23~mv2_d_3613_4860_s_4_2.webp"
        },
    ]
    return (
        <>

            {items.map((e, i) => (
                <div className={i % 2 ? 'flex flex-col md:flex-row justify-center' : 'flex flex-col md:flex-row-reverse justify-center'}>

                    <div className='md:w-1/2 '>

                        <div className='group flex items-center justify-center flex-col relative
                    bg-no-repeat bg-screen bg-cover  bg-center
                    h-[25rem] md:h-full  w-auto'
                            style={{ "backgroundImage": `url('${e.bg}')` }}   >
                            {/* <img src={e.bg} alt={e.name}  className='w-[465px] object-cover object-center object-no-repeat object-fixed' /> */}
                            <h2 className='text-white text-3xl underline underline-offset-2'>{e.name}</h2>

                        </div>
                    </div>

                    <div className='md:w-1/2 h-full py-16 bg-[#F7F2F1]'>
                        <div className='group flex flex-col mb-4 items-center justify-center'  >
                            <img src={e.img} alt={e.name} className='object-cover object-center h-2/3 w-auto' />
                                <h2 className=' text-lg'>Quick View</h2>
                          
                        </div>
                    </div>

                </div>
            ))}


        </>


    )
}

export default Scroll