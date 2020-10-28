import React, { useState, useEffect, useContext } from "react";
import {
  Header,
  Navigation,
  NewLink,
  ContainerBox,
  TasksTableHeader,
  Task,
} from "./TasksStyled";
import { UserData } from "../../../contexts/UserData";
import PlayStop from "../../molecules/PlayStop";

const Tasks = () => {
  const { userTasks } = useContext(UserData);
  const [reformattedData, setReformattedData] = useState([]);

  console.log(reformattedData);

  useEffect(() => {
    userTasks.length &&
      setReformattedData(
        userTasks.map(elem => {
          if (typeof elem.start === "string") {
            elem = { ...elem };
            elem.start = new Date(
              ...elem.start.split(" ").map(elem => parseInt(elem))
            );
            elem.start.setMonth(elem.start.getMonth() - 1);
            elem.end = new Date(
              ...elem.end.split(" ").map(elem => parseInt(elem))
            );
            elem.end.setMonth(elem.end.getMonth() - 1);
          }
          return elem;
        })
      );
  }, [userTasks]);

  return (
    <div className="mainHome">
      <Header>
        <h2>Tasks</h2>
        <Navigation>
          <NewLink
            activeClassName="activeLink"
            to={`/jfddr1-fusyzkawy-app/timer/current`}
          >
            Current
          </NewLink>
          <NewLink
            activeClassName="activeLink"
            to={`/jfddr1-fusyzkawy-app/timer/week`}
          >
            Week
          </NewLink>
        </Navigation>
      </Header>
      <ContainerBox>
        <TasksTableHeader>
          <h3>Title</h3>
          <h3>Description</h3>
          <h3>Project</h3>
          <h3>Type</h3>
          <h3>Status</h3>
          <h3>Priority</h3>
          <h3>Start date</h3>
          <h3>End date</h3>
          <h3>Actions</h3>
        </TasksTableHeader>
        {userTasks.map(userTask => {
          return (
            <Task key={userTask.id}>
              <p>{userTask.title}</p>
              <p>{userTask.description}</p>
              <p>{userTask.project}</p>
              <p>{userTask.type}</p>
              <p>{userTask.status}</p>
              <p>{userTask.priority}</p>
              <p>{userTask.start}</p>
              <p>{userTask.end}</p>
              <PlayStop />
            </Task>
          );
        })}
      </ContainerBox>
    </div>
  );
};

export default Tasks;
