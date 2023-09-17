import * as React from 'react';
import { useMediaQuery } from '@mui/material';
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
import Avatar from '@mui/material/Avatar';
// import panda-struggle from '../../assets/panda-struggle.svg
import PANDA from '../../assets/panda-struggle.svg';

import Brightness4Outlined from '@mui/icons-material/Brightness4Outlined';
import Brightness7Outlined from '@mui/icons-material/Brightness7Outlined';


const drawerWidth = 240;
const navItems = ['Fullstack Web Dev', 'Android Dev', 'ML Novice', 'Panda'];

function DrawerAppBar(props) {
    const { window, colorMode, theme } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography> */}
            <Avatar
                alt="Panda avatar"
                src={PANDA}
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%', // To make it a perfect circle
                    backgroundColor: 'transparent', // Set the background to transparent if needed
                }}
            />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <IconButton size="small" onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 1 }}>
                        {theme.palette.mode === 'dark' ? <Brightness4Outlined /> : <Brightness7Outlined />}
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <AppBar component="nav" color="primary">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {isSmallScreen && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    {/* <Typography variant="h6" component="div">
                        MUI
                    </Typography> */}
                    <Avatar
                        alt="Panda avatar"
                        src={PANDA}
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '50%', // To make it a perfect circle
                            backgroundColor: 'transparent', // Set the background to transparent if needed
                        }}
                    />

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                        <IconButton size="small" onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 1 }}>
                            {theme.palette.mode === 'dark' ? <Brightness4Outlined /> : <Brightness7Outlined />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="permanent"
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
            <Box component="main" sx={{ p: 2 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}


export default DrawerAppBar;