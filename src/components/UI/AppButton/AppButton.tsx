import React from "react";
import { Button } from "./AppButton.style";
import { type } from "os";

export interface IButtonProps {
  buttonLabel: string;
  isDisabled: boolean;
  isError?: boolean
  onClick?:  () => void;
  type?: 'submit' | 'button'
}

export const AppButton = ({
  buttonLabel,
  isDisabled,
  type,
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <Button className="AppButton" type={type} disabled={isDisabled} {...props} onClick={onClick}>
      {buttonLabel}
    </Button>
  );
};
