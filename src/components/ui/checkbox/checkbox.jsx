import React from "react";
import { VisuallyHiddenInput, Label } from "../../styled/index";

export default function Checkbox({
  onChange,
  labelComponent,
  isChecked,
  name,
  value,
  onClick,
  text,
  ...props
}) {
  const LabelComponent = labelComponent;
  return (
    <Label>
      <VisuallyHiddenInput
        name={name}
        onChange={() => onChange(value)}
        isChecked={isChecked}
        {...props}
        type="checkbox"
      />
      <LabelComponent
        $marginTop={25}
        onClick={() => onClick(value)}
        $isChecked={isChecked}
      >
        {text}
      </LabelComponent>
    </Label>
  );
}
