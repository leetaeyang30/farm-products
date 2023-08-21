import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Farmer from "/src/assets/farmer.svg";

export const AboutSection = styled.section`
  background-color: ${(props) => props.theme.aboutBgColor};
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.theme.width};
  padding: 183px 70px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    right: 70px;
    top: 50%;
    transform: translateY(-50%);
    width: 446px;
    height: 446px;
    background-color: #c4e2ff;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: "";
    top: 55px;
    right: 157px;
    width: 273px;
    height: 627px;
    background-image: url(${Farmer});
    background-repeat: no-repeat;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
  max-width: 540px;
`;

export const Text = styled.p`
  margin: 0;
  max-width: 540px;
`;
