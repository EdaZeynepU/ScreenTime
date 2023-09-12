import { useEffect, useState } from "react";
import {getTopRated} from "../data/ApiFetching";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../components/CarouselItem";

const Populer = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [popularSeriesData, setPopularSeriesData] = useState([]);
  useEffect(() => {
    getTopRated("movie")
      .then((result) => {
        console.log(result);
        setPopularMovieData(result);
      })
      .catch((error) => {
        console.error(error);
      });
      getTopRated("tv")
      .then((result) => {
        console.log(result);
        setPopularSeriesData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1800 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1300 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1300, min: 900 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 3,
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="populer-page" style={{ margin: "100px 0px 40px 0px" }}>
        <h1 className="header1">Populer Films</h1>
        <Carousel
          responsive={responsive}
          partialVisible={true}
          // showDots={true}
          infinite={true}
          removeArrowOnDeviceType={["mobile"]}
          arrows={true}
        >
          {popularMovieData.map((value) => (
            <CarouselItem key={value.id} {...value} />
          ))}
        </Carousel>
        <br />
        <br />
        <h1 className="header1" >Populer Series</h1>
        <Carousel
          responsive={responsive}
          partialVisible={true}
          // showDots={true}
          infinite={true}
          removeArrowOnDeviceType={["mobile"]}
          arrows={true}
        >
          {popularSeriesData.map((value) => (
            <CarouselItem key={value.id} {...value} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Populer;
