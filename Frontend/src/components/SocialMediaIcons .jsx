import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    url: "https://facebook.com/",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    url: "https://instagram.com/",
    color: "#E1306C",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    url: "https://youtube.com/",
    color: "#FF0000",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    url: "https://twitter.com/",
    color: "#1DA1F2",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://linkedin.com/",
    color: "#0077B5",
  },
];

const SocialMediaIcons = () => {
  return (
    <>
      {socialLinks.map((item) => (
        <Tooltip title={item.name} key={item.name}>
          <IconButton
            component={Link}
            to={item.url}
            target="_blank"
            sx={{
              color: item.color,
              mr:2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                backgroundColor: "hover.main",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </>
  );
};

export default SocialMediaIcons;
