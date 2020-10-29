import React, { useState } from "react";
import Input from "../../atoms/Input";
import PlayStop from "../../molecules/PlayStop/PlayStop";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import TaskModifacation from "../../molecules/TaskInformation/TaskModification";
import {
  ContainerBox,
  Task,
  TaskName,
  GridContainerSeffEnd,
} from "./TimerStyled";

function TimerCurrent({ tasks }) {
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);
  const [visibleTaskModification, setVisibleTaskModification] = useState(false);

  function handlerOnClick(task) {
    setCurrentTask(task);
    setVisibleTaskInformation(true);
  }

  function modifyTask() {
    setVisibleTaskInformation(false);
    setVisibleTaskModification(true);
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
          onChange={modifyTask}
          onCancel={() => setVisibleTaskInformation(false)}
        />
      ) : null}
      {visibleTaskModification === true ? (
        <TaskModifacation
          task={currentTask}
          onCancel={() => setVisibleTaskModification(false)}
        />
      ) : null}
    </>
  );
}

export default TimerCurrent;
