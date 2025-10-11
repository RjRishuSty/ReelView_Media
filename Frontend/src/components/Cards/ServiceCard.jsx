import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: "100%",
        p: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: "brightness(100%)",
        bgcolor: "#fff",
        cursor:'pointer',
        // 👇 smooth animation setup
        transition:
          "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease-in-out",

        "&:hover": {
          transform: "scale(1.06)",
          filter: "brightness(110%)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <IconButton sx={{ bgcolor: "#e0ccff", p: 2, mr: 1.5 }}>
        {item.icon}
      </IconButton>
      <CardContent sx={{ alignItems: "start" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}
        >
          {item.label}
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ fontWeight: 600 }}>
          Our Patners {item.numberOfPartner}
        </Typography>
        <Rating name="read-only" value={item.rating} readOnly size="large" />
      </CardContent>
    </Card>
  );
};

export default React.memo(ServiceCard);
