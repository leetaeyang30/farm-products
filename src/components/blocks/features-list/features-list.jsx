import React from "react";
import Button from "/src/components/ui/button/button";
import { TitleLevel } from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Wrapper, StyledTitle, List } from "./styled";
import { AppRoutes } from "/src/const";

function FeaturesList({ features }) {
  return (
    <section>
      <Wrapper>
        {features?.length ? (
          <>
            <StyledTitle level={TitleLevel.H2}>
              Почему фермерские продукты лучше?
            </StyledTitle>
            <List>
              {features.map((feature) => (
                <li className="features__item" key={feature.id}>
                  <FeatureCard {...feature} />
                </li>
              ))}
            </List>
            <Button link={AppRoutes.ORDER}>Купить</Button>
          </>
        ) : null}
      </Wrapper>
    </section>
  );
}
export default FeaturesList;
