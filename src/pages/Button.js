import React from "react";
import * as Buttons from './ButtonsFest'

function Button({
  text,
  color,
  colorHover,
  hoverClass,
  onClickClass,
  width,
  heiht,
  onClickHandler,
  style,
  buttonName = 'Normal'
}) {
  const ButtonComponent = Buttons[buttonName + 'Button']
  return (
    <div style={style}>
      <ButtonComponent onClick={onClickHandler}>{text}</ButtonComponent>
    </div>
  );
}

export default Button;
