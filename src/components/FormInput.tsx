import React from 'react'

const FormInput = () => {
  return (
    <div className='h-[50vh]  p-[20px]' >
        <div className='border-[0.5px] flex flex-col gap-[15px] shadow-sm p-[20px] rounded-[2px] bg-white h-[100%] '>
        <p>Add New User</p>
        <div className='grid gap-[10px] grid-rows-2 h-[70%] grid-flow-col'>
            <div className=' flex flex-col gap-[10px]'>
            <p className='text-xs'>Username</p>
            <input type='text' className='border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]' placeholder=' Enter Username'/>
            </div>
            <div className=' flex flex-col gap-[10px]'>
            <p className='text-xs'>First Name</p>
            <input type='text' className='border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]' placeholder=' Enter FirstName'/>
            </div>
            <div className=' flex flex-col gap-[10px]'>
            <p className='text-xs'>Last Name</p>
            <input type='text' className='border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]' placeholder=' Enter LastName'/>
            </div>
            <div className=' flex flex-col gap-[10px]'>
            <p className='text-xs'>Email</p>
            <input type='text' className='border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]' placeholder=' Enter Email'/>
            </div>
        </div>

        <button className='bg-blue-600 text-white font-bold p-[5px] rounded shadow-sm w-fit '>Add User</button>
        </div>

    </div>
  )
}

export default FormInput