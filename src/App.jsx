import { Typography } from "@mui/material";
import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Achievments from "./Components/Achievments/Achievments";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

      <Projects />

      <Achievments />

      <Contact/>
    </div>
  );
};

export default App;
