import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ContactsIcon from "@mui/icons-material/Contacts";
import { AppBar, Avatar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography } from '@mui/material';

const pages = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    link: "about-us",
    icon: <LocalHospitalIcon />,
  },
  {
    title: "Contact",
    link: "contact-us",
    icon: <ContactsIcon />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Prudent Campus
        </Typography>
        <IconButton
          onClick={toggleDrawer(false)}
          aria-label="close navigation menu"
        >
          <CloseIcon
            sx={{
              border: "2px solid black",
              borderRadius: "20px",
              color: "black",
            }}
          />
        </IconButton>
      </Box>

      <List>
        {pages.map(({ title, link, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={link}
              onClick={toggleDrawer(false)}
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={title}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PrudentCampus
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* mobile view */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor="right"
              PaperProps={{ sx: { width: "100%" } }}
            >
              {DrawerList}
            </Drawer>
          </Box>
          {/* desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={toggleDrawer}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>

            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
