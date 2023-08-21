import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { AboutSection, Wrapper, StyledTitle, Text } from "./styled";

function About() {
  return (
    <AboutSection>
      <Wrapper>
        <StyledTitle size={TitleSize.BIG} level={TitleLevel.H2}>
          Магазин фермерских продуктов с доставкой
        </StyledTitle>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </Wrapper>
    </AboutSection>
  );
}

export default About;
