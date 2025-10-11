import React from 'react'
import HeroSwiper from '../components/Swiper/HeroSwiper'
import { Typography } from '@mui/material'
import ServiceSwiper from '../components/Swiper/ServiceSwiper'

const HomePage = () => {
  return (
    <>
      <HeroSwiper/>
      <Typography variant='h3' sx={{textAlign:'center',fontWeight:700,py:5}}>Our Services</Typography>
      <ServiceSwiper/>
    </>
  )
}

export default HomePage