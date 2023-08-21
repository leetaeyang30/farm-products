import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, Wrapper, Copyright } from "./styled";

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <Logo />
        <Copyright>Создано 2021</Copyright>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
