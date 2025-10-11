import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Typography variant="h5" className=" uppercase" sx={{color:'#fff',fontWeight:800}}>
      ReelView{" "}
      <Typography component="span" variant="h5" className="uppercase" sx={{color:'#ccc', fontWeight:600}}>
        Media
      </Typography>
    </Typography>
  );
};

export default Logo;
