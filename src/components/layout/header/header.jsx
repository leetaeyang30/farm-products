import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "../nav/nav";
import { StyledHeader, Wrapper } from "./styled";

function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <Nav />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
