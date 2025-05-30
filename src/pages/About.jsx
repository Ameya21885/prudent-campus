import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from "@mui/material";

const About = () => {
  return (
     <Box>
      <Box>
        <AboutHero />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <OurStory />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <OurVision />
      </Box>
     
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Details />
      </Box>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
      
        <ReviewCards />
      </Box>
    </Box>
  )
}

export default About

const AboutHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "left", // Align text to the left
        color: "white",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        // src={aboutHero}
        src="https://i.pinimg.com/736x/96/70/df/9670df3eab618edc6ed4617752a106bc.jpg"
        alt="About Us"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Position at the bottom
          left: 0,   // Align to the left
          width: "100%", // Full width of the image
          padding: 2,   // Padding for better spacing
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            mb: 2,
            textAlign: "left", // Align text to the left within the Box
          }}
        >
          About Us
        </Typography>
      </Box>
    </Box>
  );
};

const OurStory = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        width: "80%", // Adjusted width for a better look
        margin: "auto",
        gap: 4, // Increased gap for better spacing
        alignItems: "center",
        justifyContent: "center",
        my: 6, // Added more vertical padding
        p: 4, // Added padding around the section
        backgroundColor: "#f7f7f7", // Light background color
        borderRadius: "12px", // Rounded corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <Box
        sx={{
          flex: 1,
          px: 3, // Increased horizontal padding
          py: 2, // Added vertical padding
          backgroundColor: "#ffffff", // White background for the text section
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for text section
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" }, // Adjusted font size
            fontWeight: "bold",
            mb: 3,
            textAlign: { xs: "center", md: "left" }, // Center align text on small screens
            color: "#333", // Darker text color for better readability
          }}
        >
          About Santosh Taksal
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" }, // Adjusted font size
            lineHeight: 1.8, // Increased line height for readability
            mb: 4,
            textAlign: { xs: "center", md: "left" }, // Center align text on small screens
            color: "#555", // Slightly lighter text color
          }}
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate maiores accusamus aperiam eos culpa quas facere debitis sapiente!.
          <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cumque illo doloremque accusamus id dignissimos cum quam eius temporibus?
          <br />
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, vel fugit debitis repudiandae ut saepe ea velit earum nostrum aut.
        </Typography>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 1, // Margin top for spacing
              backgroundColor: "#006400", // Custom button color
              "&:hover": {
                backgroundColor: "#004d00", // Darker shade on hover
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          // src={ourstory}
          src="https://i.pinimg.com/736x/b2/8a/54/b28a54f138a38869765515f0e710db4d.jpg"
          alt="Our Story"
          style={{
            width: "100%",
            maxWidth: "400px", // Ensures the image doesn’t exceed 400px
            height: "auto",
            transition: "transform 0.3s ease-in-out", // Adds a transition effect
            borderRadius: "8px", // Adds rounded corners to the image
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Hover effect
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset hover effect
        />
      </Box>
    </Box>
  );
};
const OurVision = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4, // Space between text and image
        width: "80%",
        margin: "auto",
        my: 6, // Vertical padding
        p: 4, // Adds padding around the section
        backgroundColor: "#f9f9f9", // Light background color
        borderRadius: "8px", // Rounded corners
        boxShadow: 3, // Adds shadow for depth
      }}
    >
      <Box
        sx={{
          flex: 1,
          px: 3, // Horizontal padding
          textAlign: { xs: "center", md: "left" }, // Center-align text on small screens
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            mb: 3,
            color: "#333", // Darker text color for better readability
            lineHeight: 1.8, // Increases line height for readability
          }}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut harum voluptatibus laborum ullam vero, blanditiis voluptates tempora molestiae odio quos enim velit veritatis, veniam ad sint neque necessitatibus recusandae.
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            fontWeight: "bold",
            mb: 3,
            color: "#006400", // Dark green color for emphasis
          }}
        >
          Our Vision
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "#555", // Slightly lighter text color
            lineHeight: 1.8, // Increases line height for readability
            fontStyle: "italic", // Italicize for emphasis
          }}
        >
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem consequatur, optio voluptates rem pariatur.”
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/c6/fc/cf/c6fccfec3d6d27ef458a3bb88810eeb5.jpg"
          alt="Our Vision"
          style={{
            width: "100%",
            maxWidth: "450px", // Adjusted max width for balance
            height: "auto",
            borderRadius: "12px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
          }}
        />
      </Box>
    </Box>
  );
};

const data = [
  {
    title: 10,
    subtitle: "Years of Experience",
  },
  {
    title: 20,
    subtitle: "Best of Team",
  },
  {
    title: 500,
    subtitle: "Happy Clients",
  },
];
const Details = () => {
  const [counts, setCounts] = useState(data.map(() => 0)); // Initialize counts as 0
  const [hasRendered, setHasRendered] = useState(false); // Track if the component is in view
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasRendered(true); // Set to true when the component enters the viewport
          observer.unobserve(containerRef.current); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    if (hasRendered) {
      // Only increment counts if the component has been rendered (i.e., is in view)
      counts.forEach((count, index) => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < data[index].title) {
              newCounts[index] += 1; // Increment the count
            }
            return newCounts;
          });
        }, 50);

        // Clear interval when the title reaches its value
        return () => clearInterval(interval);
      });
    }
  }, [hasRendered]); // Dependency on hasRendered

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #f8f8f8, #e0e0e0)",
        padding: { xs: 2, md: 4 },
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        height: "10rem",
        border: "1px solid #ccc",
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {counts[index]}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#555",
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
const data1 = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Ann Smith",
    designation: "Client",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jamie G Britton",
    designation: "Client",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Adam S Curtis",
    designation: "Client",
  },
];
const ReviewCards = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%" },
        margin: "auto",
        p: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
          color: "primary.main", // Adding color to the heading
        }}
      >
        What Our Clients Say
      </Typography>

      {/* <ReviewCarousel/> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data1.map((item, index) => {
          const { description, name, designation } = item;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    bgcolor: "background.paper", // Background color for card content
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`, // Border for separation
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      color: "text.secondary", // Slightly different color for description
                    }}
                  >
                    "{description}"
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    bgcolor: "background.default", // Background color for card footer
                  }}
                >
                  <Avatar
                    alt={name}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56, border: `2px solid ${theme => theme.palette.primary.main}` }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {designation}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};