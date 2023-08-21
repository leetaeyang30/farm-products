import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const MainPageButton = styled(Button)`
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.blackColor};
  font-size: 18px;
  line-height: 1;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.whiteColor};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
