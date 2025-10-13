import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AboutUsImages from "./AboutUsImages";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomSlider from "./Swiper/CustomSlider";

const AboutSection = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  return (
    <>
      <Container
        component="section"
        sx={{
          mb: 5,
          bgcolor: "secondary.light",
          borderRadius: 5,
          py: !isAboutPage ? 10 : 5,
        }}
      >
        {!isAboutPage && (
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            About us
          </Typography>
        )}
        <Grid container rowSpacing={2} columnSpacing={3} sx={{ mt: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 5 }}>
            <AboutUsImages />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 7 }}>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textTransform: "uppercase", fontWeight: 600 }}
              >
                Who We Are
              </Typography>
              <Typography gutterBottom variant="body1">
                We are a one-stop platform dedicated to connecting people with
                all types of essential services—quickly, reliably, and locally.
                Whether you're planning a wedding, seeking medical help, looking
                for legal support, or just need everyday services like a general
                store or electrician—we bring everything under one roof.
              </Typography>
              <Typography gutterBottom variant="body1">
                Our mission is to simplify lives by bridging the gap between
                service providers and the people who need them. With verified
                listings, user-friendly access, and a commitment to quality, we
                ensure that every need—from the smallest to the most critical—is
                just a few clicks away.
              </Typography>
              {isAboutPage ? (
                <>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: 600, mt: 3 }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ color: "text.main" }}
                  >
                    To become the most trusted and comprehensive local services
                    platform, empowering communities by making quality services
                    accessible to everyone, everywhere.
                  </Typography>
                </>
              ) : (
                <Button
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  to="/about"
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
};

export default AboutSection;
