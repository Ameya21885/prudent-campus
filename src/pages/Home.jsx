import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
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
import outcomes from '../assets/outcomes.png'
import companyImg from '../assets/company.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <HeroSection />
      <CollabrationSection />
      <ExploreCoursesSection />
      <OutcomesSection />
      <CommunitySection />
      <ProfessionalGoals/>
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
        <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
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
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
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

const exploreCourses = [
  {
    id: 1,
    title: "C",
    desc: "Learn C programming from scratch",
    url: "https://i.pinimg.com/736x/7e/ed/dc/7eeddcd5d751449010c6a155bda93f01.jpg",
  },
  {
    id: 2,
    title: "C++",
    desc: "Learn C++ programming from scratch",
    url: "https://i.pinimg.com/736x/7e/ed/dc/7eeddcd5d751449010c6a155bda93f01.jpg",
  },
  {
    id: 3,
    title: "Java Full Stack",
    desc: "Become a Java full stack developer",
    url: "https://i.pinimg.com/736x/7e/ed/dc/7eeddcd5d751449010c6a155bda93f01.jpg",
  },
  {
    id: 4,
    title: "Python",
    desc: "Master Python from basics to advanced",
    url: "https://i.pinimg.com/736x/7e/ed/dc/7eeddcd5d751449010c6a155bda93f01.jpg",
  },
  {
    id: 5,
    title: "Java Full Stack",
    desc: "Java Full Stack with Spring and React",
    url: "https://i.pinimg.com/736x/7e/ed/dc/7eeddcd5d751449010c6a155bda93f01.jpg",
  },
  {
    id: 6,
    title: "Cyber Security",
    desc: "Learn ethical hacking and defense",
    url: "https://i.pinimg.com/736x/7e/ed/dc/7eeddcd5d751449010c6a155bda93f01.jpg",
  },
];

const ExploreCoursesSection = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Explore Courses
      </Typography>

      <Grid container spacing={3}>
        {exploreCourses.map(({ id, title, desc, url }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea sx={{ display: "flex" }}>
                <CardMedia component="img" height="180" image={url} alt={title} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const OutcomesSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // column for mobile, row for desktop
        alignItems: 'center',
        gap: 4,
        px: 2,
        py: 6,
        backgroundColor: "#deebff",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={outcomes}
          alt="outcomes-section"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: 500,
          }}
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ width: { xs: '100%', md: '60%' } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Learner outcomes on Coursera
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          77% of learners report career benefits, such as new skills, increased pay,
          and new job opportunities. 2023 Coursera Learner Outcomes Report
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          Join for Free
        </Button>
      </Box>
    </Box>
  )
}

const CommunitySection = () => {
  return (
    <Box
      sx={{
         width:'70%',
        margin: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // stack on mobile, row on desktop
        alignItems: 'center',
        gap: 4,
        px: 2,
        py: 6,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Drive your business forward by empowering your talent
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Train teams with industry-leading experts and universities, enhanced by AI tools and recognized credentials.
        </Typography>
        <Button variant="contained" size="large" sx={{ my: 2 }}>
          Contained
        </Button>
        <Typography variant="subtitle1">
          Upskill a small team? Check out Coursera for Teams
        </Typography>
      </Box>
      <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
        <img
          src={companyImg}
          alt="Drive your business forward by empowering your talent"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: 500,
          }}
        />
      </Box>
    </Box>
  )
}

const ProfessionalGoals = () => {
  return (
    <Box
      sx={{
        width:'60%',
        margin: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row-reverse' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        px: 2,
        py: 6,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Take the next step toward your personal and professional goals with Coursera.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
         Join now to receive personalized recommendations from the full Coursera catalog.
        </Typography>
        <Button variant="contained" size="large" sx={{ my: 2 }}>
          Join for Free
        </Button>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://i.pinimg.com/736x/be/fa/26/befa26e80286d84fb1e06afb95d13d8a.jpg"
          alt="Professional Goals"
          style={{ width: '70%', height: 'auto', maxWidth: 500 }}
        />
      </Box>
    </Box>
  )
}