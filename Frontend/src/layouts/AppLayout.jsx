import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <React.Fragment>
      <Header />
      {!isHomePage && <BasicBreadcrumbs pathname={location.pathname} />}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
