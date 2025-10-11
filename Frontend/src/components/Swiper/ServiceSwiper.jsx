import { Container } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ComputerIcon from "@mui/icons-material/Computer";
import FlightIcon from "@mui/icons-material/Flight";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MovieIcon from "@mui/icons-material/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ServiceCard from "../Cards/ServiceCard";

const servicesCategories = [
  {
    id: 1,
    label: "Hospital",
    numberOfPartner: 25,
    rating: 4.8,
    icon: <LocalHospitalIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    description: "Helping hospitals build strong online visibility and trust.",
  },
  {
    id: 2,
    label: "Wedding",
    numberOfPartner: 40,
    rating: 4.6,
    icon: <FavoriteIcon sx={{ fontSize: 40, color: "#e91e63" }} />,
    description: "Making every wedding story viral with creative visuals.",
  },
  {
    id: 3,
    label: "Hotels",
    numberOfPartner: 32,
    rating: 4.7,
    icon: <HotelIcon sx={{ fontSize: 40, color: "#009688" }} />,
    description: "Boosting bookings through impactful digital storytelling.",
  },
  {
    id: 4,
    label: "Automotive",
    numberOfPartner: 18,
    rating: 4.5,
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
    description: "Driving engagement and brand loyalty for automotive brands.",
  },
  {
    id: 5,
    label: "Education",
    numberOfPartner: 27,
    rating: 4.9,
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#3f51b5" }} />,
    description: "Helping institutions attract students through social media.",
  },
  {
    id: 6,
    label: "Restaurants",
    numberOfPartner: 22,
    rating: 4.4,
    icon: <RestaurantIcon sx={{ fontSize: 40, color: "#c62828" }} />,
    description: "Making food content irresistible and brand recognizable.",
  },
  {
    id: 7,
    label: "Real Estate",
    numberOfPartner: 30,
    rating: 4.6,
    icon: <HomeWorkIcon sx={{ fontSize: 40, color: "#4caf50" }} />,
    description: "Showcasing properties with high-quality visuals and ads.",
  },
  {
    id: 8,
    label: "Fashion",
    numberOfPartner: 45,
    rating: 4.8,
    icon: <CheckroomIcon sx={{ fontSize: 40, color: "#9c27b0" }} />,
    description: "Building strong style brands with stunning reel visuals.",
  },
  {
    id: 9,
    label: "Fitness",
    numberOfPartner: 20,
    rating: 4.7,
    icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#ff5722" }} />,
    description: "Creating motivating and performance-driven fitness content.",
  },
  {
    id: 10,
    label: "Technology",
    numberOfPartner: 35,
    rating: 4.9,
    icon: <ComputerIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
    description: "Simplifying complex tech into engaging visual stories.",
  },
  {
    id: 11,
    label: "Travel",
    numberOfPartner: 29,
    rating: 4.5,
    icon: <FlightIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    description: "Inspiring travelers through cinematic destination reels.",
  },
  {
    id: 12,
    label: "Beauty ",
    numberOfPartner: 33,
    rating: 4.6,
    icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 40, color: "#ec407a" }} />,
    description: "Highlighting beauty transformations with trendy content.",
  },
  {
    id: 13,
    label: "Food",
    numberOfPartner: 26,
    rating: 4.7,
    icon: <FastfoodIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
    description: "Tasty visuals that attract customers instantly.",
  },
  {
    id: 14,
    label: "Photography",
    numberOfPartner: 24,
    rating: 4.8,
    icon: <PhotoCameraIcon sx={{ fontSize: 40, color: "#6a1b9a" }} />,
    description: "Helping photographers showcase portfolios that convert.",
  },
  {
    id: 15,
    label: "Entertainment",
    numberOfPartner: 38,
    rating: 4.9,
    icon: <MovieIcon sx={{ fontSize: 40, color: "#f44336" }} />,
    description: "Creating viral content for music, film, and media brands.",
  },
];

const ServiceSwiper = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3.5}
        navigation
        autoplay={{
          delay: 2500, // time between slides (ms)
          disableOnInteraction: false, // keeps autoplay even after user scrolls
        }}
        loop={true} // 👈 continuous loop
        style={{ padding: "0px 50px " }}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {servicesCategories.map((item) => (
          <SwiperSlide key={item.id}>
            <ServiceCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ServiceSwiper;
