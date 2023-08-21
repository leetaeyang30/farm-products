import styled, { css } from "styled-components";
import { Label } from "/src/components/styled/index";
import { Swiper } from "swiper/react";
import Tick from "/src/assets/checked-tick.svg";
import Price from "/src/components/ui/price/price";

export const Order = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.contrastTextColor};
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${(props) => props.theme.width};
  padding-top: 40px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const LeftColumn = styled.div`
  width: 353px;
  max-height: 100%;
  margin-right: 20px;
  padding-bottom: 40px;
  overflow-y: overlay;
`;

export const PriceLabel = styled(Label)`
  margin-bottom: 8px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;

export const AddressInput = styled.input`
  display: flex;
  width: 100%;
  padding: 14px 12px 13px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.contrastTextColor};
  font-family: "Inter", "Arial", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;

export const ProductSwiper = styled(Swiper)`
  height: 115vh;
  width: 727px;
  margin: 0;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  margin-top: ${(props) => props.$marginTop || "0"}px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    position: absolute;
    right: 0;
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${props.theme.buttonColor};
            background-image: url(${Tick});
            background-position: center;
            background-repeat: no-repeat;
          `
        : css`
            background-color: ${props.theme.contrastTextColor};
          `}
  }
`;
