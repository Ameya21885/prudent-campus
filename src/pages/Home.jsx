import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroImg from '../assets/hero.png'
import camp1 from '../assets/camp1.png'
import camp2 from '../assets/camp2.png'
import camp3 from '../assets/camp3.png'
import camp4 from '../assets/camp4.png'
import camp5 from '../assets/camp5.png'
import camp6 from '../assets/camp6.png'
import camp7 from '../assets/camp7.png'
import camp8 from '../assets/camp8.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <HeroSection />
      <CollabrationSection />
    </>

  )
}

export default Home;

const HeroSection = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '90%',
      margin: 'auto',
      textAlign: { xs: 'center', md: 'left' },
      py: 4,
    }}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          Learn without limits
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: 'larger' } }}
        >
          Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and degrees from world-class universities and companies.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mt: 3,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Button variant="contained" fullWidth={true} sx={{ maxWidth: { xs: '100%', sm: 'fit-content' } }}>
            Join For Free
          </Button>
          <Button variant="outlined" fullWidth={true} sx={{ maxWidth: { xs: '100%', sm: 'fit-content' } }}>
            Try Coursera for Business
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          mt: { xs: 4, md: 0 },
        }}
      >
        <img
          src={HeroImg}
          alt="Learn without limits"
          style={{ width: '70%', height: '100%' }}
        />
      </Box>
    </Box>
  )
}
const campusList = [
  { id: 1, url: camp1, alt: 'campus1', link: "https://www.coursera.org/partners/penn" },
  { id: 2, url: camp2, alt: 'campus2', link: "https://www.coursera.org/partners/penn" },
  { id: 3, url: camp3, alt: 'campus3', link: "https://www.coursera.org/partners/penn" },
  { id: 4, url: camp4, alt: 'campus4', link: "https://www.coursera.org/partners/penn" },
  { id: 5, url: camp5, alt: 'campus5', link: "https://www.coursera.org/partners/penn" },
  { id: 6, url: camp6, alt: 'campus6', link: "https://www.coursera.org/partners/penn" },
  { id: 7, url: camp7, alt: 'campus7', link: "https://www.coursera.org/partners/penn" },
  { id: 8, url: camp8, alt: 'campus8', link: "https://www.coursera.org/partners/penn" }
];

const CollabrationSection = () => {
  return (
    <Box sx={{ py: 5, px: 2, backgroundColor: "#f1f1ff" }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          We collaborate with 350+{' '}
          <span style={{ textDecoration: 'underline' }}>
            leading universities and companies
          </span>
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        {campusList.map(({ id, url, alt, link }) => (
          <Grid item xs={2} sm={2} md={3} key={id}>
            <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Link to={link}>
                  <img
                    src={url}
                    alt={alt}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Link>
              </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
