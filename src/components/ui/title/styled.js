import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => props.$marginBottom || "0"}px;
  padding: 0;
  font-weight: 700;
  line-height: ${(props) => {
    let lineHeight = "41px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "51px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "31px";
    }
    if (props.$size === TitleSize.EXTRA_SMALL) {
      lineHeight = "27px";
    }
    return lineHeight;
  }};
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "24px";
    }
    if (props.$size === TitleSize.EXTRA_SMALL) {
      fontSize = "18px";
    }
    return fontSize;
  }};
`;
