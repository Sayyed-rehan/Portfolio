import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(anchorEl,"anchorEl");

  return (
    <Box className="nav-container">
      <AppBar  position='static'>
        <Toolbar className="toolbar">
          <Typography variant="h5" fontWeight="bold">
            Sayyed Rehan
          </Typography>

          <box className="nav2">
            <Typography variant="subtitle1">
            <Link to='home' smooth={true} duration={400}>
            Home
            </Link>
            </Typography>

            <Typography variant="subtitle1">
              <Link to='projects' smooth={true} duration={600}>
              Projects
              </Link>
            </Typography>
            <Typography variant="subtitle1">
            <Link to='achievments-container' smooth={true} duration={600}>
            Achievments
            </Link>
            </Typography>
            <Typography variant="subtitle1">Contact</Typography>
          </box>

         

          <box className="drawer">
            <IconButton size="large" edge="start" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem >
              <Link to='projects' smooth={true} duration={400} onClick={handleClose}>
              Projects
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to='Achievments' smooth={true} duration={600} onClick={handleClose}>
              Achievments
              </Link>
              </MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
