import React from "react";
import "./Achievments.css";
import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

const Achievments = () => {
  const Frontend = ["React JS", "HTML", "CSS", "JavaScript", "Material UI"];
  const Backend = ["Node JS", "Express JS", "Nest JS", "SQL", "MongoDB"];
  const other = ["DSA", "Figma", "Github", "Postman"];

  return (
    <Box className="achievments-container" id='Achievments'>
      <Box>Certificates</Box>
        <Box className="tech-stack" boxShadow={12}>
        <Typography variant='h4' gutterBottom>Technology</Typography>
          <Box className="frontend" >
            <Typography variant="h5" gutterBottom>
            <IconButton >
              <CodeIcon />
            </IconButton>
            Frontend
            </Typography>
            {Frontend.map((x, i) => {
              return <Chip label={x} color="error" size="large" />;
            })}
          </Box>
          <Divider/>
          <Box className="Backend">
            <Typography variant="h5" gutterBottom>
              <IconButton ><CodeIcon /></IconButton>
              Backend
            </Typography>
            {Backend.map((x, i) => {
              return <Chip label={x} color="error" size="large" />;
            })}
          </Box>
          <Divider />
          <Box className="other" >
            <Typography variant="h5" gutterBottom>
            <IconButton >
              <CodeIcon />
            </IconButton>
            Other</Typography>
            {other.map((x, i) => {
              return <Chip label={x} color="error" size="large" />;
            })}
          </Box>
        </Box>
    </Box>
  );
};

export default Achievments;
