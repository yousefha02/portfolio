import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
export default function Contact()
{
    return(
        <div id='contact'>
            <div className='contianer mx-auto px-6 pt-[30px] pb-[40px] text-center'>
                <div className='flex gap-8 justify-center mb-5'>
                    <Link href={'https://www.facebook.com/profile.php?id=100012907182033'}>
                        <span className='w-[40px] h-[40px] flex justify-center items-center text-white rounded-full p-3 bg-[#428bca]'>
                            <FaFacebookF className='cursor-pointer text-[24px]'/>
                        </span>
                    </Link>
                    <Link href={'https://www.instagram.com/yousef_7esham/'}>
                        <span className='w-[40px] h-[40px] flex justify-center items-center text-white rounded-full p-3 bg-[#8a3ab9]'>
                            <BsInstagram className='cursor-pointer text-[24px]'/>
                        </span>
                    </Link>
                    <Link href="https://wa.me/+972592374719">
                        <span className='w-[40px] h-[40px] flex justify-center items-center text-white rounded-full p-3 bg-[#25d366]'>
                            <BsWhatsapp className='cursor-pointer text-[24px]'/>
                        </span>
                    </Link>
                    <Link href="mailto:yousefha2029@gmail.com">
                        <span className='w-[40px] h-[40px] flex justify-center items-center text-white rounded-full p-3 bg-[#db4437]'>
                            <GrGoogle className='cursor-pointer text-[24px]'/>
                        </span>
                    </Link>
                </div>
                <h4 className='text-[14px] text-headers'>Copyright &copy; 2022 All rights reserved</h4>
            </div>
        </div>
    )
}