import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroImg from '../assets/hero.png'

const Home = () => {
  return (
    <>
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
    </>

  )
}

export default Home;
