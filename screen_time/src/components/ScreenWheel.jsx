// import React from 'react'
import { Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Redo, Undo } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
function ScreenWheel({ category, callbackIndex, currentShow }) {
  const [Images, setimportedImages] = useState({});
  const [transformDeg, setTransformDeg] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const importedImages = {};

  useEffect(() => {
    importImages().then(() => {
      setIsLoaded(true);
    });
  }, []);

  const importImages = async () => {
    for (let i = 1; i < 4; i++) {
      const importedImage = await import(`../images/${category}_${i}.png`);
      importedImages[`photo${i}`] = importedImage.default;
    }
    setimportedImages(importedImages);
  };

  return isLoaded ? (
    <Box style={{ position: "absolute", bottom: 0, width: "100vw" }}>
      <h3
        style={{
          position: "absolute",
          bottom: "30px",
          right: "50%",
          transform: "translate(50%)",
          zIndex: 2,
          color: "white",
        }}
      >
        {currentShow}
      </h3>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <Button
          color="secondary"
          className="prev-next-btn"
          onClick={() => {
            callbackIndex(-1);
            const element = document.getElementById("screen-wheel");
            const newRotation = transformDeg - 120;
            setTransformDeg(newRotation);
            element.style.transform = `rotate(${newRotation}deg)`;
          }}
          variant="contained"
        >
          <Undo fontSize="large"/>
        </Button>
        <Box sx={{}} id="wheel-wrapper">
          <Box sx={{ bgcolor: "" }} id="screen-wheel">
            <Box
              className="screen-element"
              sx={{ backgroundImage: `url(${Images.photo1})` }}
            ></Box>
            <Box
              className="screen-element"
              sx={{ backgroundImage: `url(${Images.photo2})` }}
            ></Box>
            <Box
              className="screen-element"
              sx={{ backgroundImage: `url(${Images.photo3})` }}
            ></Box>
            <Box
              className="screen-element"
              sx={{ bgcolor: "secondary.main" }}
            ></Box>
          </Box>
        </Box>
        <Button
          color="secondary"
          className="prev-next-btn"
          onClick={() => {
            callbackIndex(1);
            const element = document.getElementById("screen-wheel");
            const newRotation = transformDeg + 120;
            setTransformDeg(newRotation);
            element.style.transform = `rotate(${newRotation}deg)`;
          }}
          variant="contained"
        >
                    <Redo fontSize="large"/>
        </Button>
      </Box>
    </Box>
  ) : (
    <div></div>
  );
}

export default ScreenWheel;
