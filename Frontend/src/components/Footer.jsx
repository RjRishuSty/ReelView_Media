import {Box, Container, Divider, Grid, Stack, Typography} from '@mui/material';
import Logo from './Logo';
import MenuLinks from './MenuLinks';

const Footer = () => {
  return (
    <Stack sx={{pt:5,bgcolor:'#5200cc'}}>
      <Container>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <Grid size={{xs:12,sm:12,md:4}} sx={{p:1,display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column'}}>
            <Logo/>
            <Typography gutterBottom variant='body2' sx={{letterSpacing:1, wordSpacing:2,mt:2,textAlign:'start',lineHeight:1.7 ,color:'#e6e6e6'}}>
              We are a one-stop platform dedicated to connecting people with all types of essential services—quickly, reliably, and locally. Whether you're planning a wedding, seeking medical help, looking for legal support, or just need everyday services like a general store or electrician—we bring everything under one roof.
            </Typography>
          </Grid>
          <Grid size={{xs:12,sm:12,md:4}} sx={{p:1,}}>
            <Typography variant='h5' sx={{fontWeight:'700',color:'#fff',textAlign:'center'}}>Quick Links</Typography>
            <Box sx={{mt:3,display:'flex',justifyContent:'start',alignItems:'center',flexDirection:'column'}}>
              <MenuLinks/>
            </Box>
          </Grid>
          <Grid size={{xs:12,sm:12,md:4}} sx={{}}></Grid>
        </Grid>
      </Container>
      <Divider color="#ccc"/>
      <Container sx={{p:2}}>
        <Grid container>
          <Grid size={{xs:12,sm:12,md:5}}>
            <Typography variant='title1' sx={{color:'#fff'}}> © {new Date().getFullYear()} ReelView Media All rights reserved.</Typography>
          </Grid>
          <Grid size={{xs:12,sm:12,md:7}} sx={{display:'flex',justifyContent:'end',alignItems:'center'}}>
            <Typography variant='title1' sx={{color:'#fff'}}> Socal Media Icon</Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

export default Footer