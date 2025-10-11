import Container from "@mui/material/Container";
import {Grid,Box} from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 5 }} sx={{ border: "2px solid red" }}>
          <Box
            component="img"
            sx={{width:'100%',height:400,objectFit:'cover',objectPosition:'center'}}
            src="https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644201.jpg"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 7 }} sx={{ border: "2px solid red" }}>
          content
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
