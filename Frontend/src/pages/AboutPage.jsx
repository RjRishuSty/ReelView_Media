import Container from "@mui/material/Container";
import {Grid,Box, Typography} from "@mui/material";
import React from "react";
import AboutSection from "../components/AboutSection";
import CustomSlider from "../components/Swiper/CustomSlider";
import { center } from "../styles/flexStyles";

const AboutPage = () => {
  return (
    <Box sx={{}}>
      <AboutSection/>
       <Box sx={{...center,flexDirection:'column',py:10, background: "linear-gradient(135deg, #2b2b81 0%, #00e6e6 100%)",}}>
        <Typography gutterBottom variant="h3" sx={{fontWeight:700,textAlign:'center',color:'primary.contrastText'}}>Our Services</Typography>
          <Typography variant="body2" sx={{width:'50%',textAlign:'center',color:'primary.contrastText'}}>We are dedicated to connecting people with reliable local services that simplify everyday life. Our mission is to make access to trusted professionals easier, faster, and more transparent for everyone.</Typography>
      <CustomSlider useIn='aboutService'/>
       </Box>
    </Box>
  );
};

export default AboutPage;
