//Checkbox

import React from "react";

function Checkbox({ variables }) {
  return (
    <>
      {variables.map((elem, index) => {
        return (
          <div>
            <input type="checkbox" id={index} name={elem} />
            <label for="scales">{elem}</label>
          </div>
        );
      })}
    </>
  );
}

export default Checkbox;
