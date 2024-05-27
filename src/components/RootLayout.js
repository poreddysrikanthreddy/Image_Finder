import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPanel from "./Header";

import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <NavbarPanel />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
