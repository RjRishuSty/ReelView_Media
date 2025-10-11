import { Box, Typography } from "@mui/material";
import React from "react";
import { center, flexEnd } from "../styles/flexStyles";

const AboutUsImages = () => {
  return (
    <Box
      sx={{
        p: 3,
        width:'100%',
        minHeight:350,
        opacity: 0.9,
        backgroundImage: `url(https://www.pngitem.com/pimgs/m/124-1246858_creative-about-us-hd-png-download.png)`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        borderRadius:5
      }}
    >
      {/* <Box sx={{ border: "2px solid blue" }}>
        <Typography gutterBottom variant="h2" sx={{ fontWeight: 700 }}>
          Reel
        </Typography>
      </Box>
      <Box sx={{ border: "2px solid blue", ...center }}>
        <Typography gutterBottom variant="h3" sx={{ fontWeight: 600 }}>
          view
        </Typography>
      </Box>
      <Box sx={{ border: "2px solid blue", ...flexEnd }}>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 500 }}>
          Media
        </Typography>
      </Box> */}
    </Box>
  );
};

export default AboutUsImages;
