import { Button, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { menuLinks } from "../data/menuLinksData";

const MenuLinks = ({ scrolled, useIn }) => {
  const location = useLocation();
  const footer = useIn === "footer";
  return (
    <>
      {menuLinks.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Typography
            component={Link}
            to={item.path}
            key={item.id}
            variant="body2"
            sx={{
              mx: 1,
              color:
                scrolled && isActive
                  ? "primary.main"
                  : footer && isActive
                  ? "primary.main"
                  : isActive
                  ? "#fff"
                  : scrolled
                  ? "#000"
                  : footer
                  ? "#000"
                  : "#ccc",
              fontWeight: isActive ? 700 : 600,
              fontSize: isActive ? "0.9rem" : "",
              letterSpacing: 1,
              marginBottom: footer ? 2 : 0,
              "&:hover": {
                color: scrolled && isActive ? "#2b2b81" : "#000",
                borderBottom: !isActive?"1px solid #2b2b81":"",
              }
            }}
          >
            {item.name}
          </Typography>
        );
      })}
    </>
  );
};

export default MenuLinks;
