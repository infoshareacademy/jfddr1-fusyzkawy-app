import React from "react";
import { Container } from "./CheckboxStyled";
function Checkbox({ variables }) {
  return (
    <Container>
      {variables.map((elem, index) => {
        return (
          <div key={elem}>
            <input type="checkbox" id={index} name={elem} />
            <label htmlFor={elem}>{elem}</label>
          </div>
        );
      })}
    </Container>
  );
}

export default Checkbox;
