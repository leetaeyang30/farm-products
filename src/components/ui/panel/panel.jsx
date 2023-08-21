import styled from "styled-components";

export const Panel = styled.fieldset`
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  padding-left: ${(props) => props.theme.indent};
  padding-right: ${(props) => props.theme.indent};
  padding-top: 24px;
  padding-bottom: ${(props) => props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background: ${(props) => props.theme.whiteColor};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export default Panel;
