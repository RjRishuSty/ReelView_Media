import {
  AppBar,
  Box,
  Button,
  IconButton,
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

  // Detect scroll...........
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
        boxShadow: scrolled?"black":"none",
        bgcolor: scrolled ? "secondary.main" : "primary.main",
        transition: "background-color 0.5s ease, padding 0.5s ease",
        padding: scrolled ? "0.5rem 0" : "0.3rem 0",
      }}
    >
      <Toolbar>
        <Logo scrolled={scrolled} />

        <Box sx={{ marginLeft: "auto" }}>
          {isTablet ? (
            <IconButton onClick={handleOpenSidebar} sx={{bgcolor:'#ccc'}}>
              <MenuTwoToneIcon fontSize="medium" />
            </IconButton>
          ) : (
            <>
              <MenuLinks scrolled={scrolled} />
              <Button
                variant={scrolled?"contained":"outlined"}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 800,
                  ml: 5,
                  border: !scrolled&&"2px solid #fff",
                  color: "#fff",
                  transition: "transform 0.9s ease-in-out",
                  "&:hover":scrolled ?{bgcolor:"transparent",border:'2px solid #2b2b81',color:'primary.main'}: {
                    transform: "scale(1.1)",
                    bgcolor: "#fff",
                    color: "primary.main",
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
