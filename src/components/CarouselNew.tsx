import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { ItemCarousel } from "./ItemCarousel";
import Search from "../../public/search.svg";
import Lifting from "../../public/lifting.svg";
import Code from "../../public/code.svg";
import Implementation from "../../public/implementation.svg";
import useScreenSize from "./useScreenSize";
import { useRef, useState, useEffect } from "react";

const slides = [
  {
    icon: Lifting.src,
    title: "Levantamiento",
    text: "Nos interiorizamos en tu negocio para entender tus procesos y reconocer tus oportunidades, utilizando las metodologías de diseño más modernas para realizar el proyecto que desees.",
  },
  {
    icon: Search.src,
    title: "Análisis de Procesos",
    text: "Reconocidas tus necesidades, realizamos un análisis técnico que se ajuste a tu negocio, considerando la inversión prevista y generando la solución más viable y al alcance de tu negocio.",
  },
  {
    icon: Code.src,
    title: "Desarrollo Tecnológico",
    text: "Utilizamos las tecnologías más recientes para desarrollar tus proyectos, tanto a nivel de software como de hardware. Explora los recursos disponibles en la nube con nosotros, y lleva tu negocio a un siguiente nivel.",
  },
  {
    icon: Implementation.src,
    title: "Implementación",
    text: "Tus usuarios o clientes tendrán el apoyo y el tiempo necesario para implementar las nuevas tecnologías. Con procesos de aprendizajes rápidos y desarrollos intuitivos.",
  },
];

export const CarouselNew = () => {
  const [rem, setRem] = useState("1rem");
  const [active, setActive] = useState(0);

  const ref2 = useRef<any | null>(null);
  const ref = useRef<any | null>(null);

  const { width } = useScreenSize();

  useEffect(() => {
    // 👉️ TypeScript knows that ref is not null here

    console.log();
    if (ref2.current.clientWidth > 1000) {
      setRem("23%");
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
          className="flex
        m-auto gap-4 mb-10"
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`cursor-pointer text-lg font-bold h-[60px] w-[60px] rounded-[60px] montserrat justify-center items-center flex  ${
                active == index ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => handleThumbs(index)}
            >
              {index + 1}
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
              <ItemCarousel icon={slide.icon} title={slide.title} text={slide.text} index={index} />
              <div className="px-2 md:px-10">
                <div className="reflejo"></div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};
