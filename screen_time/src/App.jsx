// import { useState } from "react";
import Navbar from "./components/AppBar";
// import AppBar from "./components/AppBar";
import "./css/App.css";
import "./css/ScreenWheel.css";
import Top3SelectionPage from "./pages/Top3SelectionPage";
// import ScreenWheel from "./components/ScreenWheel";
import Top3Page from "./pages/Top3Page";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Populer from "./pages/Populer";
import WatchListPage from "./pages/WatchListPage";



function App() {

  return (
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/top-three" element={<Top3SelectionPage/>} >
          <Route path="cartoon_comedy" element={<Top3Page category="cartoon_comedy"/>} /> */}
          {/* <Route path="/top-three" element={<Top3Page category="comedy_series"/>} />
          <Route path="/top-three" element={<Top3Page category="anime"/>} /> */}
        {/* </Route> */}
        <Route path="/top-three" element={<Top3SelectionPage/>} />
        <Route path="/top-three/:category" element={<Top3Page category/>} />
        <Route path="/populer" element={<Populer/>} />
        <Route path="/watch-list" element={<WatchListPage/>} />
      </Routes>
      </div>
  );
}

export default App;
 