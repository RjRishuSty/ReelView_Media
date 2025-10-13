import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Container,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { serviceFeatures } from "../data/whyChooseUsData";

const WhyChooseUs = () => {
  const [expanded, setExpanded] = useState(serviceFeatures[0].id); // first open

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // only one open at a time
  };
  return (
    <Stack
      sx={{
        position: "relative",
        height: 'auto',
        width: '100%',
        overflow: "hidden",
        color: "white", 
        py:10,
        mb:5
      }}
    >
      <Box
        component="span"
        sx={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(https://t3.ftcdn.net/jpg/03/00/00/04/360_F_300000400_DNQp8NueAATe3LkIxPKxMBHHjjwNKPcO.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9, 
          zIndex: 0,
          filter:'brightness(30%)'
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, p: 2 }}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ fontWeight: 700, textAlign: "center", mb: 5 }}
        >
          Why Choose Us?
        </Typography>
            <Container maxWidth="md">
                {serviceFeatures.map((feature) => (
              <Accordion
                key={feature.id}
                expanded={expanded === feature.id}
                onChange={handleChange(feature.id)}
                sx={{ mb: 1, border: "1px solid #ccc" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                >
                  <Typography variant="body1" sx={{ fontWeight: 800, mb: 1 }}>
                    {feature.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{feature.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            </Container>
      </Box>
    </Stack>
  );
};

export default WhyChooseUs;
