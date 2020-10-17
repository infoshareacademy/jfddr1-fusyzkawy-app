import React, { useState } from "react";
import styled from "styled-components";
import RadioInput from "../atoms/RadioInput";
import { options } from "../../test_variables";

const Container = styled.div`
  border-left: 5px solid var(--task-${props => props.color}-dark);
  border-radius: 0 15px 15px 0;
  background-color: var(--task-${props => props.color}-light);
  width: 500px;
  margin: 15px;
  padding: 5px;
  padding-left: 15px;
  text-align: left;
  color: var(--gray-3);
`;

const TaskHeader = styled.div`
  display: flex;
  margin: 15px;
  justify-content: space-between;
  align-items: center;
`;

const Photo = styled.div`
  height: 50px;
  width: 60px;
  border-radius: 100px;
  overflow: hidden;
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
  const tags = task.tags.split(" ");

  function handlerOnClick(event) {
    setStatus(event.target.value);
    setViewStatusOption(false);
  }

  return (
    <Container color={task.color}>
      <TaskHeader>
        <h2>{task.title}</h2>
        <div>
          <button>edit</button>
          <button>remove</button>
        </div>
      </TaskHeader>
      <div>
        Status:{" "}
        <button onClick={() => setViewStatusOption(!viewStatusOption)}>
          {status}
        </button>
        {viewStatusOption === true ? (
          <RadioInput
            categories={options}
            name="status"
            onClickInput={handlerOnClick}
          />
        ) : null}
        <p>
          {task.startHour} - {task.endHour}
        </p>
        <PhotoContainer>
          <Photo>
            <img src={task.imgCreator} height="50" />
          </Photo>
          <Photo>
            <img src={task.imgAssign} height="50" />
          </Photo>
        </PhotoContainer>
        <div>
          <h3>Tags:</h3>
          <TagsContainer>
            {tags.map(elem => (
              <Tag href=""> {elem} </Tag>
            ))}
          </TagsContainer>
        </div>
        <h3>Description:</h3>
        <p>{task.description}</p>
      </div>
    </Container>
  );
}

export default TaskInformation;
