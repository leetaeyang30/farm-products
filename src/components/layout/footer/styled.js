import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.width};
  min-height: 80px;
  padding: 0 70px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Copyright = styled.span`
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
`;
