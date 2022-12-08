import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home', ' First Gallery', 'Second', 'Third Grid',"About Us","Contact"];

function DrawerAppBar(props) {

    const navig = useNavigate()

    function handleClick(e) {
        const tablinks = document.getElementsByClassName('tablink');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "")
        }
        e.currentTarget.className += " active";

    }


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);



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
        else if (item == " About Us") {
            navig("/about")
        }
        else if (item == "Contact") {
            navig("/contact")
        }
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block',xl:"flex",lg:"flex",md:"flex" } }}>
                        {navItems.map((item) => (
                            <Typography className='active tablink' onClick={(e) => handleClick(e)} sx={{display:"flex"}}>
                                <Button key={item} sx={{ color: '#fff', width: { xl: "155px", lg: "155px", md: "130px" }, height: { xl: "110px", lg: "110px", md: "80px" } }} onClick={() => handleDrawerToggle(item)}>
                                    <Link  className="nu">
                                    {item}
                                    </Link>
                                </Button>
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
