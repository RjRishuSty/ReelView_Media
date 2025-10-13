import { Typography } from "@mui/material";
import React from "react";

const Logo = ({ scrolled,useIn }) => {
  const footer = useIn === 'footer';
  return (
    <Typography
      variant="h5"
      className=" uppercase"
      sx={{ color: scrolled ? "primary.main" :footer?"#000": "#fff", fontWeight: 800 }}
    >
      Reelview{" "}
      <Typography
        component="span"
        variant="h5"
        className="uppercase"
        sx={{ color: scrolled ? "primary.main" :footer?"#000": "#fff", fontWeight: 800 }}
      >
        Media
      </Typography>
    </Typography>
  );
};

export default Logo;
