import React from "react";
import { NewInput } from "./TimerStyled";
import {
  GridTemplateContainer,
  FlexContainer,
  TaskNameColumn,
} from "./TimerStyled";

const array = [0, 1, 2, 3, 4]; //create for display 5 input in each line

function TimerTask({ task, onClick }) {
  return (
    <>
      <GridTemplateContainer>
        <TaskNameColumn onClick={onClick}>{task.title}</TaskNameColumn>
        <FlexContainer>
          {array.map((elem, index) => (
            <NewInput
              key={index}
              type="text"
              defaultValue="00:00"
              style={{ width: "55px", margin: "10px" }}
              readOnly={true}
            />
          ))}
        </FlexContainer>
      </GridTemplateContainer>
    </>
  );
}

export default TimerTask;
