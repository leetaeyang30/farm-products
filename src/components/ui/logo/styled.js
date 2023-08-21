import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
`;

export const LogoMainPage = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
`;

export const Image = styled(LogoImage)`
  margin-right: 24px;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;
