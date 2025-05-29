import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#343a40", color: "#f8f9fa" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "80%",
          margin: "auto",
          gap: { xs: 4, md: 8 },
          py: 4,
        }}
      >
        {/* Logo and Description */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <img src="/icon.jpg" alt="Prudent Campus Logo" width={60} style={{ borderRadius: '40px' }} />
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Prudent Campus
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 2 }}>
            Leading provider of innovative solutions for businesses.
          </Typography>
          <Box>
            <IconButton
              component="a"
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#f8f9fa' }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#f8f9fa' }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#f8f9fa' }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.youtube.com/channel/yourchannelid"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#f8f9fa' }}
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Categories and Contact Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, md: 8 },
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* Company Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <HomeIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography
                component={Link}
                to="/"
                variant="body2"
                sx={{ textDecoration: "none", color: "#f8f9fa", '&:hover': { textDecoration: "underline" } }}
              >
                Home
              </Typography>            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <GroupIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography
                component={Link}
                to="about-us"
                variant="body2"
                sx={{ textDecoration: "none", color: "#f8f9fa", '&:hover': { textDecoration: "underline" } }}
              >
                About us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography
                component={Link}
                to="contact-us"
                variant="body2"
                sx={{ textDecoration: "none", color: "#f8f9fa", '&:hover': { textDecoration: "underline" } }}
              >
                Contact
              </Typography>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <AddIcCallIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">+91 8530506623, or +91 8857856623</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">
                drsharmashomeopathy@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NearMeIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2">
                Arjun Nagar Tiraha, Kheria Airport road, Agra up
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#212529",
          color: "#f8f9fa",
          py: 2,
          px: 4,
        }}
      >
        <Typography variant="body2">© 2024 Prudent Campus</Typography>
      </Box>
    </Box>
  );
};

export default Footer;