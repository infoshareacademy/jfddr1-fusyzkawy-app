import React from "react";

function RadioInput({ categories, name, onClickInput, isChecked }) {
  return (
    <>
      {categories.map(item => (
        <div
          key={item}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <label htmlFor={item}>{item}</label>
          <input
            type="radio"
            id={item}
            value={item}
            name={name}
            onClick={onClickInput}
            checked={isChecked === item}
          />
        </div>
      ))}
    </>
  );
}

export default RadioInput;
