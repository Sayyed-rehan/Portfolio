import React from "react";
import "./Projects.css";
import { Box, Button, Typography } from "@mui/material";
import e_commerce from "../../Images/e-commerce.png";
import social_media from "../../Images/social-media1.png";
import restraunt from "../../Images/restraunt.png";
import imdb from "../../Images/imdb.png";

import Cards from "../Cards/Cards";

const Projects = () => {
  return (
    <Box className="project-container" id='projects'>
    <Typography variant='h4' >Projects</Typography>
      <Box className="project-cards">
        <Cards
          src={e_commerce}
          alt="e_commerce"
          title="E-Commerce Application"
          live="https://aura-a29l.onrender.com/"
          github="https://github.com/Sayyed-rehan/E-commerce-Aura"
        />

        <Cards
          src={social_media}
          alt="social_media"
          title="Social-Media Application"
          live="https://social-media-uaw8.onrender.com/"
          github="https://github.com/Sayyed-rehan/Social-media1"
        />
        <Cards
          src={restraunt}
          alt="restraunt"
          title="Restraunt Application"
          live="https://mugal-darbar.onrender.com/"
          github="https://github.com/Sayyed-rehan/Mugal-Darbar"
        />

        <Cards
          src={imdb}
          alt="IMDb"
          title="IMDb Application"
          live="https://imdb-96kj.onrender.com/"
          github="https://github.com/Sayyed-rehan/IMDB-clone"
        />
      </Box>
    </Box>
  );
};

export default Projects;
