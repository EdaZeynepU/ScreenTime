// import React from 'react'
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ScreenWheel from "../components/ScreenWheel";
import PlaceHolder from "../images/placeholder_top3.png";
function Top3Page() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [BgImages, setimportedImages] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const importedImages = {};
  const params=useParams();
  console.log(params.category);

  useEffect(() => {
    importImages().then(()=>{
      setIsLoaded(true)});
  }, []);


  const importImages = async () => {
    setTimeout(() => {
      
    }, 2000);
    for (let i = 1; i < 4; i++) {
      const importedImage = await import(
        `../images/${params.category}_bg${i}.png`
      );
      importedImages[`photo${i}`] = importedImage.default;
    }
    setimportedImages(importedImages);
  };
  console.log(BgImages);

  const setIndex = (value) => {
    setcurrentIndex((prev) => (3+prev + value) % 3);
    console.log(currentIndex);
  };
  console.log(currentIndex);
  return (
    <div
      style={{
        backgroundImage: isLoaded ? `url(${BgImages["photo" + (currentIndex + 1).toString()]})`:`url(${PlaceHolder})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transitionDuration: "2s",
      }}
      className="top3page-wrapper"
    >
      <div
        style={{
          // background: `linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.4) 100%)`,
          // background: `linear-gradient(0deg, rgba(230, 230, 230, 1) 10%, rgba(230, 230, 230, 0.95) 30%, rgba(255, 255, 255, 0.1) 100%)`,
          width: "100%",
          height: "100vh",
        }}
        className="layer"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
        </Box>
        <ScreenWheel category={params.category} callbackIndex={setIndex} />
      </div>
    </div>
  );
}


export default Top3Page;
