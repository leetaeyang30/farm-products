import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.theme.width};
  padding: 100px 70px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.indent};
  padding: 0;
  margin: 0 0 64px 0;
  list-style: none;
`;
