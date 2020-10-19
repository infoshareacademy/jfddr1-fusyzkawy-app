import React, { useState } from "react";
import styled from "styled-components";
import RadioInput from "../atoms/RadioInput";
import { options } from "../../test_variables";
import EditIcon from "../../img/EditIcon.svg";
import RemoveIcon from "../../img/RemoveIcon.svg";
import CancelIcon from "../../img/CancelIcon.svg";
import UserIcon from "../../img/UserIcon.svg";

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.451);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-left: 5px solid var(--task-${props => props.color}-dark);
  border-radius: 0 15px 15px 0;
  background-color: var(--task-${props => props.color}-light);
  width: 400px;
  padding: 15px;
  padding-left: 25px;
  text-align: left;
  color: var(--gray-3);
  font-size: 1.5rem;
  min-height: 400px;
`;

const TaskHeader = styled.div`
  display: flex;
  margin: 15px 5px 15px 15px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

const Photo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin-right: 10px;
`;

const PhotoContainer = styled.div`
  display: flex;
`;

const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const Tag = styled.li`
  padding: 0 5px;
`;

function TaskInformation({ task }) {
  const [status, setStatus] = useState(task.status);
  const [viewStatusOption, setViewStatusOption] = useState(false);
  const tags = task.tags?.split(" ");
  const generalStyle = { margin: "10px 5px" };

  function handlerOnClick(event) {
    setStatus(event.target.value);
    setViewStatusOption(false);
  }

  return (
    <Background>
      <Container color={task.color || "gray"}>
        <TaskHeader>
          <h2 style={generalStyle}>{task.title}</h2>
          <div style={{ width: "100px" }}>
            <img src={EditIcon} height="30" width="30" alt="edit"></img>
            <img src={RemoveIcon} height="30" width="30" alt="remove"></img>
            <img src={CancelIcon} height="30" width="20" alt="cancel"></img>
          </div>
        </TaskHeader>
        <div style={generalStyle}>
          Status:{"  "}
          <button onClick={() => setViewStatusOption(true)}>
            {status || options[0]}
          </button>
          {viewStatusOption === true ? (
            <RadioInput
              categories={options}
              name="status"
              onClickInput={handlerOnClick}
            />
          ) : null}
          <p style={generalStyle}>
            {task.start.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}{" "}
            -{" "}
            {task.end.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
          <PhotoContainer>
            <Photo>
              <img
                src={task.imgCreator || UserIcon}
                height="50"
                title="Creator"
                alt="creator"
              />
            </Photo>
            <Photo>
              <img
                src={task.imgAssign || UserIcon}
                height="50"
                title="Assign"
                alt="assign"
              />
            </Photo>
          </PhotoContainer>
          <div style={generalStyle}>
            {tags && (
              <>
                <h3 style={generalStyle}>Tags:</h3>
                <TagsContainer>
                  {tags.map(elem => (
                    <Tag href=""> {elem} </Tag>
                  ))}
                </TagsContainer>
              </>
            )}
          </div>
          {task.discription && (
            <>
              <h3 style={generalStyle}>Description:</h3>
              <p style={generalStyle}>{task.discription}</p>
            </>
          )}
        </div>
      </Container>
    </Background>
  );
}

export default TaskInformation;
