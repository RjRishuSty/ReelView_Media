import { Box, Drawer } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import { flexStart } from "../styles/flexStyles";

const Sidebar = ({ isOpen, isClose }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => isClose(false)}
      PaperProps={{
        sx: {
          bgcolor: "primary.light",
          height: "100vh",
        },
      }}
    >
      <Box
        sx={{
          width: 250,
          height: "100%",
          bgcolor: "primary.light",
          py: 3,
          px: 2,
        }}
      >
        <Box sx={{ ...flexStart, flexDirection: "column" }}>
          <MenuLinks />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
