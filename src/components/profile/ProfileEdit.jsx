import React from 'react'

const Profile_edit = () => {
  return (
    <div className='text-gray-600 font-normal container mx-auto  m-16 px-24'>
    <h1 className='text-3xl'>My Acount </h1>
    <p className='py-4 border-b'>View and edi personal acount</p>
    <p className=' mt-8 text-xl'>Login Email:</p>
    <p>angelriera1796@gmail.com</p>
    <div className='mt-8 container my-6 h-72 flex flex-wrap justify-around   '>
        <div clas='w-full border flex mx-4'><label for='f_name' className='py-4'> First name</label>
        <input type='text'
                name='f_name' id='f_name' className='my-2 p-2  text-md flex border w-96'/></div>
        <div clas='w-full border flex mx-4'><label for='f_name' className='py-4'> First name</label>
        <input type='text'
                name='f_name' id='f_name' className='my-2 p-2  text-md flex border w-96'/></div>
        <div clas='w-full border flex mx-4'><label for='f_name' className='py-4'> First name</label>
        <input type='text'
                name='f_name' id='f_name' className='my-2 p-2  text-md flex border w-96'/></div>
        <div clas='w-full border flex mx-4'><label for='f_name' className='py-4'> First name</label>
        <input type='text'
                name='f_name' id='f_name' className='my-2 p-2  text-md flex border w-96'/></div>
    </div>
</div>
  )
}

export default Profile_edit