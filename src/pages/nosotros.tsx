
import Link from "next/link";

import { CarouselNosotros } from "../components/CarouselNosotros";

import { Footer } from "../components/Footer";

import { Team } from "../components/Team";

export default function Nosotros() {
  return (
    <>
    <div className="flex flex-col flex-1  bg-gradient-to-b from-[#B9BACF] to-[#E5E6F9]">

      <section className="flex flex-col flex-1 justify-center  py-5 md:pt-16 text-black text-center">
        <div className="py-10 px-5 flex flex-1 w-full items-center flex-col ">
          <div className="w-full md:w-11/12 m-auto">
            <h1 className="montserrat text-4xl font-bold  mb-4 sm:text-5xl text-black-2 tracking-tight">
              Queremos ser parte de tu desarrollo, conoce nuestra organización.
            </h1>
            <p className=" pb-7 md:p-7 md:w-11/12 lg:w-10/12 m-auto  text-xl sm:text-xl font-medium md:font-normal ">
              En LM Tech nos enfocamos en trabajar en el desarrollo de tu negocio, pensamos que nuestro crecimiento
              puede ir de la mano con el de tu empresa u organización. Por eso queremos que nos conozcas y avancemos
              juntos en la implementación de la tecnología que te mereces.
            </p>
          </div>
        </div>
        <CarouselNosotros />
      </section>

      <section className="flex flex-col flex-1 justify-center pb-5 md:pt-5 md:pb-20 text-black text-center">
        <div className="pb-10  px-5 flex flex-1 w-full items-center flex-col ">
          <div className="w-full md:w-11/12 m-auto">
            <h1 className="montserrat text-4xl font-bold  mb-4 sm:text-5xl text-black-2 tracking-tight">
              Nuestro equipo
            </h1>
            <p className=" pb-7 md:p-7 md:w-11/12 lg:w-10/12 m-auto  text-xl sm:text-xl font-medium md:font-normal ">
            Colaboradores dispuestos a conocer y trabajar a tu lado para avanzar juntos. Nuestros líderes están dispuestos a atenderte:
            </p>
          </div>
        </div>

            <Team />
        

        <div className="w-full max-w-[1100px] my-20 m-auto px-5">
          <div className="bg-black-2 rounded-lg flex flex-col items-center md:flex-row justify-between text-white px-10 py-10 md:py-5  gap-4 md:gap-10 ">
            <div className="items-center  text-3xl montserrat font-bold sm:whitespace-normal  lg:whitespace-nowrap">
              Productos
            </div>
            <div className="items-center text-left">
            Conoce las características de nuestros productos y encuentra el que se adapta mejor a las necesidades que requiere tu negocio.
            </div>
            <div className="items-center flex w-full md:w-auto">
              <Link
                href={"/nosotros"}
                className="text-xl items-center font-semibold rounded-md text-center px-10 py-2 w-full bg-secondary text-black"
                >
                Productos
              </Link>
            </div>
          </div>
        </div>
      </section>
                </div>
      <Footer />
    </>
  );
}
