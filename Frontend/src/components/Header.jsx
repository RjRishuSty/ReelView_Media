import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";

const Header = () => {
  return (
    <Stack className="px-5 py-5">
      <AppBar
        position="sticky"
        className="!bg-[#5200cc]"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar>
          {/* TODO: importing Logo .................. */}
          <Box>
            <Logo />
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
           <MenuLinks />
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                bgcolor: "#ccc",
                color:'#5200cc',
                fontWeight:800,
                ml:5,
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
          </Box>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Header;
