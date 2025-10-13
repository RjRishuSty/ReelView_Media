import React from "react";
import HeroSection from "../components/HeroSection";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import CustomSlider from "../components/Swiper/CustomSlider";
import bgImg1 from "../assets/bg.png";
import bgImg2 from "../assets/bg2.png";
import { center } from "../styles/flexStyles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { visionData } from "../data/visionData";
import VisionCard from "../components/Cards/VisionCard";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
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
        <CustomSlider useIn="service" />
      </Box>

      {/* TODO: Add Services & Grow your */}
      <Stack sx={{  }}>
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
                // border:'2px solid red',
                minHeight:550,
                backgroundImage: `url(${bgImg1})`,
                backgroundRepeat: "no-repeat",
                ...center,
                backgroundPosition: "right center",
                backgroundSize:'cover'
              }}
            >
              <Box component="img" src={bgImg2} sx={{}} />
            </Grid>
          </Grid>
        </Container>
      </Stack>

      {/* TODO: Our vision */}

      <Stack
        sx={{
          // border: "2px solid red",
          background: "linear-gradient(135deg, #2b2b81 0%, #00e6e6 100%)",
          py: 10,
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >
          Our Vision & Mission
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          sx={{ textAlign: "center", color: "primary.contrastText" }}
        >
          Transforming the way communities connect with essential services
          through innovation, trust, and accessibility
        </Typography>
        <Grid container sx={{py:2,px:5,mt:5}} rowSpacing={2} columnSpacing={2}>
         {visionData.map((item)=> <Grid size={{xs:12,sm:12,md:3}} key={item.id}>
          <VisionCard item={item} />
         </Grid>)}
        </Grid>
      </Stack>

      {/* TODO: Why Choose us.............. */}
      <WhyChooseUs />

       {/* TODO: Review ..... */}
      <Container maxWidth='xl' sx={{ py: 10 ,}}>
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
        <CustomSlider useIn="review" />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
