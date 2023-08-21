import React from "react";
import Button from "/src/components/ui/button/button";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "/src/const";
import { MainPageButton } from "./styled";

const buttons = [
  {
    to: AppRoutes.MAIN,
    item: (
      <MainPageButton link={AppRoutes.MAIN} key={AppRoutes.MAIN}>
        Главная
      </MainPageButton>
    )
  },
  {
    to: AppRoutes.ORDER,
    item: (
      <Button link={AppRoutes.ORDER} key={AppRoutes.MAIN}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const currentURL = useLocation().pathname;
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== currentURL)
        .map((button) => button.item)}
    </nav>
  );
}

export default Nav;
