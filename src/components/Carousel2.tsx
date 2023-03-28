import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';



export const Carousel2: React.VoidFunctionComponent = () => {
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
        {
          icon: "dns",
          text: "Dev ops and web infrastructure.",
        },
        {
          icon: "person",
          text: "Top-level communication skills.",
        },
        {
          icon: "terminal",
          text: "Coding advanced web applications.",
        },
      ];
  return (
    <div className="wrapper">
      <h2 id="basic-example-heading">Basic Example</h2>

      <Splide
        options={ {
          perPage: 1,
          pagination: true,
          gap    : '1rem',
        } }
        aria-labelledby="basic-example-heading"
        onMoved={ ( splide, newIndex ) => {
          // eslint-disable-next-line
          console.log( 'moved', newIndex );

          // eslint-disable-next-line
          console.log( 'length', splide.length );
        } }
      >
        { slides.map( (slide,index)=> (
          <SplideSlide key={ index }>
            { slide.text }
          </SplideSlide>
        ) ) }
      </Splide>
    </div>
  );
};