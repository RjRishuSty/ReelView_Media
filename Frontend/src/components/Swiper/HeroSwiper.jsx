import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { herosliderData } from "../../data/heroSliderData";


const HeroSwiper = () => {

  //TODO: Add for responsive.............
   const isTablet = useMediaQuery("(max-width:700px)");

  return (
    <Swiper
    className="heroSlider"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {herosliderData.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={item.img}
            alt={item.heading}
            sx={{
              width: "100%",
              height: 600,
              objectFit: "cover",
              objectPosition: "start",
              filter:'brightness(50%)'
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: isTablet?'100%':"70%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              p: 3,
            }}
          >
            <Typography
              variant={isTablet?"h4":"h3"}
              sx={{
                textAlign: "center",
                fontWeight: 900,
                textTransform: "capitalize",
                color:'secondary.main'
              }}
            >
              {item.heading}
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize:isTablet?"1rem":'1.5rem',fontWeight:600,color:'secondary.light',letterSpacing:1,wordSpacing:1 }}>
              {item.description}
            </Typography>
            <Button variant="contained" size="large" sx={{backgroundColor:'#4700b3',letterSpacing:1,wordSpacing:2}}>
              {item.actionLabel}
            </Button>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
