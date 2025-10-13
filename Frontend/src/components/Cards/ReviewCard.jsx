import React from "react";
import { Card, CardContent, Typography, Box, Avatar, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ReviewCard = ({ item }) => {
  return (
    <Card
      sx={{
        width:'100%',
        borderRadius: 3,
        boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
        p: 2,
        bgcolor:'primary.main',
        minHeight:220
        
      }}
    >
      <Box display="flex" mb={1}>
        <Rating name="read-only" value={item.rating} readOnly size="medium" />
      </Box>
      <Typography variant="h6" fontWeight="600" gutterBottom sx={{color:'primary.contrastText'}}>
        {item.title}
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={2} sx={{color:'primary.contrastText'}}>
        “{item.feedback}”
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={item.img} alt={item.name} />
          <Typography fontWeight="600" sx={{color:'primary.light'}}>{item.name}</Typography>
        </Box>
        <Typography variant="caption" color="secondary.light">
          {item.daysAgo}
        </Typography>
      </Box>
    </Card>
  );
};

export default React.memo(ReviewCard);
