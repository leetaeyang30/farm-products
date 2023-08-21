import React from "react";
import { StyledButton } from "./styled";

function Button({ className, children, link, maxWidth, onClick, disabled }) {
  return (
    <StyledButton
    className={className}
      $maxWidth={maxWidth}
      {...(link
        ? { to: link }
        : { as: "button", onClick, disabled, type: "button" })}
    >
      {children}
    </StyledButton>
  );
}
export default Button;
