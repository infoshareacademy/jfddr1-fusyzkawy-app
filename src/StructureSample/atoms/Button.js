import React from "react";

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
}) {
  return (
    <div style={style}>
      <button onClick={onClickHandler}>{text}</button>
    </div>
  );
}

export default Button;
