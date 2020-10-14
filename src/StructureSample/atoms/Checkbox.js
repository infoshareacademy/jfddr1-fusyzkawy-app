//Checkbox
import React from "react";

function Checkbox({ categories, name }) {
  return (
    <>
      {categories.map(item => (
        <div
          key={item}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <label htmlFor={item}>{item}</label>
          <input type="checkbox" id={item} value={item} name={name} />
        </div>
      ))}
    </>
  );
}

export default Checkbox;
