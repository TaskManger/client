import React from 'react'
import { CgProfile } from "react-icons/cg";
import { PiCardsThreeBold } from "react-icons/pi";
const Topnav = () => {
  return(
  <div className='h-20 bg-blue-950/90 w-[98%] flex self-center justify-self-center rounded-xl justify-between items-center p-2 custom shadow-xl'>
    <div className='h-full w-20'><CgProfile className='h-full w-full p-4'/></div>
    <div className='h-full w-100 bg-blue-200 rounded-md p-2 text-center text-zinc-700 font-semibold'>This is Notificaiton Panel</div>
    <div className='h-full w-20'><PiCardsThreeBold className='h-full w-full p-4'/></div>
  </div>
)}
export default Topnav
