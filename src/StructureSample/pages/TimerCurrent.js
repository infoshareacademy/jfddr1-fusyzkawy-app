import React from "react";
import Input from "../atoms/Input";
import PlayStop from "../molecules/PlayStop";
import styled from "styled-components";

const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 20px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15),
    0 2px 6px 2px rgba(60, 64, 67, 0.05);
  height: 500px;
  overflow: scroll;
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
`;

const GridContainerSeffEnd = styled.div`
  justify-self: end;
`;

function TimerCurrent({ tasks }) {
  return (
    <ContainerBox>
      {tasks.map(task => {
        return (
          <Task>
            <TaskName>{task.title}</TaskName>
            <GridContainerSeffEnd>
              <PlayStop classIcon="iconSVG" />
            </GridContainerSeffEnd>
            <Input
              type="text"
              value="12:04"
              style={{ width: "50px", height: "21px", marginLeft: "10px" }}
            />
          </Task>
        );
      })}
    </ContainerBox>
  );
}

export default TimerCurrent;
