//testing variables
export const inputDate = [2020, 10, 13];
export const task1 = {
  color: "green",
  discription: "testowe zadanie do wyświetlenia",
  end: new Date(2020, 10, 14, 18, 30, 0),
  id: 0,
  start: new Date(2020, 10, 13, 12, 0, 0),
  status: "new task",
  tags: "praca nuda coś tam jeszcze",
  taskClass: "task1Class",
  title: "Zadanie nr1",
};
export const task2 = {
  color: "purple",
  discription: "description for Zadanie nr2",
  end: new Date(2020, 10, 13, 16, 0, 0),
  id: 1,
  start: new Date(2020, 10, 13, 12, 0, 0),
  status: "new task",
  tags: "praca nuda coś tam jeszcze",
  taskClass: "task1Class",
  title: "Zadanie nr2",
};

export const allTasks = [task1, task2];

export const options = [
  "New task",
  "In progres",
  "Completed",
  "On hold",
  "Cancelled",
];

export const user1 = {
  dateOfBirth: "1990-10-15",
  email: "urajannet@gmail.com",
  name: "Nur A Jannet",
  phone: "123-456-789",
  photo:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  username: "nurajannet",
};

// end of testing variables

// function AppAnia() {
//   return (
//     <div className="App">
//       <DateHeader incommingDate={inputDate} isDateVisible={true} />
//       <hr />
//       <CalendarTask task={task1} />
//       <hr />
//       <Month date="2020 02 13" />
//       <hr />
//       <TaskInformation task={task1} />
//       <hr />
//       <Checkbox variables={options} />
//     </div>
//   );
// }

// export default AppAnia;
