import Image from "next/image"
import { AiFillHtml5 } from 'react-icons/ai'
import {  DiCss3} from 'react-icons/di'
import {  BsBootstrap} from 'react-icons/bs'
import {  SiTailwindcss} from 'react-icons/si'
import {  DiSass} from 'react-icons/di'
import {  DiJavascript1} from 'react-icons/di'
import {  DiReact} from 'react-icons/di'
import {  SiNextdotjs} from 'react-icons/si'

export default function Skills()
{
    return(
        <div className="">
            <div className="bg-[#EDF7FA]">
                <div className="container mx-auto px-6 p-10">
                    <h3 className="text-[22px] text-headers mb-4">My Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
                    <div className="hover:bg-[#f06529] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <AiFillHtml5 className="group-hover:text-white duration-300 text-[#f06529] text-[60px]"/>
                    </div>
                    <div className="hover:bg-[#66D3FA] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <DiCss3 className="group-hover:text-white duration-300 text-[#66D3FA] text-[60px]"/>
                    </div>
                    <div className="hover:bg-[#553C7B] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <BsBootstrap className="group-hover:text-white duration-300 text-[#553C7B] text-[60px]"/>
                    </div>
                    <div className="hover:bg-[#2596be] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <SiTailwindcss className="group-hover:text-white duration-300 text-[#2596be] text-[60px]"/>
                    </div>
                    <div className="hover:bg-[#CD6799] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <DiSass className="group-hover:text-white duration-300 text-[#CD6799] text-[60px]"/>
                    </div>
                    <div className="hover:bg-[#f0db4f] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <DiJavascript1 className="group-hover:text-white duration-300 text-[#f0db4f] text-[60px]"/>
                    </div>
                    <div className="hover:bg-[#61DBFB] duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <DiReact className="group-hover:text-white duration-300 text-[#61DBFB] text-[60px]"/>
                    </div>
                    <div className="hover:bg-black duration-300 hover:scale-105 group h-[120px] rounded-[5px] bg-white py-5 px-1 border-[2px] flex items-center justify-center">
                        <SiNextdotjs className="group-hover:text-white duration-300 text-[black] text-[60px]"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}