import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Main } from "./styled";

function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
