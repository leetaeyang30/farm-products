import React from "react";
import { TitleSize, TitleLevel } from "../title/title";
import {
  StyledFeatureCard,
  Wrapper,
  Image,
  Text,
  Type,
  StyledTitle
} from "./styled";

function FeatureCard({ image, typeName, title, text, isNegative }) {
  return (
    <StyledFeatureCard $isNegative={isNegative}>
      <Wrapper>
        <Image alt="" src={image} />
        <div>
          <Type $isNegative={isNegative}>{typeName}</Type>
          <StyledTitle size={TitleSize.SMALL} level={TitleLevel.H3}>
            {title}
          </StyledTitle>
        </div>
      </Wrapper>
      <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
    </StyledFeatureCard>
  );
}

export default FeatureCard;
