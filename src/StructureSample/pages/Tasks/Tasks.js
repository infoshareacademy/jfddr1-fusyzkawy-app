import React, { useState, useEffect, useContext } from "react";
import {
  Header,
  Navigation,
  ContainerBox,
  TasksTableHeader,
  Task,
  TaskData,
  TasksHeaderField,
  TaskDataField,
  TaskPriority,
  FilterSortBtn,
} from "./TasksStyled";
import { UserData } from "../../../contexts/UserData";
import PlayStop from "../../molecules/PlayStop/PlayStop";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import TaskModifacation from "../../molecules/TaskInformation/TaskModification";
import {
  stringDateToDateFormat,
  stringDateToStringWithDash,
} from "../../utils/dateFunction";

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
    setCurrentTask(reformattedDataTask);
    setVisibleTaskInformation(true);
  }

  function modifyTask() {
    setVisibleTaskInformation(false);
    setVisibleTaskModification(true);
  }

  useEffect(() => {
    userTasks.length && setReformattedData(stringDateToDateFormat(userTasks));
  }, [userTasks]);
  return (
    <div className="mainHome">
      <Header>
        <h2>Tasks</h2>
        <Navigation>
          <FilterSortBtn>Filter</FilterSortBtn>
          <FilterSortBtn>Sort</FilterSortBtn>
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
                  {userTask.start && stringDateToStringWithDash(userTask.start)}
                </p>
                <p>
                  {userTask.end && stringDateToStringWithDash(userTask.end)}
                </p>
              </TaskData>
              <PlayStop classIcon="iconSVG" task={userTask} />
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
    </div>
  );
};

export default Tasks;
