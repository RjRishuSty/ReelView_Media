import { Button, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import {menuLinks} from '../data/menuLinksData';

const MenuLinks = () => {
  const location = useLocation();
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
              color: isActive ? "#fff" : "#ccc",
              fontWeight:isActive?700:600,
              fontSize:isActive?"0.9rem":"",
              letterSpacing:1,
              "&:hover": {
                color: isActive ? "#fff" : "#fff",
              },
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
