import React from "react";
import "./App.css";
import SignIn from "./StructureSample/pages/SignIn";
import DateHeader from "./StructureSample/atoms/DateHeader";
import CalendarTask from "./StructureSample/molecules/CalendarTask";
import Month from "./StructureSample/molecules/Month";
import TaskInformation from "./StructureSample/molecules/TaskInformation";
import Calendar from "./StructureSample/pages/Calendar";
import Timer from "./StructureSample/pages/Timer";
import Checkbox from "./StructureSample/atoms/Checkbox";
import ProfileSettings from "./StructureSample/molecules/ProfileSettings";

//testing variables
const inputDate = [2020, 10, 13];
const task1 = {
  description: "testowe zadanie do wyświetlenia",
  endHour: "14.30",
  imgAssign:
    "https://banner2.cleanpng.com/20180706/zj/kisspng-face-with-tears-of-joy-emoji-sticker-clip-art-ty-dolla-sign-5b3f40ac3b08f8.5391494415308719802418.jpg",

  imgCreator:
    "https://banner2.cleanpng.com/20180623/qeh/kisspng-face-with-tears-of-joy-emoji-sticker-crying-emotic-plexus-5b2e08363a6521.8651402915297434142392.jpg",
  startHour: "12.00",
  status: "Status: new task",
  tags: "praca nuda coś tam jeszcze",
  taskClass: "task1Class",
  title: "Zadanie nr1",
};
const task2 = {
  description: "description for Zadanie nr2",
  endHour: "16.00",
  imgAssign:
    "https://banner2.cleanpng.com/20180706/zj/kisspng-face-with-tears-of-joy-emoji-sticker-clip-art-ty-dolla-sign-5b3f40ac3b08f8.5391494415308719802418.jpg",

  imgCreator:
    "https://banner2.cleanpng.com/20180623/qeh/kisspng-face-with-tears-of-joy-emoji-sticker-crying-emotic-plexus-5b2e08363a6521.8651402915297434142392.jpg",
  startHour: "12.00",
  status: "new task",
  tags: "praca nuda coś tam jeszcze",
  taskClass: "task1Class",
  title: "Zadanie nr2",
};

const allTasks = [task1, task2];

const options = [
  "new task",
  "ELELEMEMET",
  "in progres",
  "completed",
  "on hold",
  "cancelled",
];

const user1 = {
  dateOfBirth: "1990-10-15",
  email: "urajannet@gmail.com",
  name: "Nur A Jannet",
  phone: "123-456-789",
  photo:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  username: "nurajannet",
};

// end of testing variables
function AppAnia() {
  const username = "Janek";
  const password = "password";
  return (
    <div className="App">
      <DateHeader incommingDate={inputDate} isDateVisible={true} />
      <hr />
      <CalendarTask task={task1} />
      <hr />
      <Month date="2020 02 13" />
      <hr />
      <TaskInformation task={task1} />
      <hr />
      <Calendar dateCalendar="2020 02 13" />
      <hr />
      <Timer tasks={allTasks} view={"current"} />
      <hr />
      <Checkbox variables={options} />
      <hr />
      <ProfileSettings user={user1} />
    </div>
  );
}

export default AppAnia;
