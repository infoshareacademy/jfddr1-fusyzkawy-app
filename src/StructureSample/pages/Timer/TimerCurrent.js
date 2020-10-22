import React, { useState } from "react";
import Input from "../../atoms/Input";
import PlayStop from "../../molecules/PlayStop";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import {
  ContainerBox,
  Task,
  TaskName,
  GridContainerSeffEnd,
} from "./TimerStyled";

function TimerCurrent({ tasks }) {
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);

  function handlerOnClick(task) {
    setCurrentTask(task);
    setVisibleTaskInformation(true);
  }

  return (
    <>
      <ContainerBox>
        {tasks.map(task => {
          return (
            <Task key={task.id}>
              <TaskName onClick={() => handlerOnClick(task)}>
                {task.title}
              </TaskName>
              <GridContainerSeffEnd>
                <PlayStop classIcon="iconSVG" />
              </GridContainerSeffEnd>
              <Input
                type="text"
                defaultValue="00:00"
                style={{ width: "60px", marginLeft: "10px" }}
                readOnly={true}
              />
            </Task>
          );
        })}
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

export default TimerCurrent;
