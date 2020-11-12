import React from "react";

const Image = ({
  classImage,
  srcImage,
  alternateTextImage,
  title,
  onClick,
  style,
}) => {
  return (
    <>
      <img
        className={classImage}
        src={srcImage}
        alt={alternateTextImage}
        onClick={onClick}
        title={title}
        style={style}
      />
    </>
  );
};

export default Image;
