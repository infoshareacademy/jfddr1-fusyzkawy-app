import React, { useState } from "react";
import { NewInput } from "../atoms/Input";
import DateHeader from "../atoms/DateHeader";
import styled from "styled-components";
import TaskInformation from "../molecules/TaskInformation/TaskInformation";

const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 20px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15),
    0 2px 6px 2px rgba(60, 64, 67, 0.05);
  height: 600px;
  overflow: scroll;
  font-size: 1.5rem;
`;

const GridTemplateContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 100%;
`;

const LeftColumn = styled.p`
  text-align: left;
  padding-left: 30px;
`;

const TaskNameColumn = styled(LeftColumn)`
  &:hover {
    color: var(--basic-green);
  }
`;

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
              value="12:04"
              style={{ width: "55px", margin: "10px" }}
              readOnly={true}
            />
          ))}
        </FlexContainer>
      </GridTemplateContainer>
    </>
  );
}

function TimerWeek({ tasks }) {
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);

  function handlerOnClick(task) {
    setCurrentTask(task);
    console.log(task);
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
                value="12:04"
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
