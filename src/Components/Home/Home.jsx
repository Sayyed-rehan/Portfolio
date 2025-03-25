import React from "react";
import "./Home.css";
import { Box, Button, Typography } from '@mui/material'
import profile from "./../../Images/profile_img.png"
import resume from "../../Pdfs/Rehan_Sayyed_Resume.pdf"
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { motion, spring} from "motion/react"



const Home = () => {

 
  return (
    <Box className="home-container">
      <img src={profile} alt="profile img" />


      <Box className="content">
     <Typography variant='h6'>Hello I'm
      <br/>
        <Typography variant="h3" >Rehan Sayyed
          <br/>
          <Typography variant='h5' >Full Stack Developer</Typography>
        </Typography>
     </Typography>
      <Button
      href={resume} download='Sayyed Rehan' variant='contained'
      endIcon={<CloudDownloadOutlinedIcon  fontSize="large"/>}
      >
      Resume
      </Button>

      </Box>
    </Box>
  )
};

export default Home;
