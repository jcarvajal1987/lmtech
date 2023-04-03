import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section className="flex flex-col flex-1 justify-center bg-black-1 px-10 text-black text-center">
        <div className="pt-20 pb-20 flex flex-col md:flex-row gap-20 text-stone-400  max-w-[1100px] m-auto items-start">
          <div className="flex flex-col">
          <img className="w-[150px] mb-8" src="/logo-white-2.svg" alt="" />
          <div className="flex flex-col m-auto w-fit gap-2 text-stone-400 text-lg text-left">
                    {/* <span className="flex flex-row">
                        <img className="w-[13px] mr-3" src="location-gray.svg" alt="location"/>Rucalhue 1709 Las Condes,
                        Santiago, Chile.
                    </span> */}
                    <span className="flex flex-row">
                        <img className="w-[13px] mr-3" src="phone-gray.svg" alt="location"/>(+56) 9 9227 6116.
                    </span>
                    <span className="flex flex-row">
                        <img className="w-[13px] mr-3" src="mail-gray.svg" alt="location"/>info@lmtech.cl
                    </span>
                    
                </div>
          </div>
          <div className=" flex-col flex text-left">
            <span className="text-white montserrat text-2xl font-medium mb-6" >Servicios</span>
            <span className="gap-3 flex flex-col" >

            <Link className="montserrat text-lg"  href={"/"}>
              Redes y Hardware
            </Link>
            <Link className="montserrat text-lg"  href={"/"}>
            Plataformas digitales
            </Link>
            <Link className="montserrat text-lg"  href={"/"}>
            Desarrollo de software  
            </Link>
            </span>
          </div>
          <div className="flex-1 flex-col flex text-left">
            <span className="text-white montserrat text-2xl font-medium" >Conoce nuestros productos y plataformas.</span>
            <span className="montserrat" >
            Cuidamos tu privacidad, nunca compartiremos tu información!.
            </span>
            <input placeholder="Ingresa tu correo electronico" className="mt-7 p-3 bg-black-1 border-0 border-b-[1px] placeholder-stone-400 border-stone-400 focus:outline-none text-xl"/>
            <button className="bg-red-700 mt-7 text-white py-2 px-5 w-full max-w-[200px]">
            Suscribirse
            </button>
            
          </div>

        </div>
        {/* <div className="w-full border-t-[1px] border-stone-600 py-3 text-stone-400">
          copiright LM Tech 2023
        <div className="flex m-auto w-fit gap-10 text-stone-400 ">
                    <p className="flex flex-row">
                        <img className="w-[13px] mr-3" src="location-gray.svg" alt="location"/>Rucalhue 1709 Las Condes,
                        Santiago, Chile.
                    </p>
                    <p className="flex flex-row">
                        <img className="w-[13px] mr-3" src="phone-gray.svg" alt="location"/>(+56) 2 2201 2057.
                    </p>
                    <p className="flex flex-row">
                        <img className="w-[13px] mr-3" src="mail-gray.svg" alt="location"/>info@mcolo.cl www.mcolo.cl
                    </p>
                    
                </div>
        </div> */}
      </section>
  )
}
