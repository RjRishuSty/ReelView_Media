import Container from "@mui/material/Container";
import {Grid,Box} from "@mui/material";
import React from "react";
import AboutSection from "../components/AboutSection";
import CustomSlider from "../components/Swiper/CustomSlider";

const AboutPage = () => {
  return (
    <Box sx={{py:10}}>
      <AboutSection/>
      <CustomSlider useIn='aboutService'/>
    </Box>
  );
};

export default AboutPage;
