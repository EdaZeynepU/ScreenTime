import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import {ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#7F1111",
    },
    secondary: {
      main: "#24314A",
    },
    third: {
      main: "#ECE2D4",
      dark: "#d1c7b8",
      ligth: "#f7f0e6",
    },
    accent: {
      main: "#B0BCC8",
      dark: "#d1c7b8",
      light: "#f7f0e6",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
