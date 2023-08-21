import styled, { css } from "styled-components";
import { Ul, Li, Button } from "/src/components/styled/index";

export const HeaderList = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const TabItem = styled(Li)`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const TabButton = styled.button`
  display: block;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: ${(props) => props.theme.fontFamily};
  ${(props) =>
    props.$isSelect
      ? css`
          background: ${props.theme.prosSideColor};
          color: ${props.theme.whiteColor};
          cursor: initial;
        `
      : css`
          background: ${props.theme.contrastTextColor};
          color: ${props.theme.textColor};
        `};
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  margin-bottom: 18px;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;
