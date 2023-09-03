// import React from 'react'
import {Toolbar,AppBar,} from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar position="absolute" color="secondary" sx={{justifyContent:"center"}} className="navbar">
  <Toolbar variant="dense">
      <Link to="/" ><p>Home</p></Link>
      <Link to="top-three" ><p>Top 3 selections</p></Link>
      <Link to="top-three" ><p>More</p></Link>
  </Toolbar>
</AppBar>
  )
}

export default Navbar