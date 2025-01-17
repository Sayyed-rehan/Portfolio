import React from 'react'
import "./Cards.css"
import { Box, Button, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";


const Cards = (props) => {
  return (
    <Box className="card-container" boxShadow={12}>
        <img src={props.src} alt={props.alt} />
        <Typography variant='h6'>{props.title}</Typography>
        <Box className="card-button-group">
            <Button variant="outlined"
            href={props.live}
            target="_blank"
            endIcon={<LanguageIcon />}>
            Live
            </Button>
            <Button   variant="contained"
            href={props.github}
            target="_blank"
            endIcon={<GitHubIcon />}>
            Github
            </Button>
        </Box>
    </Box>
  )
}

export default Cards