import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative ">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

    <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={5000}
    >
    <div>
   <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
    </div>
    <div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt="" />
    </div>
    <div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" alt="" />
    </div>

    </Carousel>
      
    </div>
  )
}

export default Banner
