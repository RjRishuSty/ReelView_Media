import { Container } from "@mui/material";
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
  const service = useIn === "service";
  const aboutService = useIn === "aboutService";
  //BreakPoints..........
  const breakpoints = service||aboutService
    ? {
        320: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1280: { slidesPerView: 3 },
      }
    : {
        320: { slidesPerView: 1 },
        960: { slidesPerView: 2 },
      };
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Swiper
        className="customSlider"
        modules={[Navigation, Autoplay]}
        spaceBetween={service ||aboutService? 20 : 80}
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
        style={{ padding: service ? "0px 50px " : "10px 70px" }}
        breakpoints={breakpoints}
      >
        {(service ? servicesCategories: aboutService?aboutServiceData: reviews).map((item) => (
          <SwiperSlide key={item.id}>
            {service ? (
              <ServiceCard item={item} />
            ) :aboutService?<AboutServiceCard item={item}/>: (
              <ReviewCard item={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomSlider;
