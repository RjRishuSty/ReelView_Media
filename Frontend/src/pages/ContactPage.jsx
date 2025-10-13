import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import InputForm from "../components/InputForm";
import { Box, Typography } from "@mui/material";
import { center } from "../styles/flexStyles";

const ContactPage = () => {
  return (
    <Stack sx={{ py: 10 }}>
      <Container sx={{ ...center, flexDirection: "column",boxShadow:'0px 0px 5px black',borderRadius:5,p:4 }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontWeight: 600, textAlign: "center" }}
        >
          Get in Touch With Us
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "text.light",
            width: { xs: "100%", sm: "80%", md: "60%" },
          }}
        >
          We’d love to hear from you! Whether you have a question, need support,
          or want to learn more about our services — our team is here to help.
          Fill out the form, and we’ll get back to you shortly.
        </Typography>
        <Grid container sx={{ width: "100%", mt: 3 }}>
          <Grid
            size={{ xs: 12, sm: 12, md: 5 }}
            sx={{ border: "2px solid red" }}
          ></Grid>
          <Grid size={{ xs: 12, sm: 12, md: 7 }}>
            <InputForm />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: "100%",
          mt:10,
          height: { xs: 300, md: 500 },
          borderTop: "1px solid #eee",
        }}
      >
        <iframe
          title="Crowd Bucket Pvt. Ltd."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7417623002298!2d85.14060117517795!3d25.613495977445325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59114e217b5f%3A0x81e459bb9e28544b!2sCrowd%20Bucket%20Manpower%20Supply%20Agency!5e0!3m2!1sen!2sin!4v1760333460938!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(20%) contrast(105%) brightness(95%)",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Stack>
  );
};

export default ContactPage;
