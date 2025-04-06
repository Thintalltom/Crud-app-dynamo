
import FrameImg from "../assets/Frame.svg";
const Navbar = () => {
  return (
    <div>
        <div className='border-b-[0.5px] flex sticky w-full   bg-white items-center shadow-sm p-[10px]'>
            <img src={FrameImg} alt="" className='w-[5%] h-[5%]' />
            <p className='font-bold'>DynamoDB User Management </p>
        </div>
    </div>
  )
}

export default Navbar