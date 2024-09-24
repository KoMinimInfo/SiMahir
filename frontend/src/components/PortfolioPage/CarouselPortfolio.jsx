import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const slides = [
  { src: "src/assets/bantu-pindahan.svg", alt: "Bantu Pindahan" },
  { src: "src/assets/bersih-rumah.svg", alt: "Bersih Rumah" },
  { src: "src/assets/perbaikan-ac.svg", alt: "Perbaikan AC" },
  { src: "src/assets/perbaikan-rumah.svg", alt: "Perbaikan Rumah" },
];

export default function CarouselPortfolio() {
  return (
    <div className="relative w-60 sm:w-80 md:w-96 -z-10"> 
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
      >
        {slides.map((slide, index) => (
          <Item key={index} slide={slide} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({ slide }) {
  return (
    <Paper className="overflow-hidden shadow-none w-full"> 
      <img 
        src={slide.src} 
        alt={slide.alt} 
        className="w-full h-auto object-contain" 
      />
    </Paper>
  );
}
