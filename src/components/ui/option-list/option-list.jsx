import React from "react";
import { Ul } from "/src/components/styled/index";
import { Option, Property } from "./styled";

export default function OptionsList({ list = [], delimiter = ": " }) {
  return (
    <>
      <Ul>
        {list.map((item, index) => (
          <Option key={`tab${index * 10}`}>
            <Property>
              {item.property}
              {delimiter}
            </Property>
            {item.value}
          </Option>
        ))}
      </Ul>
    </>
  );
}
