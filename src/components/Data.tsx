import React from 'react'
import search from '../assets/svg/search.svg'
import add from '../assets/svg/svg.png'
const Data = () => {
  return (
    <div className='h-[70vh]  p-[20px]'>
    <div className='border-[0.5px] p-[20px] flex gap-[5px] flex-col shadow-sm rounded-[2px] bg-white h-[100%] '>
    <p className='font-bold '>Users List</p>
    <div className='w-full bg-zinc-100 h-fit flex p-[5px] '>
        <img src={search} alt='search' className='' />
    <input type='text' placeholder='Search users..' className='text-slate-500 bg-transparent w-full   p-[10px] rounded' />
    </div>
    
    </div>

</div>
  )
}

export default Data