import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  padding: 16px 10px 17px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.4s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: #ddd;
    cursor: initial;
  }
`;
