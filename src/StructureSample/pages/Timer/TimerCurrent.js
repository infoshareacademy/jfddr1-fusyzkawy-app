import React, { useContext, useState, useEffect } from "react";
import PlayStop from "../../molecules/PlayStop/PlayStop";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import TaskModifacation from "../../molecules/TaskInformation/TaskModification";
import {
  ContainerBox,
  Task,
  TaskName,
  GridContainerSeffEnd,
} from "./TimerStyled";
import { UserData } from "../../../contexts/UserData";
import { stringDateToDateFormat } from "../../utils/dateFunction";

function TimerCurrent() {
  const { userTasks } = useContext(UserData);
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);
  const [visibleTaskModification, setVisibleTaskModification] = useState(false);
  const [reformattedData, setReformattedData] = useState([]);

  function handlerOnClick(task) {
    setCurrentTask(task);
    setVisibleTaskInformation(true);
  }

  function modifyTask() {
    setVisibleTaskInformation(false);
    setVisibleTaskModification(true);
  }

  const tasks = userTasks.filter(task => task.active !== "stop");
  useEffect(() => {
    userTasks.length && setReformattedData(stringDateToDateFormat(tasks));
  }, [userTasks]);

  return (
    <>
      <ContainerBox>
        {reformattedData.map(task => {
          return (
            <Task key={task.taskId}>
              <TaskName onClick={() => handlerOnClick(task)}>
                {task.title}
              </TaskName>
              <GridContainerSeffEnd>
                <PlayStop classIcon="iconSVG" task={task} showTime={true} />
              </GridContainerSeffEnd>
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
          onApply={() => setVisibleTaskInformation(true)}
        />
      ) : null}
    </>
  );
}

export default TimerCurrent;
