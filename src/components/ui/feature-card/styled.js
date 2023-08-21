import styled from "styled-components";
import Title from "../title/title";

export const StyledFeatureCard = styled.article`
  width: 540px;
  height: 197px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => (props.$isNegative ? "#f8ddd7" : "#e1edce")};
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const Type = styled.span`
  display: inline-block;
  padding: 2px 10px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => (props.$isNegative ? "#f75531" : "#88aa4d")};
`;

export const Image = styled.img`
  margin-right: ${(props) => props.theme.indent};
  width: 56px;
  height: 56px;
  object-fit: contain;
`;

export const StyledTitle = styled(Title)`
  grid-column: 2/3;
  grid-row: 2/3;
`;

export const Text = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
`;
