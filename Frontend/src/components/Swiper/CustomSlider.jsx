import { Box, Container, useMediaQuery } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ServiceCard from "../Cards/ServiceCard";
import { servicesCategories } from "../../data/servicesCategoriesData";
import ReviewCard from "../Cards/ReviewCard";
import { reviews } from "../../data/reviewsData";
import AboutServiceCard from "../Cards/AboutServiceCard";
import { aboutServiceData } from "../../data/aboutServiceData";

const CustomSlider = ({ useIn }) => {
  const minLaptop = useMediaQuery("(max-width:1082px)");
  const isTablet = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:599px)");
  const service = useIn === "service";
  const aboutService = useIn === "aboutService";
  const review = useIn === "review";
  //BreakPoints..........
  const breakpoints =
    service || aboutService 
      ? {
          
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }
      : {
          320: { slidesPerView: 1 },
          600:{slidesPerView:1},
          960: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        };
  return (
    <Container maxWidth="xl" sx={{ py: 5,height:review?'60vh':"auto" }}>
      <Swiper
        className="customSlider"
        modules={[Navigation, Autoplay]}
        spaceBetween={service || aboutService || review ?isMobile?10: 20 :isTablet?10: 80}
        slidesPerView={service || aboutService ? 3.5 : 2}
        navigation
        autoplay={
          service
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        loop={true}
        style={{
          padding: service||review
            ? isMobile
              ? "0px 20px"
              : isTablet
              ? "0px 0px"
              : minLaptop
              ? "0px 20px"
              : "0px 50px "
            : "10px 70px",
            height:'100%',
        }}
        breakpoints={breakpoints}
      >
        {(service
          ? servicesCategories
          : aboutService
          ? aboutServiceData
          : reviews
        ).map((item) => (
          <SwiperSlide key={item.id}>
            {service ? (
              <ServiceCard item={item} />
            ) : aboutService ? (
              <AboutServiceCard item={item} />
            ) : (
               <ReviewCard item={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomSlider;
