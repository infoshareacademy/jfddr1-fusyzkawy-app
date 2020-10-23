import React from "react";

const Image = ({
  classImage,
  srcImage,
  alternateTextImage,
  title,
  onClick,
}) => {
  return (
    <>
      <img
        className={classImage}
        src={srcImage}
        alt={alternateTextImage}
        onClick={onClick}
        title={title}
      />
    </>
  );
};

export default Image;
