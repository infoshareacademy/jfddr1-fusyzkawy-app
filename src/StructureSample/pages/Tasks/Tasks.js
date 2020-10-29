import React, { useState, useEffect, useContext } from "react";
import {
  Header,
  Navigation,
  NewLink,
  ContainerBox,
  TasksTableHeader,
  Task,
  TaskData,
  TasksHeaderField,
  TaskDataField,
  TaskPriority,
} from "./TasksStyled";
import { UserData } from "../../../contexts/UserData";
import PlayStop from "../../molecules/PlayStop";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import TaskModifacation from "../../molecules/TaskInformation/TaskModification";

const Tasks = () => {
  const { userTasks } = useContext(UserData);
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);
  const [visibleTaskModification, setVisibleTaskModification] = useState(false);
  const [reformattedData, setReformattedData] = useState([]);

  function handlerOnClick(task) {
    const reformattedDataTask = reformattedData.filter(
      reformattedTask => reformattedTask.taskId === task.taskId
    )[0];
    console.log("reformated data task", reformattedDataTask);
    console.log("task", task);
    setCurrentTask(reformattedDataTask);
    setVisibleTaskInformation(true);
  }

  function modifyTask() {
    setVisibleTaskInformation(false);
    setVisibleTaskModification(true);
  }

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
          <TasksHeaderField>Title</TasksHeaderField>
          <TasksHeaderField>Description</TasksHeaderField>
          <TasksHeaderField>Project</TasksHeaderField>
          <h3>Type</h3>
          <h3>Status</h3>
          <h3>Priority</h3>
          <h3>Start date</h3>
          <h3>End date</h3>
          <h3>Actions</h3>
        </TasksTableHeader>
        {userTasks.map(userTask => {
          return (
            <Task key={userTask.taskId}>
              <TaskData onClick={() => handlerOnClick(userTask)}>
                <TaskDataField>{userTask.title}</TaskDataField>
                <TaskDataField>{userTask.description}</TaskDataField>
                <TaskDataField>{userTask.project}</TaskDataField>
                <p>{userTask.type}</p>
                <p>{userTask.status}</p>
                <TaskPriority
                  color={
                    userTask.priority === "High"
                      ? "var(--task-red-dark)"
                      : userTask.priority === "Medium"
                      ? "var(--basic-light-blue)"
                      : "var(--task-yellow-dark)"
                  }
                >
                  {userTask.priority}
                </TaskPriority>
                <p>
                  {userTask.start.length < 10
                    ? ""
                    : userTask.start.slice(0, 10).split(" ").join("-")}
                </p>
                <p>
                  {userTask.end.length < 10
                    ? ""
                    : userTask.end.slice(0, 10).split(" ").join("-")}
                </p>
              </TaskData>
              <PlayStop />
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
    </div>
  );
};

export default Tasks;
