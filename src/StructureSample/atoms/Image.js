import React from "react";

const Image = ({ classImage, srcImage, alternateTextImage, onClick }) => {
  return (
    <>
      <img
        className={classImage}
        src={srcImage}
        alt={alternateTextImage}
        onClick={onClick}
      />
    </>
  );
};

export default Image;
