import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactsIcon from '@mui/icons-material/Contacts';
import SchoolIcon from '@mui/icons-material/School';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const pages = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "About",
    link: "about-us",
    icon: <LocalHospitalIcon />,
  },
  {
    id: 3,
    title: "Contact",
    link: "contact-us",
    icon: <ContactsIcon />,
  },
  // {
  //   id: 4,
  //   title: "Courses",
  //   icon: <SchoolIcon />,
  //   submenu: [
  //     { id: 1, subtitle: "C", link: "/courses/c" },
  //     { id: 2, subtitle: "C++", link: "/courses/cpp" },
  //     { id: 3, subtitle: "Java", link: "/courses/java" },
  //     { id: 4, subtitle: "Python", link: "/courses/python" },
  //     { id: 5, subtitle: "MERN Stack", link: "/courses/mern" },
  //     { id: 6, subtitle: "Java Full Stack", link: "/courses/java-full-stack" },
  //     { id: 7, subtitle: "Data Science", link: "/courses/data-science" },
  //     { id: 8, subtitle: "Cyber Security", link: "/courses/cyber-security" },
  //   ]
  // }
];

// const menuItems = pages.find(p => p.title === "Courses")?.submenu || [];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCourses, setOpenCourses] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCoursesClick = () => {
    setOpenCourses(!openCourses);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
          Prudent Campus
        </Typography>
        <IconButton onClick={toggleDrawer(false)} aria-label="close navigation menu">
          <CloseIcon sx={{ border: "2px solid black", borderRadius: "20px", color: "black" }} />
        </IconButton>
       
      </Box>
<hr/>

      <List>
        {pages.map((item) => {
          if (item.submenu) {
            return (
              <React.Fragment key={item.id}>
                <ListItemButton onClick={handleCoursesClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                  {openCourses ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCourses} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((sub) => (
                      <ListItemButton
                        key={sub.id}
                        sx={{ pl: 4 }}
                        component={Link}
                        to={sub.link}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={sub.subtitle} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
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

          {/* Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { width: "100%" } }}
            >
              {DrawerList}
            </Drawer>
          </Box>

          {/* Desktop View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.filter(p => !p.submenu).map(({ id, title, link }) => (
              <Button
                key={id}
                component={Link}
                to={link}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {title}
              </Button>
            ))}

            {/* <Button
              id="basic-button"
              aria-controls={isMenuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? 'true' : undefined}
              onClick={handleMenuClick}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Courses
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {menuItems.map(({ id, subtitle, link }) => (
                <MenuItem
                  key={id}
                  component={Link}
                  to={link}
                  onClick={handleMenuClose}
                >
                  {subtitle}
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

         {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>  */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
