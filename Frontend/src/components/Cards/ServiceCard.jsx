import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { center } from "../../styles/flexStyles";

const ServiceCard = ({ item }) => {
    const smallMobile = useMediaQuery("(max-width:400px)");

  return (
    <Card
      sx={{
        border:'1px solid #ccc',
        width: "100%",
        p:3,
        ...center,
        flexDirection:smallMobile?'column':'row',
        filter: "brightness(100%)",
        bgcolor: "background.default",
        cursor:'pointer',
        transition:
          "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease-in-out",

        "&:hover": {
          transform: "scale(1.06)",
          filter: "brightness(110%)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <IconButton sx={{ bgcolor:"#e0ccff", p: 2, mr: smallMobile?0:1.5 }}>
        {item.icon}
      </IconButton>
      <CardContent sx={{ alignItems:smallMobile?"center": "start" }}>
      <Rating name="read-only" value={item.rating} readOnly size="large" />
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1,textAlign:smallMobile?"center": "start"  }}
        >
          {item.label}
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ fontWeight: 600,textAlign:smallMobile?"center": "start"  }}>
          Our Patners {item.numberOfPartner}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default React.memo(ServiceCard);
