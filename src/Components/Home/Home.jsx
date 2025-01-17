import React from "react";
import "./Home.css";
import { Box, Typography } from '@mui/material'
import profile from "./../../Images/profile_img.png"
// import {} from "../../Pdfs/Rehan_Sayyed_Resume.pdf"
const Home = () => {
  return (
    <Box className="home-container">
      <img src={profile} alt="profile img"  />
      <Box className="content">
      <Typography variant='h6'>Hello, I'm</Typography>
      <br />
      <Typography variant="h3">Sayyed Rehan</Typography>
      <br/>
      <Typography variant='h5'>Full Stack Developer</Typography>
      </Box>
    </Box>
  )
};

export default Home;
