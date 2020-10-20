import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  text-align: left;
  padding: 10px;
`;

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
