import React, { useState } from "react";
import Input from "../atoms/Input";
import PlayStop from "../molecules/PlayStop";
import styled from "styled-components";
import TaskInformation from "../molecules/TaskInformation/TaskInformation";

const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 20px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15),
    0 2px 6px 2px rgba(60, 64, 67, 0.05);
  height: 500px;
  overflow: scroll;
  font-size: 1.5rem;
`;

const Task = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 50% 40% 10%;
  align-items: end;
  text-align: left;
  overflow: "hidden";
`;

const TaskName = styled.p`
  padding-left: 30px;
  margin: 0;
  overflow: hidden;
  height: 20px;
  &:hover {
    color: var(--basic-green);
  }
`;

const GridContainerSeffEnd = styled.div`
  justify-self: end;
`;

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
                value="12:04"
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
