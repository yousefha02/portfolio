import { useState } from "react"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar()
{
    let[showNav,setShowNav]=useState(true)
    return(
        <nav className="fixed top-0 w-full z-30 h-[66px]">
            <div className="contianer mx-auto px-6">
            <div>
                <div className="flex sm:hidden justify-end h-[66px]">
                    <button onClick={()=>setShowNav(back=>!back)} className="w-[20px]"><FontAwesomeIcon 
                    icon={!showNav?faClose:faBars} 
                    className=" text-headers text-[30px]"/></button>
                </div>
                <ul className={`${showNav?"hidden":"flex"} shadow sm:shadow-none flex-col sm:flex-row items-center sm:h-[66px] sm:flex gap-5 sm:gap-10 justify-end sm:relative absolute left-0 top-[66px] sm:top-0 bg-primary sm:bg-white w-full text-center sm:p-3 p-5 `}>
                    <Link href="#home"><li className="text-white cursor-pointer sm:text-headers text-[18px] font-semibold">Home</li></Link>
                    <Link href="#works"><li className="text-white cursor-pointer sm:text-headers text-[18px] font-semibold">Works</li></Link>
                    <Link href="#contact"><li className="text-white cursor-pointer sm:text-headers text-[18px] font-semibold">Contact</li></Link>
                </ul>
            </div>
            </div>
        </nav>
    )
}