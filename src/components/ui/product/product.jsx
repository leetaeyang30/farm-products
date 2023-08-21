import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";

import {
  StyledProduct,
  Image,
  ContentWrapper,
  ProductTitle,
  Price
} from "./styled";
import OptionsList from "../option-list/option-list";

export default function Product({ product }) {
  const tabsList = [
    {
      name: "Описание",
      content: product.description
    },
    {
      name: "Характеристики",
      content: <OptionsList list={product.characteristics} />
    },
    {
      name: "Свойства",
      content: <OptionsList list={product.features} />
    }
  ];
  return (
    <>
      <StyledProduct>
        <Image src={product.image} />
        <ContentWrapper>
          <ProductTitle size={TitleSize.SMALL} level={TitleLevel.H3}>
            {product.title}
          </ProductTitle>
          <Tabs maxContentHeight="105px" tabsList={tabsList} />
          <Price>
            {product.price} руб. / {product.weight} гр.
          </Price>
        </ContentWrapper>
      </StyledProduct>
    </>
  );
}
