import Image from 'next/image'
import React from 'react'

export const TeamCard = ({img,name,job}:any) => {
  return (
    <>
    <div className=" w-full flex flex-col sm:w-6/12 md:w-4/12 h-full">
              <div className="bg-white rounded-xl flex flex-col px-5 w-full h-full relative ">
                <div className="flex translate-y-[-60px] mb-[-60px]">

                <div className="overflow-hidden rounded-[1000px]  w-full md:w-9/12 lg:w-10/12 m-auto border-4 border-neutral-300">
                  <Image
                    src={img}
                    quality={100}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    alt="LM Tech"
                    />
                </div>
                    </div>
                <span className="text-xl flex mt-5 justify-center font-bold monstserrat">{name}</span>
                <span className=" text-base flex mt-2 mb-10 md:mb-5 justify-center font-medium md:font-normal monstserrat text-slate-900">{job}</span>
              </div>
              
                <div className="hidden md:block  h-[70px] reflejo3 w-full flex"></div>
              
            </div>
                    </>
  )
}
