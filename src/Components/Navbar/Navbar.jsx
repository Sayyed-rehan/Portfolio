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
  Drawer,
} from "@mui/material";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isDrawerOpen, setisDrawerOpen] = useState(false)

  return (
    <Box className="nav-container">
      <AppBar position="fixed" color="transparent">
        <Toolbar className="toolbar"  >
          <Typography variant="h5" fontWeight="bold">
            <Link to="nav-container" smooth={true} duration={400}>
              Rehan Sayyed
            </Link>
          </Typography>

          <Box className="nav2">
            <Typography variant="subtitle1">
              <Link to="home-container" smooth={true} duration={400}>
                Home
              </Link>
            </Typography>

            <Typography variant="subtitle1">
              <Link to="projects" smooth={true} duration={600}>
                Projects
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link to="achievments-container" smooth={true} duration={600}>
                Skills
              </Link>
            </Typography>
            <Typography variant="subtitle1">
              <Link to="contact-container" smooth={true} duration={600}>
                Contact
              </Link>
            </Typography>
          </Box>

          <Box className="drawer">
            <IconButton size="large" edge="start" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}>
              <MenuItem>
                <Link
                  to="home-container"
                  smooth={true}
                  duration={400}
                  onClick={handleClose}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="projects"
                  smooth={true}
                  duration={400}
                  onClick={handleClose}
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="Achievments"
                  smooth={true}
                  duration={600}
                  onClick={handleClose}
                >
                  Skills
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="contact-container"
                  smooth={true}
                  duration={600}
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu>
           
      
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
