import React, { useState } from "react";
import { NewInput } from "../../atoms/Input";
import DateHeader from "../../atoms/DateHeader";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import TimerTask from "./TimerTask";
import {
  ContainerBox,
  GridTemplateContainer,
  FlexContainer,
  LeftColumn,
} from "./TimerStyled";

const array = [0, 1, 2, 3, 4]; //create for display 5 input in each line

function TimerWeek({ tasks }) {
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);

  function handlerOnClick(task) {
    setCurrentTask(task);
    setVisibleTaskInformation(true);
  }
  return (
    <>
      <ContainerBox>
        <GridTemplateContainer>
          <LeftColumn>Task description</LeftColumn>
          <DateHeader
            incommingDate={[2020, 10, 13]}
            isDateVisible={true}
            numberOfDay="5"
          />
        </GridTemplateContainer>
        <div>
          {tasks.map(task => {
            return (
              <TimerTask
                onClick={() => handlerOnClick(task)}
                task={task}
                key={task.id}
              />
            );
          })}
        </div>
        <GridTemplateContainer>
          <p style={{ textAlign: "right", paddingRight: "20px" }}>
            <strong>Total:</strong>
          </p>
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
      </ContainerBox>
      {visibleTaskInformation === true ? (
        <TaskInformation
          task={currentTask}
          onCancel={() => setVisibleTaskInformation(false)}
        />
      ) : null}
    </>
  );
}

export default TimerWeek;
