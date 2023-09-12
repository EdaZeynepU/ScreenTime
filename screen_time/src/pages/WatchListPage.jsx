import {
  ButtonGroup,
  Button,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getItems, deleteFromFavs } from "../data/StoragePart";
import FavItem from "../components/FavItem";
const WatchListPage = () => {
  const [datas, setDatas] = useState(Object.values(getItems()));
  const [datasMovies, setDatasMovies] = useState(Object.values(getItems()).filter((value)=>value.title));
  const [datasSeries, setDatasSeries] = useState(Object.values(getItems()).filter((value)=>value.original_name));
  const [currentSelection, setCurrentSelection] = useState(Object.values(getItems()));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDatasMovies(Object.values(datas).filter((value)=>value.title));
    setDatasSeries(Object.values(datas).filter((value)=>value.original_name));
    setDatas(Object.values(getItems()));
  }, [currentSelection])

  function deleteFav(id) {
    deleteFromFavs(id);
    setCurrentSelection(Object.values(getItems()))
    // window.location.reload(); 
  }
  

  return (
    <Box display={"flex"} flexDirection={"column"}s>
      <Box
        sx={{
          background: "linear-gradient(rgba(150,150,150,0.5),transparent)",
          height: "150px",
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      ></Box>

      <Box sx={{ margin: "110px auto 20px auto" }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            variant={currentIndex == 0 ? "contained" : "outlined"}
            onClick={() => {setCurrentSelection(datas);setCurrentIndex(0)}}
          >
            Both
          </Button>
          <Button
            variant={currentIndex == 1 ? "contained" : "outlined"}
            onClick={() => {setCurrentSelection(datasMovies);setCurrentIndex(1)}}
          >
            Movies
          </Button>
          <Button
            variant={currentIndex == 2 ? "contained" : "outlined"}
            onClick={() => {setCurrentSelection(datasSeries);setCurrentIndex(2)}}
          >
            Series
          </Button>
        </ButtonGroup>
      </Box>

      <Box display={"flex"} sx={{flexWrap:"wrap",margin:"0 auto",width:"%90",justifyContent:"center"}}>
        {currentSelection.map((element) => (
          <FavItem key={element.key} element={element} deleteShow={deleteFav}/>
        ))}
      </Box>
    </Box>
  );
};

export default WatchListPage;
