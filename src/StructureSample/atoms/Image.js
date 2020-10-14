import React from "react";

const Image = ({ classImage, srcImage, alternateTextImage }) => {
  return (
    <>
      <img className={classImage} src={srcImage} alt={alternateTextImage} />
    </>
  );
};

export default Image;
