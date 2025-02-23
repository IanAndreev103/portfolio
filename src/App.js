import React, { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";
import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Cursor from "./Components/Cursor";
import Content from "./Content";
import Particle from "./Components/Particle";
import { useGlobalContext } from "./Context";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [loading, setLoading] = useState(false);

  const { isdarkMode } = useGlobalContext();
  // console.log(isdarkMode);

  const lightTheme = {
    colors: {
      black: "#000",
      white: "#fff",
      fandango: "#C13584",
      chambreyblue: "#3a559f",
      gold: "gold",
      darkgrey: "#323232",
      grey: "#999999",
      lightgrey: "#cccccc",
      varylightgrey: " #eeeeee",
      deepskyblue : "#00BFFF",
    },
    bg: {
      primary: "#fff"
    },
    highlight: {
      primary: "#78cc6d",
      secondary: "#cccccc",
      rgb: {
        primary: "120, 204, 109",
       secondary: "204, 204, 204"
      }
    },
    title: {
      primary: "0,0,0",
      secondary: "50, 50, 50",

    },
    icon: {
      primary: "#fff",
    },
    gradient: {
      bgGradient: "linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%)",
      gradient1:"linear-gradient(135deg,  rgba(120, 204, 109, 0.4) 0%,  rgba(120, 204, 109, 0.012) 100%)",
      gradient2:"radial-gradient(ellipse at left,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",

    },
    border:{
      gradient1:"radial-gradient(ellipse at center,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",
      gradient2:"radial-gradient(ellipse at left,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",
    }
  };
  const darkTheme = {
    colors: {
      black: "#000",
      white: "#fff",
      fandango: "#C13584",
      chambreyblue: "#3a559f",
      gold: "gold",
      darkgrey: "#323232",
      grey: "#999999",
      lightgrey: "#cccccc",
      varylightgrey: " #eeeeee",
      deepskyblue : "#00BFFF",
    },
    bg: {
      primary: "#31313a"
    },
    highlight: {
      primary: "#ff9800",
      secondary: "rgb(102, 102, 102)",
      rgb: {
        primary: "255, 152, 0",
       secondary: "102, 102, 102"
      }
    },
    title: {
      primary: "255, 255, 255",
      secondary: "153, 153, 153",
    },
    icon: {
      primary: "#323232",
    },
    gradient: {
      bgGradient: "linear-gradient(to bottom right, #17171b 0%, #28282f 100%)",
      gradient1:"linear-gradient(to bottom right, #17171b 0%, #28282f 100%)",
      gradient2:"radial-gradient(ellipse at left,  #dddddd 0%,  rgba(255, 255, 255, 0) 70%)",
    },
    border:{
      gradient1: "radial-gradient(ellipse at top,rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
      gradient2:"radial-gradient(at left center, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%);",
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Cursor />
          <div className={`app ${isdarkMode ? "dark" : "light"} overflow-hidden`}>
            <Particle />
            <Content />
          </div>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
