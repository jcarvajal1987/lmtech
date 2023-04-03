import React from 'react'
import { TeamCard } from './TeamCard';
import edgar from "../../public/edgar.jpg";
import joan from "../../public/joan.jpg";

export const Team = () => {
    const slides = [
        {
          icon: edgar,
          name:"Edgard Leon",
          job: "Fundador & Director de Redes y Hardware",
          text: "Nuestra declaración de intenciones y ámbito donde queremos movernos, es trabajando con pequeñas y medianas empresas, que vean en la tecnología un proceso de cambio interno y de mejora en los servicios para sus clientes. También que nos permita generar un real aporte a la sociedad y el país, mejorando la conectividad y creando herramientas para el desarrollo de la sociedad en su conjunto.",
        },
        {
            icon: joan,
            name:"Joan Mortheiru",
            job: "Fundador & Director de Software y Plataformas",
            text: "Nuestra declaración de intenciones y ámbito donde queremos movernos, es trabajando con pequeñas y medianas empresas, que vean en la tecnología un proceso de cambio interno y de mejora en los servicios para sus clientes. También que nos permita generar un real aporte a la sociedad y el país, mejorando la conectividad y creando herramientas para el desarrollo de la sociedad en su conjunto.",
          },
      ];
  return (
    <div className="w-full max-w-[900px] m-auto px-10 mt-10">
          <div className="flex flex-col items-center gap-28 md:gap-10 md:flex-row justify-center h-full">
          {slides.map((slide, index) => (
              <TeamCard key={index} img={slide.icon} name={slide.name} job={slide.job}/>
            
          ))}
          </div>
        </div>
  )
}
