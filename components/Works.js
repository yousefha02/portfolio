import works from "../Data/works";
import Image from "next/image";
import {useRouter} from 'next/router'
export default function Works()
{
    const router = useRouter();
    return(
        <div id="works">
            <div className="container mx-auto py-[66px] px-6">
                <h3 className="text-[22px] text-headers mb-2">Featured works</h3>
                <div>
                    {
                        works.map((box,index)=>
                        {
                            return <div key={box.id} className="flex sm:flex-row flex-col py-5 gap-4 sm:gap-10 border-b-[1px] border-[#E0E0E0]">
                                <div className="text-center"><Image alt="" className=" rounded-[6px]" src={`/images/${box.image}`} width="360px" height="230px"/></div>
                                <div className="sm:text-left text-center">
                                    <h2 className="text-[30px] mb-2 text-headers font-semibold">{box.title}</h2>
                                    <p className="text-[16px] text-headers mb-3">{box.desc}</p>
                                    <button 
                                    onClick={()=>router.push(box.link)}
                                    className=" bg-primary text-white p-2 rounded">View Website</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}