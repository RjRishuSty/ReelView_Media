import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { center } from "../styles/flexStyles";
import HeroVideo from "./HeroVideo";

const HeroSection = () => {
  //TODO: Add for responsive.............
  const isTablet = useMediaQuery("(max-width:700px)");
 
  return (
    <Stack
      component="section"
      sx={{
        height: "auto",
        pb:10,
        bgcolor: "primary.main",
        ...center,
      }}
    >
      <Container sx={{ mt: 10, ...center, flexDirection: "column" }}>
        <Typography
          variant={isTablet ? "h1" : "h3"}
          sx={{
            // border: "2px solid red",
            fontSize: "6rem",
            textAlign: "center",
            fontWeight: 900,
            color: "secondary.main",
          }}
        >
          Making Your Life{" "}
          <Typography
            variant="h1"
            component="span"
            sx={{
              color: "text.highlight",
              fontSize: "6rem",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            Easier with Every Service.
          </Typography>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            width: "75%",
            mt: 1,
            textAlign: "center",
            color: "secondary.light",
            fontSize: "1.3rem",
            fontWeight: 100,
            letterSpacing: 0.5,
            wordSpacing: 0.7,
          }}
        >
          Connect with essential services like hotels, hospitals, and community
          halls—all in one place. Making access simple, fast, and reliable.
        </Typography>
      </Container>
     <HeroVideo/>
    </Stack>
  );
};

export default HeroSection;
