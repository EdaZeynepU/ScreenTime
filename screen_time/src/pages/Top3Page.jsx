// import React from 'react'
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ScreenWheel from "../components/ScreenWheel";
import PlaceHolder from "../images/placeholder_top3.png";
import  Top3Shows from "../assets/ScreenDatas";


function Top3Page() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [BgImages, setimportedImages] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [top3CurrentList, setTop3CurrentList] = useState({})
  const importedImages = {};
  
  const params=useParams();

  useEffect(() => {
    importImages().then(()=>{
      setIsLoaded(true)});
      setTop3CurrentList(Top3Shows[params.category]);
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

  const setIndex = (value) => {
    setcurrentIndex((prev) => (3+prev + value) % 3);
  };

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
        <ScreenWheel category={params.category} callbackIndex={setIndex} currentShow={top3CurrentList[currentIndex]} />
      </div>
    </div>
  );
}


export default Top3Page;
