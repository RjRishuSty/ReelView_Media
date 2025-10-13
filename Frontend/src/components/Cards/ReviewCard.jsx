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
        
      }}
    >
      {/* ⭐ Rating */}
      <Box display="flex" mb={1}>
        <Rating name="read-only" value={item.rating} readOnly size="large" />
      </Box>

      {/* 🧠 Title */}
      <Typography variant="h6" fontWeight="600" gutterBottom>
        {item.title}
      </Typography>

      {/* 💬 Feedback */}
      <Typography variant="body2" color="text.secondary" mb={2}>
        “{item.feedback}”
      </Typography>

      {/* 👤 User Info */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={item.img} alt={item.name} />
          <Typography fontWeight="600">{item.name}</Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          {item.daysAgo}
        </Typography>
      </Box>
    </Card>
  );
};

export default React.memo(ReviewCard);
