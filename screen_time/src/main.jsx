import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import {ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#764A4E",
    },
    secondary: {
      main: "#BEBEBE",
    },
    third: {
      main: "#EB5852",
      dark: "#C93939",
      ligth: "#FF756C",
    },
    accent: {
      main: "#B0BCC8",
      dark: "#9DA2B5",
      light: "#CAD5DA",
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
