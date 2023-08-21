import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Img } from "/src/components/styled/index";

export const StyledProduct = styled.article`
  display: flex;
  padding: ${(props) => props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.whiteColor};
  width: ${(props) => props.$width || "auto"};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export const Image = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: 20px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 417px;
  min-height: 248px;
  box-sizing: border-box;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 16px;
`;

export const Price = styled.span`
  display: inline-flex;
  background-color: ${(props) => props.theme.aboutBgColor};
  padding: 4px 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;
