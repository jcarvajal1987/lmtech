import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";

import fundacion from "../../public/fundacion.jpg";
import foco from "../../public/foco.jpg";
import Lifting from "../../public/lifting.svg";
import Implementation from "../../public/implementation.svg";
import useScreenSize from "./useScreenSize";
import { useRef, useState, useEffect } from "react";
import { ItemCarouselNosotros } from "./ItemCarouselNosotros";
import Image from "next/image";

const slides = [
  {
    icon: foco,
    button:"Nuestro Foco",
    title: "Nuestro foco",
    text: "Nuestra declaración de intenciones y ámbito donde queremos movernos, es trabajando con pequeñas y medianas empresas, que vean en la tecnología un proceso de cambio interno y de mejora en los servicios para sus clientes. También que nos permita generar un real aporte a la sociedad y el país, mejorando la conectividad y creando herramientas para el desarrollo de la sociedad en su conjunto.",
  },
  {
    icon: fundacion,
    button:"Fundación",
    title: "Fundación",
    text: "A mediados del año 2018 nos propusimos trabajar en el desarrollo tecnológico, utilizando espacios donde no llegan las grandes consultoras de TI, para poder apoyar y ayudar a negocios que al igual que nosotros quieren crecer y tienen necesidades en software y hardware para mejorar sus procesos.",
  },
];

export const CarouselNosotros = () => {
  const [rem, setRem] = useState("1rem");
  const [active, setActive] = useState(0);

  const ref2 = useRef<any | null>(null);
  const ref = useRef<any | null>(null);

  const { width } = useScreenSize();

  useEffect(() => {
    // 👉️ TypeScript knows that ref is not null here

    console.log();
    if (ref2.current.clientWidth > 1000) {
      setRem("2%");
    } else {
      setRem("0");
    }
  }, [width]);

  const options: Options = {
    arrows: false,
    speed: 700,
    padding: rem,
    pagination: false,
  };
  const handleThumbs = (id: number) => {
    if (typeof ref.current.go !== "undefined") {
      ref.current.go(id);
      setActive(id);
    }
  };

  return (
    <>
      <div ref={ref2} className="wrapper  flex flex-col">
        <ul
          className="flex flex-col md:flex-row
        m-auto gap-4 mb-10"
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`cursor-pointer text-lg font-bold h-[60px] w-[200px] rounded-[60px] montserrat justify-center items-center flex  ${
                active == index ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => handleThumbs(index)}
            >
              {slide.button}
            </li>
          ))}
        </ul>

        <Splide
          ref={ref}
          onMove={(splide) => {
            handleThumbs(splide.index);
          }}
          options={options}
          aria-label="My Favorite Images"
        >
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <ItemCarouselNosotros icon={slide.icon} title={slide.title} text={slide.text} index={index} />
              
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};
