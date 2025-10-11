import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import Sidebar from "./Sidebar";

const Header = () => {
  const isTablet = useMediaQuery("(max-width:700px)");
  const [scrolled, setScrolled] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //* This handler handle sidebar open/close.
  const handleOpenSidebar = useCallback(() => {
    setOpenSideBar(!openSideBar);
  }, [openSideBar]);

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: scrolled ? "primary.main" : "primary.main",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, padding 0.3s ease",
        padding: scrolled ? "0.5rem 0" : "0.3rem 0",
      }}
    >
      <Toolbar>
        <Logo />

        <Box sx={{ marginLeft: "auto" }}>
          {isTablet ? (
            <IconButton
              onClick={handleOpenSidebar}
              sx={{
                backgroundColor: "#f0e6ff",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <MenuTwoToneIcon
                fontSize="large"
                sx={{ color: "#5200cc", "&:hover": { color: "#fff" } }}
              />
            </IconButton>
          ) : (
            <>
              <MenuLinks />
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  bgcolor: "#ccc",
                  color: "#5200cc",
                  fontWeight: 800,
                  ml: 5,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                    bgcolor: "#fff",
                  },
                }}
                startIcon={<CallTwoToneIcon />}
              >
                Get in Touch
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
      {openSideBar && (
        <Sidebar isOpen={openSideBar} isClose={handleOpenSidebar} />
      )}
    </AppBar>
  );
};

export default Header;
