
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";

const options: Options = {
  gap    : '1rem',
  arrows: false,
  
};

const slides = [
  {
    icon: "build",
    text: "Building robust software solutions.",
  },
  {
    icon: "bug_report",
    text: "Expert at debugging complex issues.",
  },
  {
    icon: "palette",
    text: "User interface design and animation.",
  },
  {
    icon: "lock",
    text: "Implementing secure applications.",
  },
  
];

export const Carousel = () => {
  return (
    <>
      <div className="wrapper">
          <Splide  options={options} active={3} aria-label="My Favorite Images">
            {slides.map((slide,index) => (
              <SplideSlide key={index} >
                <div className="slide">
                  <div className="card">
                    <span className="material-symbols-outlined">
                      {slide.icon}
                    </span>
                    <p>{slide.text}</p>
                  </div>
                </div>
                <div className="slide espejo">
                  <div className="card">
                    <span className="material-symbols-outlined">
                      {slide.icon}
                    </span>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </SplideSlide>
              
            ))}
            
            
          </Splide>
        
      </div>
    </>
  );
};