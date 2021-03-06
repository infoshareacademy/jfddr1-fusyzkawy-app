import React, { useState, useEffect, useContext } from "react";
import {
  Main,
  Navigation,
  ContainerBox,
  TasksTableHeader,
  Task,
  TaskData,
  TasksHeaderField,
  TaskDataField,
  TaskPriority,
  FilterBtn,
  ClearFilterBtn,
} from "./TasksStyled";
import { UserData } from "../../../contexts/UserData";
import PlayStop from "../../molecules/PlayStop/PlayStop";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import TaskModifacation from "../../molecules/TaskInformation/TaskModification";
import {
  stringDateToDateFormat,
  stringDateToStringWithDash,
} from "../../utils/dateFunction";
import FilterXXL from "../../molecules/FilterXXL/FilterXXL";

const Tasks = () => {
  const { userTasks } = useContext(UserData);
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);
  const [visibleTaskModification, setVisibleTaskModification] = useState(false);
  const [reformattedData, setReformattedData] = useState([]);
  const [activeFilterModal, setActiveFilterModal] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(userTasks);

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

  useEffect(() => {
    userTasks.length && setFilteredTasks(userTasks);
  }, [userTasks]);

  function filterTasks(filterData) {
    const filteredTasks = userTasks
      .filter(task => {
        return ["type", "priority", "status"].every(name =>
          filterData[name].length > 0
            ? filterData[name].includes(task[name])
            : true
        );
      })
      .filter(task =>
        ["title", "description", "project"]
          .map(name => task[name])
          .filter(Boolean)
          .some(word =>
            word.toLowerCase().includes(filterData.text.toLowerCase())
          )
      );
    setFilteredTasks(filteredTasks);
  }

  const clearFilterTasks = () => {
    setFilteredTasks(userTasks);
  };

  return (
    <Main>
      <Navigation>
        <FilterBtn
          onClick={event => {
            event.preventDefault();
            !activeFilterModal && setActiveFilterModal(true);
          }}
        >
          Filter
        </FilterBtn>
        <ClearFilterBtn onClick={clearFilterTasks}>Clear filter</ClearFilterBtn>
      </Navigation>
      <ContainerBox>
        <TasksTableHeader>
          <h3>Title</h3>
          <h3>Description</h3>
          <h3>Project</h3>
          <TasksHeaderField>Type</TasksHeaderField>
          <TasksHeaderField>Status</TasksHeaderField>
          <TasksHeaderField>Priority</TasksHeaderField>
          <TasksHeaderField>Start date</TasksHeaderField>
          <TasksHeaderField>End date</TasksHeaderField>
          <TasksHeaderField>Actions</TasksHeaderField>
        </TasksTableHeader>
        {filteredTasks.map(userTask => {
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
      {activeFilterModal === true ? (
        <FilterXXL
          closeModal={value => setActiveFilterModal(value)}
          onDataReady={filterTasks}
        />
      ) : null}
    </Main>
  );
};

export default Tasks;
