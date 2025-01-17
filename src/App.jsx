import { Typography } from "@mui/material";
import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import * as motion from "motion/react-client"
import Achievments from "./Components/Achievments/Achievments";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      
      <Projects/>
   
      <Achievments/>

    </div>
  );
};

export default App;
