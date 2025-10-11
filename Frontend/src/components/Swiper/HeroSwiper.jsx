import { Box, Button, Stack, Typography } from "@mui/material";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sliderData = [
  {
    id: 1,
    heading: "One Platform. Every Service You Need.",
    description:
      "Connect with essential services like hotels, hospitals, and community halls—all in one place. Making access simple, fast, and reliable.",
    actionLabel: "Explore Services",
    img: "https://phoenixnap.com/glossary/wp-content/uploads/2022/10/what-is-an-internet-service-provider.jpg",
    path: "/",
  },
  {
    id: 2,
    heading: " Your Gateway to Trusted Local Services",
    description:
      "Discover and book services that matter to your life—from healthcare to hospitality—with verified listings and real-time availability.",
    actionLabel: "View Services",
    img: "https://phoenixnap.com/glossary/wp-content/uploads/2022/10/what-is-an-internet-service-provider.jpg",
    path: "/",
  },
  {
    id: 3,
    heading: "A Smarter Way to Uplift Society.",
    description:
      "We bring essential services closer to you. Promote growth, support community welfare, and make better choices with confidence.",
    actionLabel: "Get Started",
    img: "https://phoenixnap.com/glossary/wp-content/uploads/2022/10/what-is-an-internet-service-provider.jpg",
    path: "/contact",
  },
  {
    id: 4,
    heading: "Elevate Your Social Living with Ease ",
    description:
      "Discover and book services that matter to your life—from healthcare to hospitality—with verified listings and real-time availability.",
    actionLabel: "View Services",
    img: "https://phoenixnap.com/glossary/wp-content/uploads/2022/10/what-is-an-internet-service-provider.jpg",
    path: "/",
  },
  {
    id: 5,
    heading: "Uniting Services for a Better Tomorrow.",
    description:
      "We’re not just a platform—we’re a movement. Helping individuals and communities grow through easy access to vital services.",
    actionLabel: "Get Started",
    img: "https://phoenixnap.com/glossary/wp-content/uploads/2022/10/what-is-an-internet-service-provider.jpg",
    path: "/contact",
  },
];

const HeroSwiper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {sliderData.map((item) => (
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
              filter:'brightness(10%)'
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "70%",
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
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                textTransform: "capitalize",
                color:'#4700b3'
              }}
            >
              {item.heading}
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize:'1.5rem',fontWeight:600,color:'#fff',letterSpacing:1,wordSpacing:1 }}>
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
