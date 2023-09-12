// import React from 'react'
import { Toolbar, AppBar, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/film_logo.png";
import { ArrowUpwardSharp, ArrowDownwardSharp } from "@mui/icons-material";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div style={{}}>
      <AppBar
        position="absolute"
        color="secondary"
        sx={{
          justifyContent: "center",
          marginTop: isNavOpen ? 0 : -12,
          transitionProperty: "margin",
          transitionDuration: "500ms",
          // transitionTimingFunction: "cubic-bezier(0.27, 0.13, 0.67, 1.18)",
          transitionTimingFunction: "cubic-bezier(0.27, 0.13, 0.56, 1.68);",
        }}
        className="navbar"
      >
        <Toolbar variant="dense">
          <img src={logo} width={80} />
          <Box>
            <NavLink className="NavElement" to="/">
              Home
            </NavLink>
            <NavLink className="NavElement" to="top-three">
              Top 3 selections
            </NavLink>
            <NavLink className="NavElement" to="populer">
              Popular
            </NavLink>
            <NavLink className="NavElement" to="watch-list">
            Watch List
            </NavLink>
            <IconButton
              sx={{ marginLeft: "30px" }}
              onClick={() => setIsNavOpen(false)}
            >
              <ArrowUpwardSharp color="accent" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        className="NavElementBtn"
        sx={{ marginLeft: "75%", position: "absolute" }}
        onClick={() => setIsNavOpen(true)}
      >
        <ArrowDownwardSharp color="secondary.dark" />
      </Box>
    </div>
  );
}

export default Navbar;
