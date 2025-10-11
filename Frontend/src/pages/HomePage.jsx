import React from "react";
import { Link } from "react-router-dom";
import HeroSwiper from "../components/Swiper/HeroSwiper";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ServiceSwiper from "../components/Swiper/ServiceSwiper";
import AboutUsImages from "../components/AboutUsImages";
import bgImg1 from "../assets/bg.png";
import bgImg2 from "../assets/bg2.png";
import { center } from "../styles/flexStyles";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSwiper />
      {/* TODO: Explore our services */}
      <Box component="section" sx={{ py: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 700 }}
        >
          Explore Our Services
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ textAlign: "center", color: "#404040" }}
        >
          We provide a wide rang of reliable and verified services for personal,
          professional and community needs.
        </Typography>
        <ServiceSwiper />
      </Box>

      {/* TODO: About us */}
      <Container component="section" sx={{ mt: -2, mb: 9 }}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 5 }}>
            <AboutUsImages />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 7 }}>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                ABOUT OUR COMPANY
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
              <Button
                component={Link}
                to="/about"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* TODO:  */}
      <Stack sx={{ bgcolor: "primary.light", py: 10 }}>
        <Container sx={{}}>
          <Grid container rowGap={2} columnSpacing={3}>
            <Grid size={{ xs: 12, sm: 12, md: 8 }} sx={{ ...center }}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h2"
                  sx={{ color: "secondary.contrastText", fontWeight: 700 }}
                >
                  Add Services & Grow your{" "}
                  <Typography
                    component="span"
                    variant="h2"
                    sx={{ color: "primary.main", fontWeight: 700 }}
                  >
                    business with us
                  </Typography>
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{ color: "text.light", width: "80%" }}
                >
                  A versatile platform that connects you with local
                  professionals across various categories, from home services
                  like plumbing and electrical work to personal services like
                  photography and tutoring.
                </Typography>
                <Button variant="contained">Join </Button>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 4 }}
              sx={{
                backgroundImage: `url(${bgImg1})`,
                backgroundRepeat: "no-repeat",
                ...center,
                backgroundPosition: "right center",
              }}
            >
              <Box component="img" src={bgImg2} />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </React.Fragment>
  );
};

export default HomePage;
