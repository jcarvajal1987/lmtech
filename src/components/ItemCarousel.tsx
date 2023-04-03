import React from 'react'

export const ItemCarousel = ({children,icon,title,text,index}:any) => {
  return (
    <div className="h-full px-2 md:px-10 min-w-full ">
                  <div className="card md:text-left">
                    <div className='flex flex-col md:flex-row w-full md:items-end'>
                        <span className='justify-center flex  text-blue-600'>

                        <img className="md:mr-3 mb-2" width={23} src={icon} alt="" />
                        </span>
                        <span className="card-title flex-1">
                        {title}
                        </span>
                        <span className='hidden md:block text-5xl font-bold text-neutral-400'>0{index + 1}</span>

                    </div>
                    <p className='text-lg md:text-base font-medium mt-3 flex'>{text}</p>
                  </div>
                </div>
  )
}
