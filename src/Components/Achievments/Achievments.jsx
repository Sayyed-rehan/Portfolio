import React from "react";
import "./Achievments.css";
import {
  Box,
  Chip,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import advanced_cert from "../../Certificates/Coursera-Advanced-React.jpg";
import js from "../../Certificates/Coursera-Js.jpg";
import mob from "../../Certificates/Coursera-Mobile-Development.jpg";
import node from "../../Certificates/Coursera-Node-and-Express.jpg";
import react from "../../Certificates/Coursera-React-Basics.jpg";
import cutshort from "../../Certificates/cutshort.jpg";
import InfoIcon from "@mui/icons-material/Info";

const Achievments = () => {
  const Frontend = ["React JS", "HTML", "CSS", "JavaScript","TypeScript" ,"Material UI"];
  const Backend = ["Node JS", "Express JS", "Nest JS", "SQL", "MongoDB"];
  const other = ["DSA", "Figma", "Github", "Postman"];

  const Certificates_details = [
    {
      img: advanced_cert,
      title: "Advanced React",
      author: "Coursera",
      rows: 2,
      cols: 2,
      featured: true,
      info:"https://www.coursera.org/account/accomplishments/certificate/DAFG62TU44HX"
    },
    {
      img: node,
      title: "Node and Express",
      author: "Coursera",
      rows: 2,
      cols: 2,
      featured: true,
      info:"https://www.coursera.org/account/accomplishments/certificate/JLFYNL9XFASB"
    },
    {
      img: mob,
      title: "Introduction to Mobile Development",
      author: "Coursera",
      rows: 2,
      cols: 2,
      featured: true,
      info:"https://www.coursera.org/account/accomplishments/certificate/BV2XZPPT8PJF"
    },
    {
      img: js,
      title: "Programing with JavaScript",
      author: "Coursera",
      rows: 2,
      cols: 2,
      featured: true,
      info:"https://www.coursera.org/account/accomplishments/certificate/ZR4SEEXM8JCJ"
    },
    {
      img: react,
      title: "React Basics",
      author: "Coursera",
      rows: 2,
      cols: 2,
      featured: true,
      info:"https://www.coursera.org/account/accomplishments/certificate/KNMPLWLHTD34"
    },
    {
      img: cutshort,
      title: "React Basic",
      author: "Cutshort",
      rows: 2,
      cols: 2,
      featured: true,
      info:"https://cutshort.io/certificate/92030"
    },
  ];

  return (
    <Box className="achievments-container" id="Achievments">
      <ImageList gap={10} sx={{boxShadow:"12"}} >

        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component='div'>Certificates</ListSubheader>
        </ImageListItem>
      
        {Certificates_details.map((item) => (
          <ImageListItem key={item.img} component='div' >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}

            />
            <ImageListItemBar title={item.title} subtitle={item.author} 
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  href={item.info}
                  target="_blank"
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box className="tech-stack" boxShadow={12}>
        <Typography variant="h4" gutterBottom >
          Technology
        </Typography>
        <Box className="frontend">
          <Typography variant="h5" gutterBottom>
            <IconButton>
              <CodeIcon />
            </IconButton>
            Frontend
          </Typography>
          {Frontend.map((x, i) => {
            return <Chip label={x} color="error" size="large" key={x}/>;
          })}
        </Box>
        <Divider />
        <Box className="Backend">
          <Typography variant="h5" gutterBottom>
            <IconButton>
              <CodeIcon />
            </IconButton>
            Backend
          </Typography>
          {Backend.map((x, i) => {
            return <Chip label={x} color="error" size="large" key={x}/>;
          })}
        </Box>
        <Divider />
        <Box className="other">
          <Typography variant="h5" gutterBottom>
            <IconButton>
              <CodeIcon />
            </IconButton>
            Other
          </Typography>
          {other.map((x, i) => {
            return <Chip label={x} color="error" size="large" key={x}/>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Achievments;
