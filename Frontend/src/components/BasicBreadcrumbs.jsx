import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { center } from "../styles/flexStyles";

const BasicBreadcrumbs = ({ pathname }) => {
  const path = pathname.split("/").join("");
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="large" />}
      aria-label="breadcrumb"
      sx={{ ...center,py:5,bgcolor:'primary.light' }}
    >
      <Typography
        variant="h4"
        component={Link}
        sx={{ fontWeight: 700 }}
        color="inherit"
        to="/"
      >
        Home
      </Typography>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ textTransform: "capitalize", fontWeight: 700 }}
      >
        {path}
      </Typography>
    </Breadcrumbs>
  );
};

export default React.memo(BasicBreadcrumbs);
