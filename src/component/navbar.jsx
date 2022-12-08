// import { Link as Links } from 'react-router-dom';
import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NotesIcon from '@mui/icons-material/Notes';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"
import { Link } from "react-router-dom";
import { IoMdFlash } from "react-icons/io"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;
const navItems = ['Home', ' First Gallery', 'Second', 'Third Grid', "About Us", "Contact"];

function Navbar(props) {
  const navig = useNavigate()

  function handleClick(e) {
    const tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    e.currentTarget.className += " active";

  }
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = (item) => {
    if (item == "Home") {
      navig("/")
    } else if (item == " First Gallery") {
      navig("/first")
    } else if (item == "Second") {
      navig("/secund")
    } else if (item == "Third Grid") {
      navig("/third")
    }
    else if (item == "About Us") {
      navig("/about")
    }
    else if (item == "Contact") {
      navig("/contact")
    }
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickk = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                            <ListItemText   primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>

    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<Box >




    <Box sx={{ display: 'flex' }} id="contayner">
      <Grid container justifyContent="center" spacing={1} >
        <Grid item xs={9.8} sm={12} md={12} lg={12} xl={12} >
          <AppBar component="nav" id="App" sx={{ width: { lg: "1350px", md: "1000px", sm: "750px", xs: "409px", xl: "1420px" }, marginLeft: { lg: "45px", md: "12px", sm: "9px", xs: "-28px" }, height: { sm: "50px", xs: "45px", md: "80px", xl: "110px", lg: "110px" }, top: { xl: "30px", lg: "30px", md: "10px", sm: "10px", xs: "10px" } }}>
            <Toolbar >
              <IconButton
                id="fade-button"

                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                edge="start"
                onClick={handleClickk}
                sx={{ mr: 2, display: { sm: 'flex', md: "none" }, width: { sm: "40px", xs: "30px" }, height: { sm: "40px", xs: "30px" }, color: "black", background: "rgba(255, 255, 255, 0.7)", left: "98%", top: { sm: "10%", xs: "25%" }, borderRadius: "0!important", fontSize: " 1.75rem" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className="icon"
                sx={{
                  flexGrow: 1, display: "flex",
                  fontSize: { xl: "2rem", lg: "2rem", md: "1.5rem", sm: "1.5rem", xs: "1.3rem" },
                  height: { sm: "20px", xs: "10px", xl: "40px", lg: "40px", md: "30px" },
                  marginLeft: { sm: "-50px", xl: "5px", lg: "0px", md: "0px", xs: "-40px" },
                  gap: { sm: "10px" }

                }}
              >
                <IoMdFlash />
                <Typography sx={{ fontSize: { xl: "2rem", lg: "2rem", md: "1.5rem", sm: "1.4rem", xs: "1.3rem" }, }}>
                  UPPER
                </Typography>
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: "flex" }, marginRight: { xl: "-20px", lg: "-20px", md: "-20px", sm: "20px" } }}>
                {navItems.map((item) => (
                  <Typography className='active tablink' onClick={(e) => handleClick(e)} sx={{ display: "flex" }}>
                    <Button key={item} sx={{ color: '#fff', width: { xl: "155px", lg: "155px", md: "130px" }, height: { xl: "110px", lg: "110px", md: "80px" } }} onClick={() => handleDrawerToggle(item)}>
                      <Link className="nu">
                        {item}
                      </Link>
                    </Button>
                  </Typography>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav" >
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              sx={{ textAlign: "center", opacity: { sm: "1", xs: "1", lg: "0", md: "0", xl: "0" } }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem className='active tablink' onClick={(e) => handleClick(e)}>
                <Button  >
                <Link className='n'  >
                 {drawer}
                </Link>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>

  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;










