import React, { useState } from "react";
import { HeaderList, TabItem, TabButton, Content } from "./styled";

export default function Tabs({ tabsList = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <HeaderList>
        {tabsList.map((tab, index) => (
          <TabItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={index === selectIndex}
              {...(selectIndex === index
                ? { as: "span" }
                : { onClick: () => setSelectIndex(index) })}
            >
              {tab.name}
            </TabButton>
          </TabItem>
        ))}
      </HeaderList>
      <Content maxContentHeight={maxContentHeight}>
        {tabsList[selectIndex].content}
      </Content>
    </div>
  );
}
