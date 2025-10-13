import React from "react";
import HeroSwiper from "../components/Swiper/HeroSwiper";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import CustomSlider from "../components/Swiper/CustomSlider";
import bgImg1 from "../assets/bg.png";
import bgImg2 from "../assets/bg2.png";
import { center } from "../styles/flexStyles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";

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
        <CustomSlider useIn='service' />
      </Box>

      {/* TODO: About us */}
      <AboutSection/>

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
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  startIcon={<TrendingUpIcon />}
                >
                  Start Growing{" "}
                </Button>
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

    
      {/* TODO: Review ..... */}
      <Container sx={{ py:10}}>
        <Typography
          variant="h4"
          sx={{ color: "text.main", fontWeight: 700, textAlign: "center" }}
        >
          Genuine reviews from Customers
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.light", textAlign: "center" }}
        >
          Each listing is designed to be clear and concise, providing customers
        </Typography>
        <CustomSlider useIn='review'/>
      </Container>

        {/* TODO: Why Choose us.............. */}
      <WhyChooseUs/>
    </React.Fragment>
  );
};

export default HomePage;
