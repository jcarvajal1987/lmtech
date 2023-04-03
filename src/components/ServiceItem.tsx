import Link from 'next/link'
import { BiChevronRight } from "react-icons/bi";


export const ServiceItem = ({children,title,description}:any) => {
    
  return (
    <>
        <div className=" flex flex-col text-center md:text-left ">
              {/* <Image priority src="/logo.svg" fill alt="LM Tech" /> */}
              {/* <img className="w-full max-w-[110px] md:max-w-[56px] m-auto md:m-0" src={props.img} alt="" /> */}
              <div className='flex m-auto md:m-0'>

                <span className='p-2 text-neutral-400 bg-neutral-700 rounded-md text-2xl '>
              {children}
                </span>
              </div>


                <div className='h-[52px] items-center mt-2 ms:mt-5 flex justify-center md:justify-start'>
                
              <h1 className="text-2xl  font-semibold leading-tight tracking-tight sm:text-3xl">{title}</h1>
                </div>
              <p className="pt-1 flex-1  tracking-tight text-lg sm:text-lg font-normal text-stone-400">
                {description}
              </p>
              <div className="flex flex-col md:flex-row  md:p-0 w-full  gap-4  mt-4">
                <Link
                  href={"/"}
                  className="m-auto md:mx-0  font-normal text-xl flex items-center rounded-md  text-secondary "
                >
                  Ver Más <span className='text-2xl pt-[2px]'><BiChevronRight/></span>
                </Link>
              </div>
            </div>
    </>
  )
}
