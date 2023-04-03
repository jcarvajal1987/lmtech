
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { ItemCarousel } from "./ItemCarousel";
import { BsCode} from "react-icons/bs";
import { IoMdArrowUp} from "react-icons/io";
import { BiSearch} from "react-icons/bi";
import { TbUserCheck} from "react-icons/tb";
import Search from "../../public/search.svg";
import Lifting from "../../public/lifting.svg";
import Code from "../../public/code.svg";
import Implementation from "../../public/implementation.svg";

const options: Options = {
  arrows: false,
  speed: 2000,
  
};

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

export const Carousel = () => {
  return (
    <>
    <style jsx>{`
        .splide__slide{
          grid-template-rows: 1fr auto;
            display: grid;
        }
        
        .splide__pagination li {
          display: inline-block;
          line-height: 1;
          list-style-type: none;
          margin: 0;
          pointer-events: auto;
        }
        .splide__pagination__page {
          background: #fff!important;
          border: 0;
          color: #000!important;
          border-radius: 50%;
          display: inline-block;
          height: 50px!important;
          margin: 3px;
          opacity: 1!important;
          padding: 0;
          position: relative;
          transition: transform .2s linear;
          width: 50px!important;
          font-weight: 600;
          font-family: '__Montserrat_8135ef', '__Montserrat_Fallback_8135ef';
          font-size: 17px;
        }
        .splide__pagination__page.is-active {
          transform: scale(1)!important;
          background-color: #000!important;
          color: #ffffff!important;
          border-radius: 30px!important;
        }
        .splide__pagination {
          bottom: 0.5em;
          left: 0;
          padding: 0 1em;
          position: absolute;
          right: 0;
          z-index: 1;
        }
        .splide__pagination {
          counter-reset: pagination-num;
          top: -106px;
          display: block!important;
        
        }
        
        
        .splide__pagination__page:before {
          counter-increment: pagination-num;
          content: counter( pagination-num );
        }
        
        .splide__track{
          padding-left: 25%!important;
          padding-right: 25%!important;
        }
        
        .slide, .card{
          height: 100%;
          
        }
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          background: #ffffff;
          padding: 27px 55px 40px 55px;
          border-radius: 15px;
          
        }
        
        .card-title{
          font-size: 1.6rem;
          
            font-weight: 700;
        }
        
        
        
        @media (max-width:720px) {
          .card{
            padding: 37px 30px 50px 30px;
          }
          .card-title{
            line-height: 31px;
          }
        }
        @media (max-width:920px) {
          
          .splide__track{
            padding-left: 7%!important;
            padding-right: 7%!important;
          }
        }
        
        .espejo{
          margin-top: 10px;
          -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        -ms-filter: "FlipV";
        filter: FlipV;
        -webkit-mask-image: linear-gradient(to bottom , transparent 70%, rgb(0 0 0 / 47%) 100%);
          mask-image: linear-gradient(to bottom , transparent 70%, rgba(255, 255, 255, 0.47) 100%);
          
        }
        
        .reflejo{
          margin-top: 10px;
          width: 100%;
          height: 70px;
          display: block;
          background-image: linear-gradient(to top, transparent, rgba(255, 255, 255, 0.47) 100%);
          border-radius: 15px;
        }
      `}</style>
      <div className="wrapper mt-20 ">
          <Splide  options={options}  aria-label="My Favorite Images">
            {slides.map((slide,index) => (
              <SplideSlide key={index} >
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