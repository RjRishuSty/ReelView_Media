import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import heroVideo from "../assets/heroVideo.mp4";
import { center, startCenter } from '../styles/flexStyles';

const HeroVideo = () => {

     const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >100){
        setScrollY(window.scrollY)
      }else{
        setScrollY(0)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 // Video height
  const videoHeight = Math.min(Math.max(180, 180 + scrollY * 0.8), 500);

 const videoGridWidth = Math.min(80, 33 + scrollY * 0.1);
  return (
     <Container maxWidth="xl" sx={{  mt: 5, px: 5 }}>
        <Grid container rowSpacing={3} columnSpacing={4}>
          <Grid
            size={{ xs: 12, sm: 12, md: scrollY ? 12 : 8 }}
            sx={{
              // border: "2px solid white",
              ...startCenter,
              flexDirection: "column",
              transition: "width 0.6s ease-in-out",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "primary.contrastText",
                textTransform: "capitalize",
              }}
            >
             Discover the Full Range of Services We Provide to Make Life Easier
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                color: "primary.contrastText",
              }}
            >
              From hotels and hospitals to community halls, we provide reliable services designed to simplify your life and meet all your essential needs seamlessly.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: scrollY ? 12: 4 }} sx={{...center,mt:scrollY?5:0}}>
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: scrollY?`${videoGridWidth}%`:'100%',
                height: videoHeight,
                borderRadius: 12,
                objectFit: "cover",
                transition:
                  "height 0.6s ease-in-out, transform 0.6s ease-in-out",
                transform: scrollY ? "scale(1.05)" : "scale(1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
  )
}

export default HeroVideo