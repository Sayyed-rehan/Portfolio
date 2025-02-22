import React from "react";
import "./Contact.css";
import { Box, Stack, Typography, Chip, Divider, Tooltip } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import gmail from "../../Images/gmail.png"

const Contact = () => {
  return (
    <Box className="contact-container">
      <Typography variant='subtitle-1' >Get In Touch</Typography>
      <Typography variant='h3'>Contact Me</Typography>
      <Box className="contact-links" boxShadow={12}>
        <Tooltip title='Copy to Clipboard'>
          <Chip 
          icon={
        <img src={gmail} alt="gmail"  height='30px' style={{'margin-right':'1px'}}/>
          // <MailOutlineIcon color="action"/>
          } 
          label="rehansayyed1216@gmail.com" 
          component="a"
          onClick={() => {navigator.clipboard.writeText('rehansayyed1216@gmail.com')}}
          />
        </Tooltip>
        <Divider orientation='vertical'/>
      <Box className="email">
        <Chip 
        label="LinkedIn" 
        component="a"
        href='https://www.linkedin.com/in/rehan-sayyed-0682b220a/' 
        target="_blank"
        icon={<LinkedInIcon color='primary'/>}
          
        />


        <Chip label="Github" 
        component="a"
        href='https://github.com/Sayyed-rehan' 
        target="_blank"
        icon={<GitHubIcon color="grey"/>}/>
     

        <Chip label="Leetcode" 
        component="a"
        href='https://leetcode.com/u/sayyed_rehan/' 
        target="_blank"
 
        icon={<TerminalIcon color="warning"/>}

        
        />
     </Box>
      </Box>
    </Box>
  );
};

export default Contact;
