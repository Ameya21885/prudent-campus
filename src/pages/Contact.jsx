import React from 'react'
import { Typography, Box, useTheme,TextField, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useFormik } from "formik";
import * as yup from "yup";
import { useForm } from "@formspree/react";
import SendIcon from "@mui/icons-material/Send";
import Fade from '@mui/material/Fade';

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  subject: yup.string("Enter your subject").required("Subject is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  project: yup
    .string("Details about the project")
    .required("Please enter the details about the project"),
});


const Contact = () => {
  return (
    <div>
     <ContactHero />
      <ContactSection />
      <Box
        sx={{
          overflow: "hidden",
          height: "0",
          paddingBottom: "10%",
          position: "relative",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.597710907353!2d77.975402875111!3d27.168944876495374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477827465dbd7%3A0x937390b3da704919!2sArjun%20Nagar%20Airport%20Gate!5e0!3m2!1sen!2sin!4v1724410274179!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </div>
  )
}

export default Contact

const ContactHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "left", // Align text to the left
        color: "white",
        width: "100%",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <img
        // src={contactHero}
        src="https://i.pinimg.com/564x/ff/7a/9b/ff7a9bcd253e5b688894821b2e7588cd.jpg"
        alt="Contact"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(50%)", // Darkens the image for better text visibility
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Position the box at the bottom
          left: 0, // Position the box to the left
          width: "100%", // Make sure the box covers the width of the image
          padding: { xs: 2, sm: 3 }, // Adjust padding as needed
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better text contrast
          borderTopRightRadius: 2, // Rounded top-right corner
          textAlign: "left", // Align text to the left
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "90%", md: "80%" }, // Adjust max-width based on screen size
            margin: { xs: "0 auto", sm: "0" }, // Center the box horizontally on small screens
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              mb: 1,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds shadow to text for better readability
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const data = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
    title: "Arjun Nagar Tiraha, Kheria Airport road, Agra up",
  },
  {
    icon: <CallIcon sx={{ fontSize: 24 }} />,
    title: "+91 9675141090",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 24 }} />,
    title: "drsharmashomeopathy@gmail.com",
  },
];
const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "80%",
        margin: "auto",
        padding: { xs: "2rem", md: "4rem" },
        gap: { xs: "2rem", md: "4rem" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            mb: "1rem",
          }}
        >
          Let's Get in Touch
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            "& > div": {
              transition: "transform 0.3s, box-shadow 0.3s",
              borderRadius: "8px",
              backgroundColor: theme.palette.background.paper,
              padding: "1rem",
              boxShadow: theme.shadows[2],
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows[6],
                backgroundColor: theme.palette.grey[100],
              },
            },
          }}
        >
          {data.map((item, index) => {
            const { icon, title } = item;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {icon}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "medium",
                    color: "text.secondary",
                  }}
                >
                  {title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwarogb");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      project: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values).then(() => {
        resetForm(); // Clear form fields after successful submission
      });
    },
  });

  return (
    <Fade in timeout={1000}>
      <Box
        sx={{
          maxWidth: "600px",
          margin: "auto",
          padding: { xs: "2rem", md: "4rem" },
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "background.paper",
          transition: "transform 0.3s ease-in-out",
          '&:hover': {
            transform: "scale(1.02)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
            color: "text.primary",
            transition: "color 0.3s ease",
            '&:hover': {
              color: "primary.main",
            },
          }}
        >
          Leave a Message
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 3,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Transform your health with Healing Hands Homoeopathy. Contact us today!
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TextField
            label="Name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Enter your name"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <TextField
            label="Subject"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
            placeholder="Enter your subject"
            variant="outlined"
            size="small"
            fullWidth
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <TextField
            label="Project"
            id="project"
            name="project"
            value={formik.values.project}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.project && Boolean(formik.errors.project)}
            helperText={formik.touched.project && formik.errors.project}
            placeholder="Describe your project"
            variant="outlined"
            size="small"
            multiline
            fullWidth
            rows={4}
            required
            sx={{
              borderRadius: "4px",
              backgroundColor: "background.default",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              alignSelf: "center",
              textTransform: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "primary.main",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                transform: "scale(1.05)",
              },
            }}
            disabled={state.submitting}
          >
            Send Message
          </Button>
        </Box>
        {state.succeeded && (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mt: "2rem",
              color: "success.main",
              fontWeight: "medium",
              transition: "opacity 0.5s ease",
            }}
          >
            Thanks for reaching out! I'll get back to you soon.
          </Typography>
        )}
      </Box>
    </Fade>
  );
};