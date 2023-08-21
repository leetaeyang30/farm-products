import React from "react";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "/src/const";
import { StyledLogo, Image, Text, LogoMainPage } from "./styled";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoutes.MAIN ? (
    <LogoMainPage>
      <Image alt="Фермер." />
      <Text>Фермерские продукты</Text>
    </LogoMainPage>
  ) : (
    <StyledLogo to={AppRoutes.MAIN}>
      <Image alt="Фермер." />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
